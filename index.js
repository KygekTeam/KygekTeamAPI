const { json } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
var jsonText = "";
var jsonArray = [];

fs.readFile("./plugins.json", "utf-8", (err, data) => {
    if (err) {
        console.error("[ERROR]: Cannot read plugins.json: " + err);
        return exit();
    }
    
    jsonText = data;
    jsonArray = JSON.parse(jsonText);
});

app.get('/', (req, res) => {
    res.send(JSON.stringify(jsonArray));
});

app.get('/names', (req, res) => {
    var namesArray = [];
    jsonArray.forEach((object) => {
        namesArray.push(object.name);
    });
    res.send(JSON.stringify(namesArray));
});

function loadPlugin(req, res, next) {
    var pluginName = req.params.plugin;
    var pluginObject = null;
    jsonArray.forEach((object) => {
        if (object.name == pluginName) {
            pluginObject = object;
        }
    });
    if (pluginObject != null) {
        req.pluginError = null;
        req.plugin = pluginObject;
        next();
    } else {
        req.pluginError = "not-a-plugin";
        next();
    }
}

app.get('/plugin/:plugin', loadPlugin, (req, res) => {
    if (!req.pluginError) {
        res.send(JSON.stringify(req.plugin));
    } else {
        res.send(JSON.stringify({error:req.pluginError}))
    }
});

app.get('/downloadcount', (req, res) => {
    res.send(JSON.stringify({error:"not-released"}));
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});