cordova.define("VideoPlugin.VideoPlugin", function(require, exports, module) {

    var exec = require('cordova/exec');

    exports.coolMethod = function (arg0, success, error) {
        exec(success, error, 'VideoPlugin', 'coolMethod', [arg0]);
    };

    exports.openPreview = function(success, error) {
        exec(success, error, 'VideoPlugin', 'openPreview');
    }

    exports.openActivity = function(success, error) {
        exec(success, error, 'VideoPlugin', 'openActivity');
    }
});
