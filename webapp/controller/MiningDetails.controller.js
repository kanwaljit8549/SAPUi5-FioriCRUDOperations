sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],
    function(Controller,JSONModel){
        "use strict";

        return Controller.extend("app.mining.controller.MiningDetails",{
            onInit(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteMiningDetails").attachPatternMatched(this._onRouteMatched, this);
            },
            _onRouteMatched(oEvent){
                var sPath = oEvent.getParameter("arguments").value;
                console.log(sPath);
                var oModel =  this.getOwnerComponent().getModel();
                var entity = `/MININGSet('${sPath}')/ToMiningDetails`;
                var that= this;
                oModel.read(entity,{
                    success:function(odata,res){
                        if (res.statusCode === 200 || res.statusText === "OK"){
                            var oModel = new JSONModel(odata);
                            that.getView().setModel(oModel,"MiningDetailsModel");
                        }
                    },
                    error:function(oError){
                        console.log(oError);
                    }
                })
            }

        });
    });