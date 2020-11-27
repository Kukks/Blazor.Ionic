using System.Text.Json.Serialization;

namespace Hara.UI.Shared.Ionic.Models
{
    public class OverlayEventDetail<T> where T: IonicComponentDismissPayloadData
    {
        [JsonPropertyName("data")]
        public T Data { get; set; }

        [JsonPropertyName("role")]
        public string Role { get; set; }
    }
}