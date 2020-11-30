using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Blazor.Ionic
{
    public abstract class BaseIonicInputComponent<TInputType, TChangeEventDetail> : ComponentBase
        where TChangeEventDetail : BaseIonicChangeEventDetail<TInputType>
    {
        private TInputType _value;

        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> InputAttributes { get; set; }

        [Parameter] public RenderFragment ChildContent { get; set; }

        [Parameter]
        public TInputType Value
        {
            get => _value;
            set
            {
                if (Equals(_value, value)) return;
                _value = value;
                ValueChanged.InvokeAsync(value);
            }
        }

        [Parameter] public EventCallback<TInputType> ValueChanged { get; set; }

        [Inject] protected IJSRuntime JsRuntime { get; set; }
        protected DotNetObjectReference<BaseIonicInputComponent<TInputType, TChangeEventDetail>> ThisRef { get; set; }
        protected ElementReference Element;

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                ThisRef = DotNetObjectReference.Create(this);
                await JsRuntime.InvokeVoidAsync("IonicBridge.registerBlazorCustomHandler", Element, "ionChange",
                    ThisRef, nameof(HandleChange));
            }

            await base.OnAfterRenderAsync(firstRender);
        }

        [JSInvokable(nameof(HandleChange))]
        public virtual Task HandleChange(TChangeEventDetail detail)
        {
            Value = detail.GetValue();
            return Task.CompletedTask;
        }
    }

    public abstract class BaseIonicChangeEventDetail<TInputType>
    {
        public abstract TInputType GetValue();
    }
}