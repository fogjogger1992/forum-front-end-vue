(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.name,expression:"profile.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.profile.name},on:{input:function(t){t.target.composing||e.$set(e.profile,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.profile.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.profile.image,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" "+e._s(e.isProcessing?"更新中...":"Submit")+" ")])])])},i=[],n=r("1da1"),s=r("5530"),o=(r("96cf"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("2b3d"),r("2f62")),c=r("4cce"),u=r("2fa3"),l={name:"UserEdit",data:function(){return{profile:{id:-1,name:"",image:""},isProcessing:!1}},computed:Object(s["a"])({},Object(o["b"])(["currentUser"])),watch:{currentUser:function(e){if(-1!==e.id){var t=this.$route.params.id;this.setUser(t)}}},created:function(){var e=this.$route.params.id;this.setUser(e)},beforeRouteUpdate:function(e,t,r){if(-1!==this.currentUser.id){var a=e.params.id;this.setUser(a),r()}},methods:{setUser:function(e){var t=this.currentUser,r=t.id,a=t.name,i=t.image;r.toString()===e.toString()?(this.profile.id=r,this.profile.name=a,this.profile.image=i):this.$router.push({name:"not-found"})},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.profile.image="";else{var r=window.URL.createObjectURL(t[0]);this.profile.image=r}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,i,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.profile.name){r.next=4;break}return u["a"].fire({icon:"warning",title:"請填寫姓名"}),r.abrupt("return");case 4:return a=e.target,i=new FormData(a),t.isProcessing=!0,r.next=9,c["a"].update({userId:t.profile.id,formData:i});case 9:if(n=r.sent,s=n.data,"error"!==s.status){r.next=13;break}throw new Error(s.message);case 13:t.$router.push("/users/".concat(t.profile.id)),r.next=20;break;case 16:r.prev=16,r.t0=r["catch"](0),t.isProcessing=!1,u["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 20:case"end":return r.stop()}}),r,null,[[0,16]])})))()}}},m=l,f=r("2877"),p=Object(f["a"])(m,a,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d228901.e9150e9d.js.map