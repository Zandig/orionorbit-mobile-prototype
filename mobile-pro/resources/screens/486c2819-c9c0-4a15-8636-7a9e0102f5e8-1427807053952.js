jQuery("#simulation")
  .on("click", ".s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes": {
                        "background-color": "#627AAD",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#627AAD",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes": {
                        "background-color": "#627AAD",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#627AAD",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes": {
                        "background-color": "#627AAD",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#627AAD",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes": {
                        "background-color": "#627AAD",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#627AAD",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes": {
                        "background-color": "#F5F5F4",
                        "background-image#moz": "-moz-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#wk": "-webkit-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#F5F5F4), color-stop(100%,#E1E1E1))",
                        "background-image#op": "-o-linear-gradient(top,#F5F5F4,#E1E1E1)",
                        "background-image#draft": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "8.0pt"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-486c2819-c9c0-4a15-8636-7a9e0102f5e8 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#F5F5F4,#E1E1E1)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });