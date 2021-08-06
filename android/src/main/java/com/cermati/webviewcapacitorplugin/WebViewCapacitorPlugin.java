package com.cermati.webviewcapacitorplugin;

import android.content.Intent;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "WebViewCapacitor")
public class WebViewCapacitorPlugin extends Plugin {
    public static final String EXTRA_URL = "extra_url";

    private WebViewCapacitor implementation = new WebViewCapacitor();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void loadUrl(PluginCall call) {
        String url = call.getString("url");

        Intent intent = new Intent();
        intent.setClass(getContext(), WebActivity.class);
        intent.putExtra(EXTRA_URL, url);
        getActivity().startActivity(intent);
        call.resolve();
    }
}
