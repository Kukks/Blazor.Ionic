# Blazor.Ionic

[See demo here](https://kukks.github.io/Blazor.Ionic) 

## Installation

* Add Ionic to your solution. 
  * You can use the [CDN packages](https://ionicframework.com/docs/intro/cdn)
  * or by grabbing the ionic NPM Package `@ionic/core` and copying the contents of `@ionic\core\dist` and `@ionic\core\css\ionic.bundle.css` to `wwwroot.ionic`. Reference them in your index.html like this:
  ```
    <script type="module" src="ionic/ionic.esm.js"></script>
    <script nomodule src="ionic/ionic.js"></script>
    <link rel="stylesheet" href="ionic/ionic.bundle.css"/>
  ``` 
  * If you are using Ionic on Xamarin Mobile Blazor Bindings, the SVGS will not load unless you include the following javascript
  ```
  <script type="text/javascript">
          var originalFetch = window.fetch;
  
          window.fetch = function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              var url = args[0];
              if (typeof url === 'string' && url.match(/\.svg/)) {
                  return new Promise(function (resolve, reject) {
                      var req = new XMLHttpRequest();
                      req.open('GET', url, true);
                      req.addEventListener('load', function () {
                          resolve({ ok: true, status: 200, text: function () { return Promise.resolve(req.responseText); } });
                      });
                      req.addEventListener('error', reject);
                      req.send();
                  });
              }
              else {
                  return originalFetch.apply(void 0, args);
              }
          };
  </script>
  ```
* Add Blazor.Ionic to your project 
`Install-Package BlazorIonic`
* Add Blazor.Ionic's javascript to your index.cshtml
`<script src="_content/BlazorIonic/ionic-bridge.js"></script>`
* In your `Imports.razor`, add the following `@using Blazor.Ionic`

## Usage
You should be able to make use most of the original components from Ionic [documented here](https://ionicframework.com/docs/components). 

If you use `ion-item` with a `href` attribute, you will need additional syntax due to some limitations.
`<ion-item href="link" @onclick='() => NavigationManager.NavigateTo("link")'  @onclick:preventDefault="true">`

This library provides Blazor components that allow you to use their mandatory-javascript components.

```
@page "/demo"
@using Blazor.Ionic
@implements IDisposable

<section>
    <ion-button @onclick="ToggleLoader" expand="block">Toggle loader (currently @VisibleLoader)</ion-button>
    <ion-button @onclick="ToggleAlert" expand="block">Toggle alert (currently @VisibleAlert)</ion-button>
    <ion-button @onclick="ToggleModal" expand="block">Toggle modal (currently @VisibleModal)</ion-button>
    <ion-button @onclick="ToggleActionSheet" expand="block">Toggle action sheet (currently @VisibleActionSheet)</ion-button>
    <ion-list>
        @foreach (var log in Logs)
        {
            <ion-item>
                <ion-label>
                    @log
                </ion-label>
            </ion-item>
        }
    </ion-list>
</section>
<IonModal @bind-Visible="@VisibleModal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Header</ion-title>
        <ion-buttons slot="primary">
          <ion-button @onclick="ToggleModal">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        Modal Content
    </ion-content>
</IonModal>
<IonLoading @bind-Visible="@VisibleLoader" message="loader message" backdrop-dismiss="true"></IonLoading>
<IonAlert @bind-Visible="@VisibleAlert" message="alert message" Buttons="buttons" Inputs="inputs" backdrop-dismiss="true"></IonAlert>
<IonActionSheet @bind-Visible="@VisibleActionSheet" Buttons="actionSheetButtons" header="An action sheet!"></IonActionSheet>
@code {

    public IonAlert.IonAlertButton[] buttons;
    public IonActionSheet.IonActionSheetButton[] actionSheetButtons;
    public IonAlert.IonAlertInput[] inputs;
    public List<string> Logs = new List<string>();
    private bool _visibleAlert;
    private bool _visibleActionSheet;
    private bool _visibleModal;
    private bool _visibleLoader;

    public bool VisibleLoader
    {
        get => _visibleLoader;
        set
        {
            Logs.Add($"VisibleLoaderChanged {value}");
            _visibleLoader = value;
        }
    }

    public bool VisibleAlert
    {
        get => _visibleAlert;
        set
        {
            Logs.Add($"VisibleAlertChanged {value}");
            _visibleAlert = value;
        }
    }

    public bool VisibleActionSheet
    {
        get => _visibleActionSheet;
        set
        {
            Logs.Add($"VisibleActionSheetChanged {value}");
            _visibleActionSheet = value;
        }
    }

    public bool VisibleModal
    {
        get => _visibleModal;
        set
        {
            Logs.Add($"VisibleModalChanged {value}");
            _visibleModal = value;
        }
    }

    protected override void OnInitialized()
    {
        buttons = new[]
        {
            new IonAlert.IonAlertButton()
            {
                Options = new Dictionary<string, object>()
                {
                    {"text", "a button!"},
                    {"role", "customrole"}
                },
                Handler = o =>
                {
                    var vals = string.Join(",", o.Options.Select(pair => $"{pair.Key}={pair.Value}").ToArray());
                    Logs.Add($"1st option clicked! {(vals)}" );
                    return Task.CompletedTask;
                }
            },
            new IonAlert.IonAlertButton()
            {
                Options = new Dictionary<string, object>()
                {
                    {"text", "Cancel"},
                    {"role", "cancel"}
                },
                Handler = o =>
                {
                    var vals = string.Join(",", o.Options.Select(pair => $"{pair.Key}={pair.Value}").ToArray());
                    Logs.Add($"cancel clicked! {vals}" );
                    return Task.CompletedTask;
                }
            }
        };
        actionSheetButtons = new[]
        {
            new IonActionSheet.IonActionSheetButton()
            {
                Options = new Dictionary<string, object>()
                {
                    {"text", "a button!"},
                    {"icon", "caret-forward-circle"},
                    {"role", "customrole"}
                },
                Handler = o =>
                {
                    var vals = string.Join(",", o.Options.Select(pair => $"{pair.Key}={pair.Value}").ToArray());
                    Logs.Add($"1st option clicked! {(vals)}" );
                    return Task.CompletedTask;
                }
            },
            new IonActionSheet.IonActionSheetButton()
            {
                Options = new Dictionary<string, object>()
                {
                    {"text", "Cancel"},
                    {"icon", "cancel"},
                    {"role", "cancel"}
                },
                Handler = o =>
                {
                    var vals = string.Join(",", o.Options.Select(pair => $"{pair.Key}={pair.Value}").ToArray());
                    Logs.Add($"cancel clicked! {vals}" );
                    return Task.CompletedTask;
                }
            }
        };
        inputs = new[]
        {
            new IonAlert.IonAlertInput()
            {
                Options = new Dictionary<string, object>()
                {
                    {"type", "text"},
                    {"label", "Please tell us about yourself"},
                    {"placeholder", "14/f/cali"},
                    {"name", "personalDescription"},
                    {"id", "alert-personalDescription"}
                }
            }
        };
        StateHasChanged();
    }

    private void ToggleLoader()
    {
        VisibleLoader = !VisibleLoader;
    }

    private void ToggleAlert()
    {
        VisibleAlert = !VisibleAlert;
    }

    private void ToggleModal()
    {
        VisibleModal = !VisibleModal;
    }

    private void ToggleActionSheet()
    {
        VisibleActionSheet = !VisibleActionSheet;
    }

}
```

