sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("app.mining.controller.Dashboard", {
        onInit() {
        },
        onSelectionChange(oEvent){
            var oItem = oEvent.getParameter("listItem");
            const index = oItem.getBindingContext().getProperty("LocId");
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteMiningDetails",{
                value : index
            });
        },
        onCreate(){
            var LocId = this.getView().byId("idCreateLocIdInput").getValue();
            var LocDes = this.getView().byId("idCreateLocDesInput").getValue();
            var MinRes = this.getView().byId("idCreateMinResInput").getValue();
            var TotalCost= this.getView().byId("idCreateTotalCostInput").getValue();
            var MinRep = this.getView().byId("idCreateMinRepInput").getValue();
            var TypMin = this.getView().byId("idCreateTypMinInput").getValue();
            var DrillPer = this.getView().byId("idCreateDrillPerInput").getValue();
            var inpObj = {
                "LocId":LocId,
                "LocDes":LocDes,
                "MinRes":MinRes,
                "TotalCost":TotalCost,
                "MinRep":MinRep,
                "TypMin":TypMin,
                "DrillPer":DrillPer
            };
            console.log(inpObj);
            var oModel = this.getView().getModel();
            var entity='/MININGSet'
            oModel.create(entity,inpObj,{
                success:function(odata,res){
                    if (res.statusCode==='201' || res.statusText==="Created"){
                        MessageToast.show("Success! Entry Created in Database");
                        console.log(odata);
                    }
                },
                error:function(Error){
                    MessageToast.show("Failed! No Entry Created in Database");
                    console.log(Error);
                }
            });
        },
        onUpdate(){
            var LocId = this.getView().byId("idUpdateLocIdInput").getValue();
            var LocDes = this.getView().byId("idUpdateLocDesInput").getValue();
            var MinRes = this.getView().byId("idUpdateMinResInput").getValue();
            var TotalCost= this.getView().byId("idUpdateTotalCostInput").getValue();
            var MinRep = this.getView().byId("idUpdateMinRepInput").getValue();
            var TypMin = this.getView().byId("idUpdateTypMinInput").getValue();
            var DrillPer = this.getView().byId("idUpdateDrillPerInput").getValue();
            var inpObj = {
                "LocId":LocId,
                "LocDes":LocDes,
                "MinRes":MinRes,
                "TotalCost":TotalCost,
                "MinRep":MinRep,
                "TypMin":TypMin,
                "DrillPer":DrillPer
            };
            console.log(inpObj);
            var oModel = this.getView().getModel();
            var entity=`/MININGSet('${LocId}')`;
            oModel.update(entity,inpObj,{
                success:function(odata,res){
                    if (res.statusCode==='204'){
                        MessageToast.show("Success! Entry Updated in Database");
                        console.log(odata);
                    }
                },
                error:function(Error){
                    MessageToast.show("Failed! No Entry Updated in Database");
                    console.log(Error);
                }
            });
        },
        onDelete(){
            var LocId = this.getView().byId("idDeleteLocIdInput").getValue();
            var entity = `/MININGSet('${LocId}')`;
            var oModel = this.getView().getModel();
            oModel.remove(entity,{
                success:function(odata, res){
                    if (res.statusCode==='204'){
                        MessageToast.show("Success! Entry Deleted from the Database");
                    }
                },
                error:function(Error){
                    MessageToast.show("Failed! No Entry Updated in Database");
                    console.log(Error);
                }
            })
        }
    });
});