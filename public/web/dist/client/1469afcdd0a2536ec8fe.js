(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{402:function(t,e,n){var content=n(408);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("7cfc52d5",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";var o=n(402);n.n(o).a},408:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".guestbook[data-v-37623a25] {\n  padding: 40px 30px;\n  line-height: 1.5;\n  color: #222;\n}\n.guestbook .icon .text[data-v-37623a25] {\n  margin-left: 4px;\n}\n.header[data-v-37623a25] {\n  display: flex;\n  align-items: center;\n}\n.guestbook-form .el-alert[data-v-37623a25] {\n  margin-bottom: 12px;\n}\n.guestbook-form .nickname-input[data-v-37623a25] {\n  width: 200px;\n}\n.guestbook-list .guestbook-item[data-v-37623a25] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n.guestbook-list .guestbook-item .nickname[data-v-37623a25] {\n  color: #406599;\n}\n.guestbook-list .guestbook-item .message[data-v-37623a25] {\n  margin-left: 40px;\n}\n.guestbook-list .guestbook-item .message .stat-reply[data-v-37623a25] {\n  margin-top: 3px;\n}\n.guestbook-list .guestbook-item .message dd[data-v-37623a25],\n.guestbook-list .guestbook-item .message dt[data-v-37623a25] {\n  margin-bottom: 10px;\n}\n.guestbook-list .guestbook-item .message dd[data-v-37623a25] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 16px;\n}\n.guestbook-list .guestbook-item .message dd .nickname-wrapper[data-v-37623a25] {\n  margin-left: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper[data-v-37623a25] {\n  flex: 1;\n  line-height: 1.5;\n  color: #333;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper .bottom-operation[data-v-37623a25] {\n  display: flex;\n  justify-content: space-between;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper .bottom-operation .right[data-v-37623a25] {\n  width: 100px;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper .bottom-operation .right .el-icon-chat-line-square[data-v-37623a25] {\n  margin-right: 3px;\n  vertical-align: -1px;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper .bottom-operation .right .el-icon-thumb[data-v-37623a25] {\n  cursor: pointer;\n  margin-right: 2px;\n  margin-left: 4px;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper .bottom-operation .right .is_digg[data-v-37623a25] {\n  color: blue;\n}\n.guestbook-list .guestbook-item .message dd .content-wrapper .bottom-operation .right .count[data-v-37623a25] {\n  margin-left: 4px;\n  font-size: 14px;\n}\n.guestbook-list .guestbook-item .message .el-link[data-v-37623a25] {\n  color: #406599;\n  vertical-align: baseline;\n}\n.guestbook-list .guestbook-item time[data-v-37623a25] {\n  font-size: 12px;\n  color: #333;\n}\n.floating-action-guestbook[data-v-37623a25] {\n  position: fixed;\n  right: 24px;\n  bottom: 90px;\n}\n.floating-action-guestbook .icon-wrapper[data-v-37623a25] {\n  padding: 7px 8px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n}\n.floating-action-guestbook .icon-wrapper[data-v-37623a25]:hover {\n  color: blue;\n}\n",""])},419:function(t,e,n){"use strict";n.r(e);n(42),n(57),n(56);var o,r=n(9),c=n(29),l=function(){return c.a.get("/guestbooks")},d=function(t){return c.a.post("/guestbooks",t)},m=function(t,e){return c.a.post("/guestbooks/".concat(t,"/dialogues"),e)},f=function(t,e){return c.a.post("/guestbooks/".concat(t,"/responses/").concat(e,"/digg"))},v={layout:"Public",asyncData:(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.abrupt("return",l().then((function(t){return{dataList:t}})).catch((function(t){n({statusCode:404,message:"NotFound"})})));case 2:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),computed:{diggIdList:function(){return this.$store.state.guestbookDiggIdList}},mounted:function(){this.$refs.input.focus()},data:function(){return{action:"message",index:-1,guestbookID:"",form:{nickname:"",content:"",placeholder:"欢迎留言!",responseTo:""},responseToUser:{}}},methods:{handleDigg:function(t,e){var n=this;this.diggIdList.includes(e.id)||f(t,e.id).then((function(){n.$store.commit("pushDiggId",e.id),n.$message.success("点赞成功"),e.diggCount++})).catch((function(t){n.$message.error(t.message)}))},getIsDiggClassName:function(t){return{is_digg:this.diggIdList.includes(t)}},onClose:function(){this.$refs.input.focus(),this.action="message",this.form.placeholder="欢迎您留言",this.form.content="",this.responseToUser={},this.index=-1},handleResponse:function(t,e,n){window.scrollTo(0,0),this.index=e,this.action="response",this.guestbookID=t.id,n?(this.form.placeholder="回复".concat(n.nickname),this.responseToUser=n):(this.form.placeholder="回复".concat(t.nickname),this.responseToUser=t),this.form.content="",this.$refs.input.focus()},handleSend:function(){var t=this,e=this.form,n=e.nickname,content=e.content;e.responseTo;if(content)if(n){var o={nickname:n,content:content};o.responseTo=this.responseToUser.id,"response"===this.action&&this.responseID,("response"===this.action?m(this.guestbookID,o):d(o)).then((function(e){"response"===t.action?(t.$message.success("回复留言成功"),t.dataList.splice(t.index,1,e)):(t.dataList.unshift(e),t.$message.success("添加留言成功")),t.guestbookID="",t.form.nickname="",t.form.placeholder="欢迎留言!",t.form.content="",t.action="",t.responseToUser={},t.index=-1})).catch((function(e){t.$message.error(e.message)}))}else this.$message.warning("请输入您的昵称!");else this.$message.warning("请输入您的留言内容!")}}},h=(n(407),n(4)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guestbook"},[n("div",{staticClass:"header"},[n("el-divider",{attrs:{"content-position":"left"}},[n("i",{staticClass:"icon el-icon-edit-outline"},[n("span",{staticClass:"text"},[t._v("留言板")])])])],1),t._v(" "),n("div",{staticClass:"guestbook-form"},[n("el-alert",{directives:[{name:"show",rawName:"v-show",value:"response"===t.action,expression:"action==='response'"}],attrs:{"show-icon":"",title:"@"+t.responseToUser.nickname,type:"info"},on:{close:t.onClose}}),t._v(" "),n("el-form",{attrs:{size:"small"}},[n("el-form-item",[n("el-input",{ref:"input",attrs:{clearable:"",placeholder:t.form.placeholder,autosize:{minRows:4,maxRows:6},type:"textarea"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),n("el-form-item",[n("el-input",{staticClass:"nickname-input",attrs:{clearable:"",maxLength:14,placeholder:"输入您的昵称"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}}),t._v(" "),n("el-button",{on:{click:t.handleSend}},[t._v("保存")])],1)],1)],1),t._v(" "),n("div",{},[n("el-divider",{attrs:{"content-position":"left"}},[n("i",{staticClass:"icon el-icon-s-comment"},[n("span",{staticClass:"text"},[t._v("留言墙")])])]),t._v(" "),n("ul",{staticClass:"guestbook-list"},[t._l(t.dataList,(function(e,o){return[n("li",{key:o,staticClass:"guestbook-item"},[n("div",{},[n("el-badge",{attrs:{type:"warning",hidden:!e.dialogues.length,value:e.dialogues.length}},[n("el-avatar",{attrs:{size:"medium",icon:"el-icon-user-solid"}})],1),t._v(" "),n("span",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),t._v(" "),n("time",{staticClass:"timer"},[t._v(t._s(new Date(e.createdAt).toLocaleString()))])],1),t._v(" "),n("dl",{staticClass:"message"},[n("dt",[n("span",{staticClass:"content"},[t._v(t._s(e.content))]),t._v(" "),n("div",{staticClass:"stat-reply"},[n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(n){return t.handleResponse(e,o)}}},[t._v("回复")])],1)]),t._v(" "),t._l(e.dialogues,(function(r){return n("dd",{key:r.id},[n("el-avatar",{attrs:{icon:"el-icon-user-solid",size:"small"}}),t._v(" "),n("div",{staticClass:"nickname-wrapper"},[n("span",{staticClass:"nickname",attrs:{title:r.nickname}},[t._v(t._s(r.nickname))]),t._v(" : \n              ")]),t._v(" "),n("div",{staticClass:"content-wrapper"},[n("span",[t._v(t._s(r.content))]),t._v(" "),r.responseToUser?n("span",[t._v("//@"+t._s(r.responseToUser.nickname)+" : "+t._s(r.responseToUser.content))]):t._e(),t._v(" "),n("div",{staticClass:"bottom-operation"},[n("div",{staticClass:"left"},[n("time",[t._v(t._s(new Date(r.createdAt).toLocaleString()))])]),t._v(" "),n("div",{staticClass:"right"},[n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(n){return t.handleResponse(e,o,r)}}},[n("i",{staticClass:"el-icon-chat-line-square"}),t._v("回复\n                    ")]),t._v(" "),n("i",{staticClass:"el-icon-thumb",class:t.getIsDiggClassName(r.id),on:{click:function(n){return t.handleDigg(e.id,r)}}},[n("span",{staticClass:"count"},[t._v(t._s(r.diggCount?r.diggCount:"赞"))])])],1)])])],1)}))],2)]),t._v(" "),n("el-divider",{key:o})]}))],2)],1),t._v(" "),n("div",{staticClass:"floating-action-guestbook",on:{click:function(e){return t.$refs.input.focus()}}},[n("el-badge",{attrs:{type:"info",value:t.dataList.length,hidden:0===t.dataList.length}},[n("div",{staticClass:"icon-wrapper"},[n("i",{staticClass:"el-icon-s-comment"})])])],1)])}),[],!1,null,"37623a25",null);e.default=component.exports}}]);