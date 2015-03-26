function initData() {
  jimData.datamasters["user"] = [
    {
      "id": 1,
      "datamaster": "user",
      "userdata": {
        "login": "oo",
        "password": "1234"
      }
    },
    {
      "id": 2,
      "datamaster": "user",
      "userdata": {
        "login": "madhu",
        "password": "2345"
      }
    },
    {
      "id": 3,
      "datamaster": "user",
      "userdata": {
        "login": "arvind",
        "password": "1234"
      }
    }
  ];

  jimData.datamasters["quickie"] = [
    {
      "id": 1,
      "datamaster": "quickie",
      "userdata": {
        "placename": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "quickie",
      "userdata": {
        "placename": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "quickie",
      "userdata": {
        "placename": "sample text"
      }
    }
  ];

  jimData.isInitialized = true;
}