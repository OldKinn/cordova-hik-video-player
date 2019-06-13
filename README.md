## 使用Cordova插件调用海康SDK

### 1.创建插件

```
// 进入plugin目录
plugman create --name VideoPlugin --plugin_id VideoPlugin --plugin_version 0.1.0
// 进入自定义插件目录
cd VideoPlugin
// 添加平台支持
plugman platform add --platform_name android
// 修改plugin.xml
<source-file src="src/android/VideoPlugin.java" target-dir="src/VideoPlugin" />
// 给插件添加一个json文件
plugman createpackagejson ./
// 返回项目根目录
cd ../..
// 安装自定义插件
plugman install -d --platform android --project platforms/android --plugin plugins\VideoPlugin
// 删除自定义插件
plugman uninstall --platform android --project platforms/android --plugin plugins\VideoPlugin
```

### 2.将Cordova工程导入Android Studio

参考Cordova导入到Android Studio
参考海康SDK说明

### 3.JS调用Activity

插件Java类代码

```
private void openPreview(CallbackContext callbackContext) {
    try {
        Intent intent = new Intent().setClass(cordova.getActivity(), PreviewActivity.class);
        this.cordova.startActivityForResult(this, intent, 0);
        PluginResult mPlugin = new PluginResult(PluginResult.Status.NO_RESULT);
        mPlugin.setKeepCallback(true);
        callbackContext.sendPluginResult(mPlugin);
        callbackContext.success("success");
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

调用插件的JS代码

```
document.getElementById('previewBtn').addEventListener('click', function(e) {
    cordova.plugins.VideoPlugin.openPreview(function() {
        console.log('打开成功');
    }, function(err) {
        alert(err.message);
    });
});
```