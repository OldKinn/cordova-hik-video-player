var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        document.getElementById('testBtn').addEventListener('click', function(e) {
            alert('调用本地方法');
            cordova.plugins.VideoPlugin.coolMethod("hello", function(data) {
                alert(data);
            }, function(err) {
                alert(err.message);
            });
        });
        document.getElementById('testOpen').addEventListener('click', function(e) {
            cordova.plugins.VideoPlugin.openActivity(function() {
                console.log('打开成功');
            }, function(err) {
                alert(err.message);
            });
        });
        document.getElementById('previewBtn').addEventListener('click', function(e) {
            cordova.plugins.VideoPlugin.openPreview(function() {
                console.log('打开成功');
            }, function(err) {
                alert(err.message);
            });
        });
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();