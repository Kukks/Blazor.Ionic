using System.Collections.Generic;
using Microsoft.AspNetCore.Components;

namespace Blazor.Ionic
{
    public abstract class BaseIonicComponent: ComponentBase
    {
        [Parameter] public RenderFragment ChildContent { get; set; }       
        protected ElementReference Element;     

        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> InputAttributes { get; set; }
    }
}