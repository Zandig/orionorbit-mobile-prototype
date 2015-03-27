(function(window, undefined) {
  var dictionary = {
    "61c1956c-33c0-4b73-821f-475e6aaabaa7": "after help",
    "486c2819-c9c0-4a15-8636-7a9e0102f5e8": "you",
    "70d86354-e766-4bfc-812f-5fe5772471a0": "Registration",
    "44a1939a-9cbb-42a9-a0de-da183d1328f2": "signup fb",
    "079809d6-1089-4776-bead-f8a5cb64d95a": "full on ,treasure hunt hateit",
    "e118b886-8cd8-485d-bf33-95525684f5a2": "feed",
    "f5ae4f09-ada8-4bc9-9add-ed9eec97e0d0": "place",
    "f3f06f39-12d9-4b8d-b384-9b8ef0875fc3": "demo quckie",
    "6a2d42a4-d060-480d-88d1-225e8b28c87b": "full on ,treasure hunt, skip",
    "9036616c-af44-4f58-aed7-585d8478f17e": "login2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "login",
    "634582c5-8481-4f05-898a-1a9f529fdd56": "full on ,treasure hunt popup",
    "3f3a45ff-108b-45f8-844c-6496b4337b75": "quckie",
    "d5c27c78-34d2-4b10-a341-38d375d87d81": "demo home",
    "cc8d679a-6ac4-43b6-aeaa-eefd4237146d": "quckie done hateit",
    "92dfad0a-0d3a-439c-afc3-24398478b1ac": "video",
    "5baced72-63cd-44ca-a564-990a8a6e04a3": "home",
    "e4634b86-8f8a-4f30-bd3f-52eb964726d5": "play",
    "85151a75-cfba-41c6-b997-56007908836c": "demo full on ,treasure hunt",
    "ff363b89-45d4-443c-84c3-b537a9c39c0d": "map",
    "eef4e408-ed7f-4e25-b3da-01173b3916af": "full on ,treasure hunt",
    "400f8696-94e8-4e5d-994d-c7ab31b884b5": "quckie done",
    "f6509c26-7a68-4eba-a0f4-74686ea68669": "full on ,treasure hunt done",
    "2171d4db-6a3b-421b-aa83-d6bc51abef94": "contribute clue",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);