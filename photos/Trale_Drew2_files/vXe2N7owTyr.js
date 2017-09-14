if (self.CavalryLogger) { CavalryLogger.start_js(["DjbDS"]); }

__d('ProgressBar.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$UIProgressBar1=function(){var r=this.props,s=Math.min(Math.max((r.value-r.min)/(r.max-r.min)*100,0),100);return s}.bind(this),this.$UIProgressBar2=function(){return this.props.label!=null&&this.props.size!=='small'}.bind(this),this.$UIProgressBar3=function(){return this.$UIProgressBar2()&&this.props.typesetting==='float'}.bind(this),this.$UIProgressBar4=function(){if(!this.$UIProgressBar2())return null;return this.props.label}.bind(this),this.$UIProgressBar5=function(){if(this.$UIProgressBar3())return c('React').createElement('div',{className:"_6a"},' ');return null}.bind(this),this.$UIProgressBar6=function(){var r=Math.round(this.$UIProgressBar1()),s="_5e4k"+(r===0?' '+"_5e2d":'')+(r===100?' '+"_5e4j":''),t=this.$UIProgressBar4();if(t)t=c('React').createElement('span',{className:"_5e2h"},t);var u=c('React').createElement('div',{className:s,style:{width:r+'%'}},this.$UIProgressBar5(),t);return u}.bind(this),this.$UIProgressBar7=function(){var r=this.$UIProgressBar4();if(!r)return null;r=c('React').createElement('span',{className:"_5e2h _5e2n"},r);if(this.$UIProgressBar3()){var s=this.$UIProgressBar1(),t={left:s+'%',width:s+'%'},u=c('React').createElement('div',{className:"_5e2g",style:t},this.$UIProgressBar5(),r);return u}return r}.bind(this),n}l.prototype.render=function(){'use strict';var m="_5e4h"+(!this.$UIProgressBar3()?' '+"_5e2k":'')+(this.$UIProgressBar3()?' '+"_5e2j":'')+(this.props.size==='small'?' '+"_5e2l":'')+(this.props.isRounded===true?' '+"_5e2m":'');if(this.$UIProgressBar3()){return c('React').createElement('div',babelHelpers['extends']({},this.props,{role:'progressbar','aria-valuemin':0,'aria-valuemax':100,'aria-valuenow':this.$UIProgressBar1(),className:c('joinClasses')(this.props.className,m)}),c('React').createElement('div',{className:"_5e2k"},this.$UIProgressBar7(),this.$UIProgressBar6()))}else return c('React').createElement('div',babelHelpers['extends']({},this.props,{role:'progressbar','aria-valuemin':0,'aria-valuemax':100,'aria-valuenow':this.$UIProgressBar1(),className:c('joinClasses')(this.props.className,m)}),this.$UIProgressBar7(),this.$UIProgressBar6());};l.propTypes={value:k.number.isRequired,label:k.oneOfType([k.string,k.element]),min:k.number,max:k.number,size:k.oneOf(['small','large']),typesetting:k.oneOf(['float','inline']),isRounded:k.bool};l.defaultProps={min:0,max:100,size:'large',typesetting:'inline',isRounded:false};f.exports=l}),null);
__d('OptimisticVideoPostUtils',['AsyncRequest'],(function a(b,c,d,e,f,g){var h={shouldShowOptimisticPost:function i(j){if(j.isScheduledPost||j.isHiddenFromTimeline||j.isSecret||!j.isPageToPage&&!j.isToUserProfile||j.isDraft)return false;return true},checkVideoStatus:function i(j,k,l,m){new (c('AsyncRequest'))().setURI('/ajax/video/encode/feedback/ping/').setData({video_id:j}).setHandler(function(n){var o=n.getPayload();if(n.error||o.error){l(j,n)}else if(o.is_ready){k(j)}else m(j);}).send()}};f.exports=h}),null);
__d('SubscriptionLevels',[],(function a(b,c,d,e,f,g){var h={ALL:'162318810514679',DEFAULT:'271670892858696',TOP:'266156873403755'};f.exports=h}),null);
__d('EditSubscriptions',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','MenuDeprecated','Parent','SubscriptionLevels','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i){var j=45,k=[c('SubscriptionLevels').ALL,c('SubscriptionLevels').DEFAULT,c('SubscriptionLevels').TOP],l={},m={},n={},o={},p={},q={},r={},s={},t={},u={},v={},w="/ajax/follow/follow_profile.php",x="/ajax/follow/unfollow_profile.php",y="/ajax/settings/notifications/notify_me.php",z={},aa={},ba={},ca=null,da={};function ea(cb){return k.includes(cb)}function fa(cb,db,eb,fb){var gb=c('Parent').byClass(fb,'uiMenuItem')||c('Parent').bySelector(fb,"._54ni"),hb=c('getOrCreateDOMID')(cb);if(!gb||!c('DOM').contains(cb,gb)){return}else if(c('CSS').hasClass(gb,'SubscribeMenuSubscribeCheckbox')){if(n[db]){ka(hb,db)}else ja(hb,db);return false}else if(c('CSS').hasClass(gb,'SubscribeMenuUnsubscribe')){ka(hb,db);return false}else if(c('CSS').hasClass(gb,'SubscribeMenuSettingsItem')){wa(cb,true);return false}else if(c('CSS').hasClass(gb,'SubscriptionMenuGoBack')){wa(cb,false);return false}else if(c('CSS').hasClass(gb,'SubscriptionMenuItem')){ha(cb,db,eb,gb);return false}else if(c('CSS').hasClass(gb,'SubscribeMenuNotifyMeCheckbox')){ga(cb,db);return false}}function ga(cb,db){if(o[db]){ab(cb,db)}else za(cb,db);}function ha(cb,db,eb,fb){if(c('CSS').hasClass(fb,'SubscriptionMenuLevel')){if(c('MenuDeprecated').isItemChecked(fb))return;ua(cb,db,na(fb),true,eb)}else if(c('CSS').hasClass(fb,'SubscriptionMenuCategory')){ra(db,fb,!c('MenuDeprecated').isItemChecked(fb),true,eb)}else if(c('CSS').hasClass(fb,'SubscriptionAppStory'))ta(db,fb,!c('MenuDeprecated').isItemChecked(fb),eb);}function ia(cb){return da[cb]?da[cb]:0}function ja(cb,db){var eb={profile_id:db};c('Arbiter').inform('FollowingUser',eb);c('Arbiter').inform(c('FeedBlacklistButton').UNBLACKLIST,eb);new (c('AsyncRequest'))().setURI(w).setMethod('POST').setData({profile_id:db,location:ia(cb)}).setErrorHandler(c('Arbiter').inform.bind(null,'FollowUserFail',eb)).send()}function ka(cb,db){var eb={profile_id:db};c('Arbiter').inform('UnfollowingUser',eb);c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,eb);new (c('AsyncRequest'))().setURI(x).setMethod('POST').setData({profile_id:db,location:ia(cb)}).setErrorHandler(c('Arbiter').inform.bind(null,'UnfollowUserFail',eb)).send()}function la(cb,db,eb){var fb={profile_id:cb,level:s[cb],custom_categories:t[cb],location:eb};new (c('AsyncRequest'))().setURI('/ajax/follow/manage_subscriptions.php').setData(fb).send()}function ma(cb,db){var eb=t[db]||[],fb=c('MenuDeprecated').getItems(cb);fb.forEach(function(gb){if(c('CSS').hasClass(gb,'SubscriptionMenuCategory')){var hb=na(gb);if(eb.includes(hb)){pa(gb)}else qa(gb);}else if(c('CSS').hasClass(gb,'SubscriptionAppStory')){var ib=na(gb);if(ba[db]&&ba[db][ib]){pa(gb)}else qa(gb);}});ua(cb,db,s[db],false)}function na(cb){var db=c('DOM').scry(cb,'input')[0];return db&&db.value}function oa(cb){return c('DOM').find(cb,'a.itemAnchor')}function pa(cb){c('CSS').addClass(cb,'checked');oa(cb).setAttribute('aria-checked',true)}function qa(cb){c('CSS').removeClass(cb,'checked');oa(cb).setAttribute('aria-checked',false)}function ra(cb,db,eb,fb,gb){if(eb){pa(db)}else qa(db);var hb=na(db);if(ea(hb)){eb&&sa(cb,hb)}else if(eb){if(!t[cb].includes(hb))t[cb].push(hb);}else{var ib=t[cb].indexOf(hb);if(ib!==-1)t[cb].splice(ib,1);}if(fb)la(cb,hb,gb);}function sa(cb,db){s[cb]=db;c('Arbiter').inform('SubscriptionLevelUpdated',{profile_id:cb,level:db})}function ta(cb,db,eb,fb){var gb='/ajax/feed/filter_action/',hb=na(db),ib={actor_id:cb,app_id:hb};if(eb){pa(db);gb+='resubscribe_user_app/';ib.action='resubscribe_user_app';if(!ba[cb])ba[cb]={};ba[cb][hb]=true}else{qa(db);gb+='unsubscribe_user_app_checkbox/';ib.action='unsubscribe_user_app_checkbox';if(ba[cb])ba[cb][hb]=false;}new (c('AsyncRequest'))().setURI(gb).setData(ib).send()}function ua(cb,db,eb,fb,gb){var hb=c('DOM').scry(cb,'.SubscriptionMenuLevel'),ib=null;hb.forEach(function(jb){if(na(jb)==eb){ib=jb}else if(c('MenuDeprecated').isItemChecked(jb))ra(db,jb,false,false);});ib&&ra(db,ib,true,fb,gb)}function va(cb,db,eb){n[db]=eb;c('CSS').conditionClass(cb,'isUnsubscribed',!eb);var fb=c('DOM').scry(cb,'li.SubscribeMenuSubscribeCheckbox');if(fb.length!==0){var gb=fb[0];if(eb){pa(gb)}else qa(gb);}}function wa(cb,db){c('CSS').conditionClass(cb,'subscriptionMenuOpen',db)}function xa(cb,db,eb){var fb=c('DOM').find(cb,".FriendListSubscriptionsMenu"),gb=c('DOM').find(fb,".uiMenuInner");if(ca!=null)ca.forEach(function(hb){gb.removeChild(hb)});eb.forEach(function(hb){gb.appendChild(hb)});ca=eb}c('Arbiter').subscribe('UnfollowUser',function(cb,db){if(u[db.profile_id]){sa(db.profile_id,u[db.profile_id]);t[db.profile_id]=v[db.profile_id].slice()}});c('Arbiter').subscribe('UpdateSubscriptionLevel',function(cb,db){var eb=db.profile_id+'',fb=db.level+'';sa(eb,fb);var gb;for(gb in l)if(l[gb]===eb){var hb=c('ge')(gb);hb&&ua(hb,eb,fb,false)}});c('Arbiter').subscribe('listeditor/close_editor',function(){var cb;for(cb in l){var db=c('ge')(cb);db&&wa(db,false)}});function ya(cb,db,eb){o[db]=eb;var fb=aa[db];if(fb){if(eb){fb.select()}else fb.deselect();return}var gb=c('DOM').scry(cb,'li.SubscribeMenuNotifyMeCheckbox');if(gb.length!==0){var hb=gb[0];c('CSS').conditionShow(hb,true);var ib=c('DOM').scry(cb,'li.SubscribeMenuNotifyMeCheckboxSeparator');if(ib.length>0)c('CSS').conditionShow(ib[0],true);if(eb){pa(hb)}else qa(hb);}}function za(cb,db){var eb={profile_id:db};c('Arbiter').inform('EnableNotifsForUser',eb);new (c('AsyncRequest'))().setURI(y).setMethod('POST').setData({notifier_id:db,enable:true}).setErrorHandler(c('Arbiter').inform.bind(null,'EnableNotifsForUserFail',eb)).send()}function ab(cb,db){var eb={profile_id:db};c('Arbiter').inform('DisableNotifsForUser',eb);new (c('AsyncRequest'))().setURI(y).setMethod('POST').setData({notifier_id:db,enable:false}).setErrorHandler(c('Arbiter').inform.bind(null,'DisableNotifsForUserFail',eb)).send()}var bb={init:function cb(db,eb,fb){var gb=c('getOrCreateDOMID')(db);da[gb]=fb;if(!l[gb])c('Event').listen(db,'click',function(hb){return fa(db,l[gb],fb,hb.getTarget())});if(fb===j&&z[eb].length)xa(db,eb,z[eb]);if(s[eb])ma(db,eb);l[gb]=eb;c('CSS').conditionClass(db,'NonFriendSubscriptionMenu',!m[eb]);c('CSS').conditionClass(db,'cannotSubscribe',!p[eb]);c('CSS').conditionClass(db,'noSubscriptionLevels',q[eb]&&!r[eb]);c('CSS').conditionClass(db,'noSubscribeCheckbox',!m[eb]&&!q[eb]);va(db,eb,n[eb]);ya(db,eb,o[eb]);c('Arbiter').subscribe(['FollowUser','FollowingUser','UnfollowUserFail'],function(hb,ib){if(ib.profile_id==eb)va(db,eb,true);}.bind(this));c('Arbiter').subscribe(['UnfollowUser','UnfollowingUser','FollowUserFail'],function(hb,ib){if(ib.profile_id==eb){c('Arbiter').inform('SubMenu/Reset');va(db,eb,false)}}.bind(this));c('Arbiter').subscribe(['EnableNotifsForUser','DisableNotifsForUserFail'],function(hb,ib){if(ib.profile_id==eb)ya(db,eb,true);}.bind(this));c('Arbiter').subscribe(['DisableNotifsForUser','EnableNotifsForUserFail'],function(hb,ib){if(ib.profile_id==eb)ya(db,eb,false);}.bind(this));c('Arbiter').subscribe('listeditor/friend_lists_changed',function(hb,ib){if(ib.notify_state){var jb=ib.added_uid?ib.added_uid:ib.removed_uid;ya(db,jb,ib.notify_state.is_notified)}}.bind(this))},getSubscriptions:function cb(db){return {level:s[db],custom_categories:t[db]}},registerTimelineNotifySelector:function cb(db,eb){var fb=db.getInitialMenu(),gb=db.getContentRoot();fb.forEachItem(function(hb){var ib=hb.getRoot();if(c('CSS').hasClass(ib,'SubscribeMenuNotifyMeCheckbox')){aa[eb]=hb;ya(gb,eb,o[eb])}});fb.subscribe('itemclick',function(hb,ib){if(ib.item===aa[eb])ga(gb,eb);return true})},toggleNotificationsOnJoin:function cb(db,eb){if(o[db]!==eb)ga(null,db);},setSubscriptions:function cb(db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob){sa(db,jb+'');m[db]=eb;n[db]=fb;p[db]=gb;q[db]=hb;r[db]=ib;u[db]=lb+'';t[db]=kb.map(String);v[db]=mb.map(String);z[db]=ob;o[db]=nb}};f.exports=b.EditSubscriptions||bb}),null);
__d('ProfileVideoWWWFrontendActionTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ProfileVideoWWWFrontendActionLoggerConfig',this.$ProfileVideoWWWFrontendActionTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ProfileVideoWWWFrontendActionLoggerConfig',this.$ProfileVideoWWWFrontendActionTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$ProfileVideoWWWFrontendActionTypedLogger1={};return this};h.prototype.updateData=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1=babelHelpers['extends']({},this.$ProfileVideoWWWFrontendActionTypedLogger1,j);return this};h.prototype.setEvent=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.event=j;return this};h.prototype.setSessionID=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.session_id=j;return this};h.prototype.setUploadError=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.upload_error=j;return this};var i={event:true,session_id:true,upload_error:true};f.exports=h}),null);
__d("PagesOpenNowDisplayDecision",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SHOW_AVAILABLE:0,SHOW_UNAVAILABLE:1,SHOW_UNDETERMINED:2,NO_SHOW:3,SHOW_PERMANENTLY_CLOSED:4})}),null);
__d('AbstractRating.react',['cx','fbt','invariant','React'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits(m,c('React').Component);l=k&&k.prototype;m.prototype.render=function(){'use strict';this.props.rating>=0||j(0);this.props.maxRating>0||j(0);this.props.maxRating===parseInt(this.props.maxRating,10)||j(0);this.props.rating<=this.props.maxRating||j(0);var n=[];for(var o=1;o<=this.props.maxRating;o++)n.push(this.$AbstractRating1(o));return c('React').createElement('div',{'aria-label':this.$AbstractRating2(),className:"_2dh6",onMouseOut:this.props.onMouseOut},n)};m.prototype.$AbstractRating2=function(){'use strict';return i._("{rating} out of {max rating} rating",[i.param('rating',this.props.rating),i.param('max rating',this.props.maxRating)])};m.prototype.$AbstractRating1=function(n){'use strict';var o=Math.min(Math.max(0,this.props.rating-n+1),1),p=c('React').createElement('div',null,this.props.emptyItem,c('React').createElement('div',{className:"_1v_j",style:{width:o*100+'%'}},this.props.filledItem));return c('React').cloneElement(p,{className:"_1v_k",key:n,onClick:function(){return this.props.onClick&&this.props.onClick(n)}.bind(this),onMouseOver:function(){return this.props.onMouseOver&&this.props.onMouseOver(n)}.bind(this)})};function m(){'use strict';k.apply(this,arguments)}f.exports=m}),null);
__d('StarRatingEmptyStar.react',['cx','invariant','ix','Image.react','React','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k=function l(m){var n=null,o=m.color?m.color:'fig-light-20';typeof m.size==='string'||i(0);switch(o){case 'fig-light-20':switch(m.size){case '12':n=j("126811");break;case '16':n=j("126812");break;case '20':n=j("126813");break;case '24':n=j("126814");break;}break;case 'contextual-recommendations-orange':switch(m.size){case '24':n=j("94640");break;}break;}n!==null||i(0);return c('React').createElement(c('Image.react'),babelHelpers['extends']({},m,{className:"_55e6",src:n}))};f.exports=k}),null);
__d('StarRatingFilledStar.react',['ix','cx','invariant','Image.react','React','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k=function l(m){var n=null,o=m.color?m.color:'accent-blue';typeof m.size==='string'||j(0);switch(o){case 'accent-blue':switch(m.size){case '12':n=h("139627");break;case '16':n=h("139628");break;case '20':n=h("139629");break;case '24':n=h("139630");break;}break;case 'fig-blue':switch(m.size){case '12':n=h("117199");break;case '16':n=h("117200");break;case '20':n=h("117201");break;case '24':n=h("117202");break;}break;case 'fig-white':switch(m.size){case '24':n=h("26062");break;}break;case 'big-yellow':switch(m.size){case '24':n=h("133222");break;}break;}n!==null||j(0);return c('React').createElement(c('Image.react'),babelHelpers['extends']({},m,{className:"_55e6",src:n}))};f.exports=k}),null);
__d('StarRating.react',['cx','fbt','AbstractRating.react','React','StarRatingEmptyStar.react','StarRatingFilledStar.react','intlNumUtils'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_8jy"},this.$StarRating1(),c('React').createElement(c('AbstractRating.react'),{emptyItem:c('React').createElement(c('StarRatingEmptyStar.react'),{size:this.props.size,color:this.props.emptyColor}),filledItem:c('React').createElement(c('StarRatingFilledStar.react'),{size:this.props.size,color:this.props.fillColor}),rating:this.props.rating,maxRating:this.props.maxRating}))};l.prototype.$StarRating1=function(){'use strict';if(!this.props.showLabel)return null;return c('React').createElement('span',{className:"_4c4u"+(' '+"_405z")+(this.props.size==='12'?' '+"_h9x":'')+(this.props.size==='16'?' '+"_4c4w":'')+(this.props.size==='20'?' '+"_4c4x":'')+(this.props.size==='24'?' '+"_4c4y":'')},i._({"*":"{rating}"},[i.param('rating',c('intlNumUtils').formatNumber(this.props.rating,1),[0,this.props.rating])]))};function l(){'use strict';j.apply(this,arguments)}l.defaultProps={maxRating:5,showLabel:true,size:'20',emptyColor:'fig-light-20',fillColor:'accent-blue'};f.exports=l}),null);
__d("XPagesProfileReviewsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/{page_token}\/reviews\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},selected_snippet:{type:"String"},__nodl:{type:"Exists",defaultValue:false},qr:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:false},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);
__d('PagesMetabox.react',['cx','fbt','Link.react','PagesOpenNowDisplayDecision','React','StarRating.react','XPagesProfileReviewsController'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.state={nuxShown:false},n}l.prototype.$PagesMetabox1=function(){'use strict';var m=this.props,n=m.pageURIToken,o=m.rating;if(o===0)return null;var p=c('XPagesProfileReviewsController').getURIBuilder().setString('page_token',n).getURI();return c('React').createElement('span',{className:"_1b__ _3koq",key:'rating'},c('React').createElement(c('Link.react'),{href:p},c('React').createElement(c('StarRating.react'),{fillColor:'fig-blue',rating:o,size:'16'})))};l.prototype.$PagesMetabox2=function(){'use strict';var m=this.props,n=m.openStatus,o=m.openStatusLabel;o=n===c('PagesOpenNowDisplayDecision').SHOW_UNAVAILABLE?i._("Closed Now"):o;if(o===null)return null;return c('React').createElement('span',{className:"_1c00"+(n===c('PagesOpenNowDisplayDecision').SHOW_AVAILABLE?' '+"_14-3":'')+(n===c('PagesOpenNowDisplayDecision').SHOW_UNDETERMINED?' '+"_14-4":'')+(n===c('PagesOpenNowDisplayDecision').NO_SHOW||n===c('PagesOpenNowDisplayDecision').SHOW_UNAVAILABLE||n===c('PagesOpenNowDisplayDecision').SHOW_PERMANENTLY_CLOSED?' '+"_14-5":''),key:'open-status'},o)};l.prototype.$PagesMetabox3=function(){'use strict';if(this.props.openStatusLabel===null||!this.props.isHoliday)return null;return c('React').createElement('div',{className:"_2q9t"},i._("Today is a holiday. Open hours may be different."))};l.prototype.render=function(){'use strict';var m=this.props,n=m.categoryLabel,o=m.locationLabel,p=m.prepositionLabel,q=this.$PagesMetabox2(),r=this.$PagesMetabox1(),s=null,t=[r,q].filter(function(w){return w});if(t.length==0){t=null}else{for(var u=t.length-1;u>=1;u--)t.splice(u,0,' \u00B7 ');t=c('React').createElement('div',{className:"_v6p"},t);s=this.$PagesMetabox3()}var v=null;if(o!==null)v=i._("{prepositionLabel}{space}{locationLabel}",[i.param('prepositionLabel',p),i.param('space',' '),i.param('locationLabel',o)]);return c('React').createElement('div',{className:"_1c02"},c('React').createElement('div',{className:"_1c03"},n,' ',v),t,s)};f.exports=l}),null);
__d('CanvasToBlobImpl',['BlobFactory'],(function a(b,c,d,e,f,g){function h(i,j){var k=atob(i.substr(i.indexOf(',')+1)),l=new Uint8Array(k.length);for(var m=0;m<k.length;m++)l[m]=k.charCodeAt(m);return c('BlobFactory').getBlob([l],{type:j})}f.exports={getBlob:h}}),null);
__d('dataURLToBlob',['Promise','BlobFactory','CanvasToBlobResource','WebWorker','CanvasToBlobImpl'],(function a(b,c,d,e,f,g){var h=c('CanvasToBlobImpl').getBlob,i=b.URL||b.webkitURL||{};function j(k,l){if(!i.createObjectURL||!c('BlobFactory').isSupported)return c('Promise').reject("Browser doesn't support this feature");if(c('WebWorker').isSupported()){return new (c('Promise'))(function(m,n){var o=new (c('WebWorker'))(c('CanvasToBlobResource')).setMessageHandler(function(p){m(p);o.terminate()}).setErrorHandler(function(event){n(event.message);o.terminate()}).execute().postMessage({dataURL:k,fileType:l})})}else return c('Promise').resolve(h(k,l));}f.exports=j}),null);
__d('canvasToBlob',['Promise','dataURLToBlob'],(function a(b,c,d,e,f,g){function h(i,j,k){return new (c('Promise'))(function(l,m){if(i.toBlob){i.toBlob(l,j,k)}else{var n=i.toDataURL(j,k);c('dataURLToBlob')(n,j).then(function(o){l(o)},m).done()}})}f.exports=h}),null);
__d('VideoThumbnail',['invariant'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this.$VideoThumbnail1=j}i.prototype.getURL=function(){'use strict';return this.$VideoThumbnail1};i.prototype.getData=function(){'use strict';h(0)};i.addTextToCanvasContext=function(j,k,l,m,n,o,p,q,r){'use strict';j.fillStyle=q;j.textAlign=r;j.font=o+'px '+p;var s=r==='center'?m+n/2:m,t=1,u=k.split('\n');for(var v=u,w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var y;if(w){if(x>=v.length)break;y=v[x++]}else{x=v.next();if(x.done)break;y=x.value}var z=y,aa='',ba='',ca=z.split(' ');for(var da=ca,ea=Array.isArray(da),fa=0,da=ea?da:da[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ga;if(ea){if(fa>=da.length)break;ga=da[fa++]}else{fa=da.next();if(fa.done)break;ga=fa.value}var ha=ga;ba+=ha;var ia=j.measureText(ba).width,ja=j.measureText(ha).width;if(ja>n){if(aa.length>0){j.fillText(aa,s,l+o*t);t++}var ka='',la='';for(var ma=ha,na=Array.isArray(ma),oa=0,ma=na?ma:ma[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var pa;if(na){if(oa>=ma.length)break;pa=ma[oa++]}else{oa=ma.next();if(oa.done)break;pa=oa.value}var qa=pa;la+=qa;var ra=j.measureText(la).width;if(ra>n){j.fillText(ka,s,l+o*t);ka=qa;la=qa;t++}else ka=la;}aa=ka+' ';ba=ka+' '}else if(ia>n){j.fillText(aa,s,l+o*t);aa=ha+' ';ba=ha+' ';t++}else{ba+=' ';aa=ba}}j.fillText(aa,s,l+o*t);t++}return j};f.exports=i}),null);
__d('VideoLibraryButton.react',['cx','fbt','React','XPagesManagerPublishingToolsController','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.$VideoLibraryButton1=function(){'use strict';return c('XPagesManagerPublishingToolsController').getURIBuilder().setString('page_token',this.props.pageID).setString('section','VIDEOS').setEnum('source',this.props.source).setEnum('refSource',this.props.refSource).getURI()};l.prototype.$VideoLibraryButton2=function(){'use strict';this.$VideoLibraryButton1().go()};l.prototype.render=function(){'use strict';return c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',className:"_2bhc",label:i._("Video Library"),size:this.props.size,onClick:this.$VideoLibraryButton2.bind(this)})};function l(){'use strict';j.apply(this,arguments)}l.defaultProps={size:'small'};f.exports=l}),null);
__d("VideoEditSource",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({PROCESSING_DIALOG:"processing_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_ASSET_INSIGHTS:"video_asset_insights",PERMALINK:"permalink",TIMELINE:"timeline",SNOWLIFT:"snowlift",LIBRARY:"library",SEASON_DETAILS:"season_details",PLAYLIST_DETAILS:"playlist_details",REFERENCE_LIBRARY:"reference_library",CAROUSEL_PREVIEW:"carousel_preview",PAGE_VIDEO_LPP_PUBLISH:"page_video_lpp_publish",SCHEDULE_LIVE_STORY:"schedule_live_story",UNKNOWN:"unknown"})}),null);
__d("VideoLibrarySource",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_INSIGHTS:"video_insights",VIDEOS_HUB:"videos_hub"})}),null);
__d("XVideoEditController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/edit\/",{v:{type:"Int",required:true},album:{type:"Int"},source:{type:"Enum",enumType:1},notif_t:{type:"String"}})}),null);
__d("XVideoEditDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/edit\/dialog\/",{video_id:{type:"Int"},source:{type:"Enum",enumType:1},story_dom_id:{type:"String"},timeline_identifier:{type:"String"},post_id:{type:"String"},video_asset_id:{type:"Int"},__asyncDialog:{type:"Int"}})}),null);