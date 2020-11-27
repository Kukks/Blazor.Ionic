using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hara.UI.Shared.Ionic.Models
{
    public class IonicComponentDismissPayloadData
    {
        [JsonExtensionData]
        public Dictionary<string, object> AdditionalData { get; set; }
    }
}