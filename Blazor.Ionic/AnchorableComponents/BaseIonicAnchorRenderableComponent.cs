using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace Blazor.Ionic
{
    public class BaseIonicAnchorRenderableComponent : BaseIonicComponent
    {
        [Inject] protected NavigationManager NavigationManager { get; set; }

        [Parameter] public EventCallback<MouseEventArgs> OnClick { get; set; }

        protected bool ShouldInterceptHref => InputAttributes != null && (InputAttributes.ContainsKey("href") &&
                                                                          (!InputAttributes.TryGetValue("target",
                                                                               out var target) ||
                                                                           target.ToString().ToLowerInvariant()
                                                                               .TrimStart('_') == "self"));

        protected async Task OnClickCallback(MouseEventArgs obj)
        {
            if (ShouldInterceptHref)
            {
                NavigationManager.NavigateTo(InputAttributes["href"].ToString());
            }
            else
            {
                await OnClick.InvokeAsync(obj);
            }
        }
    }
}