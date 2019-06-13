cordova.define("VideoPlugin.VideoPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'VideoPlugin', 'coolMethod', [arg0]);
};

});
