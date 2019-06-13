cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "VideoPlugin.VideoPlugin",
      "file": "plugins/VideoPlugin/www/VideoPlugin.js",
      "pluginId": "VideoPlugin",
      "clobbers": [
        "cordova.plugins.VideoPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "VideoPlugin": "0.1.0"
  };
});