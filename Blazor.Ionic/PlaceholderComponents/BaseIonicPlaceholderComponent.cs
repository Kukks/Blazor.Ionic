using System.Collections.Generic;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Blazor.Ionic.PlaceholderComponents
{
    public abstract class BaseIonicPlaceholderComponent: ComponentBase
    {
        protected abstract string ElementName { get; }
        [Parameter] public RenderFragment ChildContent { get; set; }       

        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> InputAttributes { get; set; }

        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {
            builder.OpenElement(0, ElementName);
            builder.AddMultipleAttributes(1, InputAttributes);
            builder.AddContent(2, ChildContent);
            builder.CloseElement();
        }
    }
}