package VideoPlugin;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.chinacreator.ccep.video.Main2Activity;
import com.chinacreator.ccep.video.PreviewActivity;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * This class echoes a string called from JavaScript.
 */
public class VideoPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        } else if (action.equals("openPreview")) {
            this.openPreview(callbackContext);
            return true;
        } else if (action.equals("openActivity")) {
            this.openActivity(callbackContext);
            return true;
        }
        return false;
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        switch (resultCode) { //resultCode为回传的标记，我在第二个Activity中回传的是RESULT_OK
            case Activity.RESULT_OK:
                Bundle b = intent.getExtras();  //data为第二个Activity中回传的Intent
                String str = b.getString("change01");//str即为回传的值
                break;
            default:
                break;
        }
    }

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

    private void openActivity(CallbackContext callbackContext) {
        Intent intent = new Intent().setClass(cordova.getActivity(), Main2Activity.class);
        this.cordova.startActivityForResult(this, intent, 0);
        PluginResult mPlugin = new PluginResult(PluginResult.Status.NO_RESULT);
        mPlugin.setKeepCallback(true);
        callbackContext.sendPluginResult(mPlugin);
        callbackContext.success("success");
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success("这是消息:" + message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
