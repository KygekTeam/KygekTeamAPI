fs = require('fs')
var JSONArray = null;
var objectOfRequestedPlugin = null;
fs.readFile('./plugins.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  JSONArray = JSON.parse(data);
  JSONArray.forEach((object) => {
    if (object.name == "PerWorldPlayersList") {
        objectOfRequestedPlugin = object;
    }
  })
  if (objectOfRequestedPlugin != null) {
    console.log(JSON.stringify(objectOfRequestedPlugin));
  } else {
      console.log("That isn't a plugin by KygekTeam or one of it's members.");
  }
});