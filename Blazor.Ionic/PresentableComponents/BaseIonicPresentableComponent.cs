using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Blazor.Ionic
{
    public abstract class BaseIonicPresentableComponent<TPresentedData, TDismissedData> : ComponentBase,
        IAsyncDisposable
    {
        [Inject] protected IJSRuntime JsRuntime { get; set; }

        [Parameter]
        public bool Visible
        {
            get => _visible;
            set
            {
                if (_visible != value && _realVisible != value)
                {
                    _renderActions.Enqueue(async () =>
                    {
                        if (value)
                        {
                            Id = Guid.NewGuid().ToString();
                            await CreateElement();
                        }

                        await JsRuntime.InvokeVoidAsync("IonicBridge.executeFunctionByName", Id,
                            value ? "present" : "dismiss");
                    });
                }

                _visible = value;
            }
        }

        [Parameter] public EventCallback<bool> VisibleChanged { get; set; }
        [Parameter] public EventCallback<TDismissedData> Dismissed { get; set; }
        [Parameter] public EventCallback<TPresentedData> Presented { get; set; }

        protected DotNetObjectReference<BaseIonicPresentableComponent<TPresentedData, TDismissedData>> ThisRef;
        private bool _realVisible;
        private bool _visible;
        private readonly Queue<Func<Task>> _renderActions = new Queue<Func<Task>>();
        protected string Id;

        [JSInvokable(nameof(HandleDismissed))]
        public virtual Task HandleDismissed(TDismissedData data)
        {
            return HandleDismissedCore(data);
        }

        [JSInvokable(nameof(HandlePresented))]
        public virtual Task HandlePresented(TPresentedData data)
        {
            return HandlePresentedCore(data);
        }

        public async Task HandleDismissedCore(TDismissedData data)
        {
            _realVisible = false;
            await Dismissed.InvokeAsync(data);
            if (_realVisible != _visible)
                await VisibleChanged.InvokeAsync(_realVisible);
        }

        public async Task HandlePresentedCore(TPresentedData data)
        {
            _realVisible = true;
            await Presented.InvokeAsync(data);
            if (_realVisible != _visible)
                await VisibleChanged.InvokeAsync(_realVisible);
        }

        protected abstract Task CreateElement();

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                ThisRef = DotNetObjectReference.Create(this);
            }

            while (_renderActions.Any())
            {
                await _renderActions.Dequeue().Invoke();
            }

            await base.OnAfterRenderAsync(firstRender);
        }

        public virtual async ValueTask DisposeAsync()
        {
            if (_realVisible || _visible)
            {
                var tcs = new TaskCompletionSource<bool>();
                Dismissed = new EventCallback<TDismissedData>(this, new Action(() => tcs.SetResult(true)));
                await JsRuntime.InvokeVoidAsync("IonicBridge.executeFunctionByName", Id, "dismiss");
                await tcs.Task;
            }

            ThisRef?.Dispose();
        }
    }
}