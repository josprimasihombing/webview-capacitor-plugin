import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(WebViewCapacitorPlugin)
public class WebViewCapacitorPlugin: CAPPlugin {
    private let implementation = WebViewCapacitor()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func loadUrl(_ call: CAPPluginCall) {
        let vc = ViewController()
        
        vc.modalPresentationStyle = .fullScreen

        DispatchQueue.main.async {
            self.bridge?.viewController?.present(vc, animated: true, completion: nil)
        }
    }
}
