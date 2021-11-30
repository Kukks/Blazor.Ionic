#nullable enable
using System;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Components.Forms;

namespace Blazor.Ionic
{
    public interface IBaseIonicValidationComponent
    {
        EditContext? EditContext { get; set; }
        EditContext? CascadingEditContext { get; set; }
        FieldIdentifier? ValidationFieldIdentifier { get; set; }
        FieldIdentifier? CascadingValidationFieldIdentifier { get; set; }
        Expression<Func<object>>? ValidationField { get; set; }
        Expression<Func<object>>? CascadingValidationField { get; set; }
        void NotifyFieldChanged();
        string[]? GetValidationMessages();
    }
}