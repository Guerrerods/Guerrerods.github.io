"use strict";(self.webpackChunkEscuelaDS=self.webpackChunkEscuelaDS||[]).push([[796],{3796:(D,c,o)=>{o.r(c),o.d(c,{ListadoTropasComponent:()=>O});var t=o(4650),l=o(6895),g=o(5830),T=o(6338),h=o(782),p=o(3546),d=o(4859),u=o(7392),e=o(1561),v=o(3999),E=o(9299);function C(i,_){if(1&i){const a=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4),t._uU(3),t.qZA(),t.TgZ(4,"div",5)(5,"h5",6)(6,"span",7),t._uU(7,"Capitan:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"h5",8)(10,"span",7),t._uU(11,"Pais: "),t.qZA(),t._uU(12),t._UZ(13,"br"),t.TgZ(14,"span",7),t._uU(15,"Dia: "),t.qZA(),t._uU(16),t.qZA()(),t.TgZ(17,"mat-card-actions")(18,"button",9)(19,"mat-icon"),t._uU(20,"more_vert"),t.qZA()(),t.TgZ(21,"mat-menu",null,10)(23,"button",11),t.NdJ("click",function(){const n=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.listado(n.idTropa))}),t.TgZ(24,"mat-icon"),t._uU(25,"military_tech"),t.qZA(),t.TgZ(26,"span"),t._uU(27,"Listado Tropa"),t.qZA()(),t.TgZ(28,"button",11),t.NdJ("click",function(){const n=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.Seguimiento(n))}),t.TgZ(29,"mat-icon"),t._uU(30,"groups"),t.qZA(),t.TgZ(31,"span"),t._uU(32,"Seguimiento"),t.qZA()(),t.TgZ(33,"button",11),t.NdJ("click",function(){const n=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.TallerSocializado(n))}),t.TgZ(34,"mat-icon"),t._uU(35,"list_alt"),t.qZA(),t.TgZ(36,"span"),t._uU(37,"Talleres Socializados"),t.qZA()()()()()()}if(2&i){const a=_.$implicit,r=t.MAs(22);t.xp6(3),t.Oqu(null==a?null:a.ntropa),t.xp6(5),t.AsE(" ",a.nombres," ",a.apellidos," "),t.xp6(4),t.hij("",a.pnombre," "),t.xp6(4),t.hij("",a.diasocializacion," "),t.xp6(2),t.Q6J("matMenuTriggerFor",r)}}let O=(()=>{class i{constructor(){this._apiService=(0,t.f3M)(g.s),this._dataService=(0,t.f3M)(v.gh),this._router=(0,t.f3M)(E.F0),this.tropas=[]}ngOnInit(){this.data$=this._dataService.sharingObservable,this._subcriptionTropa=this._dataService.sharingObservable.subscribe(a=>{null!=a?this.tropas=a?.arrayData:this._apiService.getTropas().subscribe(r=>{this.tropas=r,console.log("tropas",this.tropas)})})}listado(a){this._dataService.sharingObservableData={idtropa:a,arrayData:this.tropas},this._router.navigate(["/Listado/Guerreros"])}Seguimiento(a){this._dataService.sharingObservableData={idcapitan:a.idCapitan,idtropa:a.idTropa,arrayData:this.tropas},this._router.navigate(["/Listado/Seguimiento"])}TallerSocializado(a){console.log("IDCAPITAN",a),this._dataService.sharingObservableData={datoTropa:a,arrayData:this.tropas},this._router.navigate(["/Talleres"])}ngOnDestroy(){this._subcriptionTropa&&this._subcriptionTropa.unsubscribe()}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-listado-tropas"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"row","row-cols-1","row-cols-md-4","g-4","width-container","cursor-pointer","align-items-stretch","mt-4",2,"cursor","pointer"],["class","col cursor-pointer",4,"ngFor","ngForOf"],[1,"col","cursor-pointer"],[1,"card","bg-opacity-75","mb-3","h-70","cursor-pointer"],[1,"card-header","text-center"],[1,"card-body"],[1,"card-title",2,"margin","0 0 5px"],[1,"fw-bold"],[1,"card-title",2,"margin","0"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0),t.YNc(1,C,38,6,"div",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",r.tropas))},dependencies:[l.ez,l.sg,T.ie,h.N6,p.QW,p.hq,d.ot,d.RK,u.Ps,u.Hw,e.Tx,e.VK,e.OP,e.p6],styles:[".card-header[_ngcontent-%COMP%]{background-color:#8378788c}.card[_ngcontent-%COMP%]{min-height:220px}.mdc-card__actions[_ngcontent-%COMP%]{min-height:0px!important;padding:0!important}"]}),i})()}}]);