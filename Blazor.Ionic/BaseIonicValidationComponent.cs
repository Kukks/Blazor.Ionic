#nullable enable
using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;

namespace Blazor.Ionic
{

    public class BaseIonicValidationComponent : BaseIonicComponent, IBaseIonicValidationComponent
    {
        private EditContext? _editContext;

        protected Action<EditContext?>? EditContextChanging;
        private FieldIdentifier? _validationFieldIdentifier;
        private Expression<Func<object>>? _validationField;
        private EditContext? _cascadingEditContext;

        [Parameter]
        public EditContext? EditContext
        {
            get => _editContext ?? CascadingEditContext;
            set
            {
                EditContextChanging?.Invoke(value);
                _editContext = value;
            }
        }

        [CascadingParameter]
        public EditContext? CascadingEditContext
        {
            get => _cascadingEditContext;
            set
            {
                EditContextChanging?.Invoke(value);
                _cascadingEditContext = value;
            }
        }

        [Parameter]
        public FieldIdentifier? ValidationFieldIdentifier
        {
            get => _validationFieldIdentifier ?? CascadingValidationFieldIdentifier ??
                (ValidationField is null ? null : FieldIdentifier.Create(ValidationField));
            set => _validationFieldIdentifier = value;
        }

        [CascadingParameter] public FieldIdentifier? CascadingValidationFieldIdentifier { get; set; }

        [Parameter]
        public Expression<Func<object>>? ValidationField
        {
            get => _validationField ?? CascadingValidationField;
            set => _validationField = value;
        }

        [CascadingParameter] public Expression<Func<object>>? CascadingValidationField { get; set; }

        public void NotifyFieldChanged()
        {
            if (EditContext != null && ValidationFieldIdentifier != null)
            {
                EditContext.NotifyFieldChanged(ValidationFieldIdentifier.Value);
            }
        }

        public string[]? GetValidationMessages()
        {
            if (EditContext != null && ValidationFieldIdentifier != null)
            {
                return EditContext.GetValidationMessages(ValidationFieldIdentifier.Value)?.ToArray();
            }

            return null;
        }
    }
}