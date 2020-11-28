using System;

namespace Blazor.Ionic.Demo
{
    public class UIStateService
    {
        private string _title;

        public string Title
        {
            get => _title;
            set
            {
                _title = value;
                StateChanged?.Invoke();
            }
        }

        public event Action StateChanged;
    }
}