(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"f+ep":function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),e=function(){return function(){}}(),u=o("pMnS"),r=o("gIcY"),a=o("A7o+"),i=o("Ip0R"),s=o("IYfF"),g=function(){function n(n,l,o,t,e){this.translate=n,this.router=l,this.fb=o,this.authService=t,this.toastr=e,this.submitted=!1,this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en"),this.translate.getBrowserLang()}return n.prototype.ngOnInit=function(){this.loginForm=this.fb.group({username:["",r.Validators.required],password:["",r.Validators.required]}),localStorage.removeItem("access_token")},n.prototype.onLoggedin=function(n){var l=this;n?this.authService.login({username:this.loginForm.value.username,password:this.loginForm.value.password}).subscribe(function(n){l.submitted=!1,n.data?(localStorage.setItem("user",JSON.stringify(n.data)),localStorage.setItem("access_token",n.data.token),localStorage.setItem("account_type",n.data.role),l.toastr.success("Login Successful."),l.router.navigate(["/blank-page"])):l.toastr.error(n.message)},function(n){l.toastr.error("Login Failed"),l.router.navigate(["/login"]),console.log(">>>>>>>>>UserLoginerr",n)}):this.submitted=!0},n}(),d=o("ZYCi"),c=o("SZbH"),p=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.login-page[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#4e73df;text-align:center;color:#fff;padding:3em}.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%]{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{border-radius:50px;color:rgba(255,255,255,.8);background:#4e73df;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited{color:#fff;border:2px solid #fff;outline:0}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{padding:8px 0}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:40px 0}.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #fff}.login-page[_ngcontent-%COMP%]   .wrapper-border[_ngcontent-%COMP%]{padding:15px;border-style:solid;border-width:1px}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Username is required."]))],null,null)}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Password is required."]))],null,null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,34,"div",[["class","login-page"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,33,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,32,"div",[["class","col-md-4 wrapper-border"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["class","user-avatar"],["src","assets/images/logo.png"],["width","150px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Welcome to JSTC"])),(n()(),t["\u0275eld"](6,0,null,null,28,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,o){var e=!0,u=n.component;return"submit"===l&&(e=!1!==t["\u0275nov"](n,8).onSubmit(o)&&e),"reset"===l&&(e=!1!==t["\u0275nov"](n,8).onReset()&&e),"ngSubmit"===l&&(e=!1!==u.onLoggedin(u.loginForm.valid)&&e),e},null,null)),t["\u0275did"](7,16384,null,0,r["\u0275angular_packages_forms_forms_bh"],[],null,null),t["\u0275did"](8,540672,null,0,r.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupDirective]),t["\u0275did"](10,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),t["\u0275eld"](11,0,null,null,20,"div",[["class","form-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,6,"input",[["class","form-control input-underline input-lg"],["formControlName","username"],["id","email"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==t["\u0275nov"](n,14)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==t["\u0275nov"](n,14).onTouched()&&e),"compositionstart"===l&&(e=!1!==t["\u0275nov"](n,14)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t["\u0275nov"](n,14)._compositionEnd(o.target.value)&&e),e},null,null)),t["\u0275did"](14,16384,null,0,r.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),t["\u0275did"](16,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),t["\u0275did"](18,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),t["\u0275pid"](131072,a.i,[a.j,t.ChangeDetectorRef]),(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](21,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](22,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](23,0,null,null,6,"input",[["class","form-control input-underline input-lg"],["formControlName","password"],["id","password"],["type","password"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0;return"input"===l&&(e=!1!==t["\u0275nov"](n,24)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==t["\u0275nov"](n,24).onTouched()&&e),"compositionstart"===l&&(e=!1!==t["\u0275nov"](n,24)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t["\u0275nov"](n,24)._compositionEnd(o.target.value)&&e),e},null,null)),t["\u0275did"](24,16384,null,0,r.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),t["\u0275did"](26,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),t["\u0275did"](28,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),t["\u0275pid"](131072,a.i,[a.j,t.ChangeDetectorRef]),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](31,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](32,0,null,null,2,"button",[["class","btn rounded-btn"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](33,null,["",""])),t["\u0275pid"](131072,a.i,[a.j,t.ChangeDetectorRef])],function(n,l){var o=l.component;n(l,8,0,o.loginForm),n(l,16,0,"username"),n(l,21,0,o.submitted||o.loginForm.controls.username.hasError("required")&&o.loginForm.controls.username.touched),n(l,26,0,"password"),n(l,31,0,o.submitted||o.loginForm.controls.password.hasError("required")&&o.loginForm.controls.password.touched)},function(n,l){n(l,0,0,void 0),n(l,6,0,t["\u0275nov"](l,10).ngClassUntouched,t["\u0275nov"](l,10).ngClassTouched,t["\u0275nov"](l,10).ngClassPristine,t["\u0275nov"](l,10).ngClassDirty,t["\u0275nov"](l,10).ngClassValid,t["\u0275nov"](l,10).ngClassInvalid,t["\u0275nov"](l,10).ngClassPending),n(l,13,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,13,0,t["\u0275nov"](l,19).transform("Username")),""),t["\u0275nov"](l,18).ngClassUntouched,t["\u0275nov"](l,18).ngClassTouched,t["\u0275nov"](l,18).ngClassPristine,t["\u0275nov"](l,18).ngClassDirty,t["\u0275nov"](l,18).ngClassValid,t["\u0275nov"](l,18).ngClassInvalid,t["\u0275nov"](l,18).ngClassPending),n(l,23,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,23,0,t["\u0275nov"](l,29).transform("Password")),""),t["\u0275nov"](l,28).ngClassUntouched,t["\u0275nov"](l,28).ngClassTouched,t["\u0275nov"](l,28).ngClassPristine,t["\u0275nov"](l,28).ngClassDirty,t["\u0275nov"](l,28).ngClassValid,t["\u0275nov"](l,28).ngClassInvalid,t["\u0275nov"](l,28).ngClassPending),n(l,33,0,t["\u0275unv"](l,33,0,t["\u0275nov"](l,34).transform("Log in")))})}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,C,p)),t["\u0275did"](1,114688,null,0,g,[a.j,d.l,r.FormBuilder,s.a,c.j],null,null)],function(n,l){n(l,1,0)},null)}var v=t["\u0275ccf"]("app-login",g,_,{},{},[]),b=function(){return function(){}}();o.d(l,"LoginModuleNgFactory",function(){return h});var h=t["\u0275cmf"](e,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[t.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_j"],r["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),t["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),t["\u0275mpd"](1073742336,a.g,a.g,[]),t["\u0275mpd"](1073742336,d.o,d.o,[[2,d.u],[2,d.l]]),t["\u0275mpd"](1073742336,b,b,[]),t["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_bc"],r["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),t["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](1024,d.j,function(){return[[{path:"",component:g}]]},[])])})}}]);