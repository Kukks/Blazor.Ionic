window.IonicBridge = {
    getParentTargetProp: function (parent, propertyName) {
        if (typeof parent === "string" && parent !== "window") {
            parent = document.getElementById(parent);
        } else if (typeof parent === "string" && parent === "window") {
            parent = window;
        }
        propertyName = propertyName || "";
        const parts = propertyName.split('.');
        let target = parent;
        if (parts.length > 1) {
            for (let part of parts) {
                let didComplex = false;
                while (part.indexOf('[') > -1) {
                    const startBracket = part.indexOf('[');
                    const endBracket = part.indexOf(']');
                    const smallerPart = part.substr(0, startBracket);
                    const bracketValue = part.substr(startBracket + 1, endBracket - startBracket - 1);
                    parent = target[smallerPart];
                    target = parent[bracketValue];
                    didComplex = true;
                    part = part.substr(endBracket + 1);
                }
                if (!didComplex) {
                    parent = target;
                    target = target[part] || part;
                }
            }
        } else if (parent != null){
            target = parent[propertyName];
        }
        return {parent, target};
    },
    createElement: function (tag, id, attrs, data) {
        const el = document.createElement(tag);
        attrs = attrs || {};
        data = data || {};
        el.setAttribute("id", id);
        for (const attr in attrs) {
            el.setAttribute(attr, attrs[attr]);
        }
        for (const k in data) {
            el[k] = data[k];
        }
        document.body.appendChild(el);
    },

    executeFunctionByName: function (obj, name) {
        const args = Array.prototype.slice.call(arguments).splice(2);
        const target = this.getParentTargetProp(obj, name);

        if (!target.parent || !target.target || typeof target.target !== "function") {
            console.error(`"Blazor attempted to call ${obj}.${name}(${args.join(', ')})`)
            return;
        }
        return target.target.apply(target.parent, args);
    },

    registerBlazorCustomHandler: function (component, eventName, callbackClass, callBackMethodName) {
        this.executeFunctionByName(component, "addEventListener", eventName, (e) => {
            callbackClass.invokeMethodAsync(callBackMethodName, e.detail);
        });
    },

    setWebComponentProperty: function (obj, name, value) {
        const target = this.getParentTargetProp(obj, name);
        if (target.parent && target.target) {
            target.parent[target.target] = value;
        }
    },

    setWebComponentPropertyWithCallback: function (webComp, propertyName, callbackClass, callBackMethodName, id) {
        this.setWebComponentProperty(webComp, propertyName, function () {
            return callbackClass.invokeMethodAsync(callBackMethodName, arguments, id);
        });
    },
    executeFunctionByNameWithPromise: function (webComp, propertyName, callbackClass, callBackMethodName, callBackMethodErrorName) {
        Promise.resolve(this.executeFunctionByName(webComp, propertyName, Array.prototype.slice.call(arguments).splice(4)))
            .then(function () {
                return callbackClass.invokeMethodAsync(callBackMethodName, arguments);
            }).catch(function () {
            return callbackClass.invokeMethodAsync(callBackMethodName, arguments);
        });
    },
    removeremove: function (obj, parentElement) {
        if (obj) {
            obj.removeOriginal = obj.remove;
            obj.remove = () => {
                parentElement.appendChild(obj);
            };
        }
    },
    removeremoveremove: function (obj) {
        if (obj && obj.removeOriginal) {
            obj.remove = obj.removeOriginal;
        }
    }
}