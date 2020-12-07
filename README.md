# Blazor.Ionic

[See demo here](https://kukks.github.io/Blazor.Ionic) 

## Installation

* Add Ionic to your solution. 
  * You can use the [CDN packages](https://ionicframework.com/docs/intro/cdn)
  * or by grabbing the ionic NPM Package `@ionic/core` and copying the contents of `@ionic\core\dist` and `@ionic\core\css\ionic.bundle.css` to `wwwroot.ionic`. Reference them in your index.html like this:
  ```
    <script type="module" src="ionic/ionic.esm.js"></script>
    <script nomodule src="ionic/ionic.js"></script>
    <link rel="stylesheet" href="ionic/ionic.bundle.css"/>
  ``` 
  * If you are using Ionic on Xamarin Mobile Blazor Bindings, the SVGS will not load unless you include the following javascript
  ```
  <script type="text/javascript">
          var originalFetch = window.fetch;
  
          window.fetch = function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              var url = args[0];
              if (typeof url === 'string' && url.match(/\.svg/)) {
                  return new Promise(function (resolve, reject) {
                      var req = new XMLHttpRequest();
                      req.open('GET', url, true);
                      req.addEventListener('load', function () {
                          resolve({ ok: true, status: 200, text: function () { return Promise.resolve(req.responseText); } });
                      });
                      req.addEventListener('error', reject);
                      req.send();
                  });
              }
              else {
                  return originalFetch.apply(void 0, args);
              }
          };
  </script>
  ```
* Add Blazor.Ionic to your project 
`Install-Package BlazorIonic`
* Add Blazor.Ionic's javascript to your index.cshtml
`<script src="_content/BlazorIonic/ionic-bridge.js"></script>`
* In your `Imports.razor`, add the following `@using Blazor.Ionic`

## Usage
You should be able to make use most of the original components from Ionic [documented here](https://ionicframework.com/docs/components). 

