using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Blazor.Ionic.Models
{
    public class IonicComponentDismissPayloadData
    {
        [JsonExtensionData]
        public Dictionary<string, object> AdditionalData { get; set; }
    }
}