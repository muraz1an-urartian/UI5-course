sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    "sap/ui/core/Fragment"
], function(Controller, MessageToast,Fragment) {
    'use strict';
    
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPannel",{
        onShowHello : function () {
        let oBundlle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView().getModel().getProperty("/recipient/name");
        let sMsg = oBundlle.getText("HelloMsg", [sRecipient]);

        // MessageToast.show("hello there!")
        MessageToast.show(sMsg)

        },
        onOpenDialog : function(){
           this.getOwnerComponent().openHelloDialog()
        },
        onCloseDialog : function () {
            this.byId("helloDialog").close()
        }

    })

});