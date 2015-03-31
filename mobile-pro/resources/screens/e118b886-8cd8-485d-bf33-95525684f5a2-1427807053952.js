jQuery("#simulation")
  .on("click", ".s-e118b886-8cd8-485d-bf33-95525684f5a2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  }
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "407"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "199"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  }
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "407"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "199"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  }
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "407"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "199"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  }
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "407"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "105"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  }
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "407"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "105"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5baced72-63cd-44ca-a564-990a8a6e04a3"
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