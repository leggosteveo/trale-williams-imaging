if (self.CavalryLogger) { CavalryLogger.start_js(["p9Lg2"]); }

__d('TahoeActions',['TahoeDispatcher','TahoeActionTypes'],(function a(b,c,d,e,f,g){'use strict';var h={setMediaController:function i(j){var k={type:c('TahoeActionTypes').SET_MC,mediaController:j};c('TahoeDispatcher').dispatch(k)}};f.exports=h}),null);
__d("TahoeMediaType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({VIDEO:"video",PHOTO:"photo"})}),null);
__d('TahoePhotoView',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','DOMQuery','Event','EventProfiler','HTML','Keys','React','ReactDOM','MediaController','SubscriptionsHandler','TabBar','Tahoe','TahoeSidePanePlaceholder.react','TahoeView','XTahoeAsyncController'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('TahoeView'));k=j&&j.prototype;function l(m){'use strict';k.constructor.call(this,m);this.$TahoePhotoView4=m;this.$TahoePhotoView5=this.$TahoePhotoView4.getID();this.$TahoePhotoView11=false;this.$TahoePhotoView4.addEvent(c('Event').listen(document,'keydown',this.$TahoePhotoView12.bind(this)));this.$TahoePhotoView10=c('CSS').setClass(c('DOM').create('div'),"_1e8c _2b-0");this.$TahoePhotoView8=c('CSS').setClass(c('DOM').create('div'),"_5-lm");this.$TahoePhotoView3=c('CSS').setClass(c('DOM').create('div'),"_17am");this.$TahoePhotoView6=c('CSS').setClass(c('DOM').create('div'),"hidden_elem");c('ReactDOM').render(c('React').createElement(c('TahoeSidePanePlaceholder.react'),null),this.$TahoePhotoView8);c('DOM').appendContent(this.$TahoePhotoView4.getContent(),this.$TahoePhotoView10);c('DOM').appendContent(this.$TahoePhotoView4.getContent(),this.$TahoePhotoView8);c('DOM').appendContent(this.$TahoePhotoView4.getContent(),this.$TahoePhotoView6);if(this.$TahoePhotoView4.getMediaController()){this.$TahoePhotoView13(this.$TahoePhotoView4.getID(),false);this.setUpUFI()}else this.updateView(this.$TahoePhotoView4.getID());this.$TahoePhotoView1=new (c('SubscriptionsHandler'))();this.$TahoePhotoView1.addSubscriptions(c('Arbiter').subscribe('layer_shown',this.$TahoePhotoView14.bind(this)),c('Arbiter').subscribe('UFIAddComment/focus',this.selectCommentTab.bind(this)))}l.prototype.$TahoePhotoView14=function(m,n){'use strict'};l.prototype.setUpUFI=function(){'use strict';var m=this.$TahoePhotoView4.getMediaController();if(m)this.$TahoePhotoView4.addEvent(m.addListener('commercialBreak/showUFI',function(){return this.$TahoePhotoView15(false)}.bind(this)));};l.prototype.$TahoePhotoView15=function(m){'use strict';if(m){c('CSS').addClass(this.$TahoePhotoView3,"_17an")}else c('CSS').removeClass(this.$TahoePhotoView3,"_17an");};l.prototype.$TahoePhotoView16=function(){'use strict'};l.prototype.$TahoePhotoView17=function(){'use strict';c('CSS').addClass(this.$TahoePhotoView8,"_4f4w");c('DOM').empty(this.$TahoePhotoView10)};l.prototype.$TahoePhotoView18=function(){'use strict';c('CSS').removeClass(this.$TahoePhotoView8,"_4f4w");if(this.$TahoePhotoView11){var m=c('DOMQuery').find(this.$TahoePhotoView8,"._3dj6");m=c('CSS').removeClass(m,"_3dj6");c('DOM').setContent(m,c('DOMQuery').find(this.$TahoePhotoView6,"._3dj7"));c('EventProfiler').informManualInteractionTimestamp(['Tahoe'],true);this.$TahoePhotoView11=false}};l.prototype.$TahoePhotoView12=function(m){'use strict';if(m.keyCode===c('Keys').ESC&&!m.cancelBubble&&!m.defaultPrevented)this.$TahoePhotoView4.onExit();};l.prototype.$TahoePhotoView13=function(m,n,o){'use strict';this.$TahoePhotoView2=null;var p=c('XTahoeAsyncController').getURIBuilder().setFBID('id',m).setBool('isvideo',false).setBool('chain',n).setString('originalmediaid',this.$TahoePhotoView5).setString('sponsoreddata',o),q=new (c('AsyncRequest'))(p.getURI()).setHandler(function(r){var s=r.getPayload();if(n){var t=c('DOMQuery').scry(this.$TahoePhotoView4.getContent(),"._2-sx"),u=c('DOMQuery').scry(this.$TahoePhotoView8,"._1rgu");if(t[0]){c('DOM').replace(t[0],c('HTML').replaceJSONWrapper(s.photo.markup))}else c('DOM').appendContent(t,c('HTML').replaceJSONWrapper(s.photo.markup));c('DOM').setContent(this.$TahoePhotoView10,c('HTML').replaceJSONWrapper(s.ufiTray.markup));if(u[0]){c('DOM').replace(u[0],c('HTML').replaceJSONWrapper(s.sidePane.markup))}else c('DOM').appendContent(this.$TahoePhotoView8,c('HTML').replaceJSONWrapper(s.sidePane.markup));}else{c('DOM').appendContent(this.$TahoePhotoView10,c('HTML').replaceJSONWrapper(s.ufiTray.markup));c('DOM').appendContent(this.$TahoePhotoView8,c('HTML').replaceJSONWrapper(s.sidePane.markup))}this.$TahoePhotoView18();c('EventProfiler').informManualInteractionTimestamp(['Tahoe'],true)}.bind(this));q.send();this.$TahoePhotoView17()};l.prototype.selectAddComment=function(){'use strict';k.selectAddComment.call(this)};l.prototype.selectCommentTab=function(){'use strict';var m=c('DOMQuery').scry(this.$TahoePhotoView8,"._1rgu")[0];c('CSS').addClass(m,"_601h");c('CSS').removeClass(m,"_1db2")};l.prototype.selectMorePhotosTab=function(){'use strict';var m=c('DOMQuery').scry(this.$TahoePhotoView8,"._1rgu")[0];if(m){c('CSS').addClass(m,"_1db2");c('CSS').removeClass(m,"_601h")}};l.prototype.updateView=function(m,n,o){var p=arguments.length<=3||arguments[3]===undefined?null:arguments[3];'use strict';var q=c('DOMQuery').scry(this.$TahoePhotoView6,'#preload-'+m);if(q[0]){this.$TahoePhotoView19()}else{this.$TahoePhotoView19();this.$TahoePhotoView13(m,true,p)}};l.prototype.$TahoePhotoView19=function(){'use strict';c('DOM').empty(this.$TahoePhotoView6)};l.prototype.onExit=function(){'use strict'};l.registerCommentLink=function(m){'use strict';k.registerCommentLink.call(this,m)};l.registerSidepaneTabbar=function(m){var n;'use strict';var o=c('Tahoe').get();if(o!=null)(function(){var p=o.getView();if(p instanceof l)m.subscribe(c('TabBar').TAB_CLICK,function(q,r){switch(r){case 'more-photos':p.selectMorePhotosTab();break;case 'comments':p.selectCommentTab();}});})();};l.loadView=function(m){'use strict';return new l(m)};f.exports=l}),null);
__d('TahoeController',['cx','Arbiter','BootloadedComponent.react','CSS','DialogX','DOM','EventProfiler','FantaTabActions','JSResource','PageTransitions','PhotoPermalinkURI','React','ReactDOM','ResizeListener','Style','Tahoe','TahoeActions','TahoeDispatcher','TahoeMediaType','TahoeVariables','TahoeVideoView','TahoePhotoView','URI','VideoAutoplayControllerX','VideoPermalinkURI','VideoPlayerLoggerSource','VideoPlayerReason','XUISpinner.react','ge','getElementPosition','getVendorPrefixedName','requireWeak','shouldWNSRenderToRHC','TahoeVideoStore'],(function a(b,c,d,e,f,g,h){var i;c('requireWeak')('VideoProgressPreviewBar.react',function(r){i=r});var j;c('requireWeak')('VideoWatchAndScrollController',function(r){j=r});var k=c('TahoeVariables').useWiderSidePane?400:350,l=43,m=48,n=826,o=n-k,p=560-l-m;function q(r,s,t,u,v,w,x,y,z){'use strict';this.$TahoeController1=false;this.$TahoeController16=false;this.$TahoeController20=c('VideoPlayerReason').USER;this.$TahoeController39=function(){this.$TahoeController36()}.bind(this);c('TahoeDispatcher').explicitlyRegisterStores([c('TahoeVideoStore')]);c('EventProfiler').tagCurrentActiveInteractionsAs('Tahoe');this.$TahoeController18=r;this.$TahoeController8=[];if(this.$TahoeController18===c('TahoeMediaType').VIDEO){this.$TahoeController25=w;this.$TahoeController26=x;this.$TahoeController4=u;this.$TahoeController3=v;this.$TahoeController27=y}this.$TahoeController5=c('URI').getRequestURI();this.$TahoeController19=this.$TahoeController28.bind(this);c('PageTransitions').registerHandler(this.$TahoeController19);c('PageTransitions').go(t);this.$TahoeController6=this.$TahoeController29();this.$TahoeController6.show();this.$TahoeController30();if(s){switch(this.$TahoeController18){case c('TahoeMediaType').VIDEO:this.$TahoeController31(s.video);this.$TahoeController10=this.$TahoeController23.getMediaID();break;case c('TahoeMediaType').PHOTO:this.$TahoeController31(s);this.$TahoeController10=c('PhotoPermalinkURI').parse(t).photo_id;break;}this.$TahoeController32();this.$TahoeController13=this.$TahoeController17}else{this.$TahoeController33();switch(this.$TahoeController18){case c('TahoeMediaType').VIDEO:this.$TahoeController10=c('VideoPermalinkURI').parse(t).video_id;break;case c('TahoeMediaType').PHOTO:this.$TahoeController10=c('PhotoPermalinkURI').parse(t).photo_id;break;}}c('FantaTabActions').minimizeAllTabs();c('Arbiter').inform('chat/option-changed',{name:'hide_buddylist',value:true});this.$TahoeController21=z||[];if(c('TahoeVariables').useTahoePhotos&&this.$TahoeController18===c('TahoeMediaType').PHOTO){this.$TahoeController24=c('TahoePhotoView').loadView(this)}else this.$TahoeController24=c('TahoeVideoView').loadView(this,this.$TahoeController25,this.$TahoeController26);}q.prototype.go=function(r){'use strict';c('PageTransitions').go(r)};q.prototype.onExit=function(){'use strict';if(this.$TahoeController1){this.$TahoeController34()}else c('PageTransitions').go(this.$TahoeController5);};q.prototype.getReactionVideoChannelType=function(){'use strict';return this.$TahoeController27};q.prototype.getRelatedResultIDs=function(){'use strict';return this.$TahoeController21};q.prototype.$TahoeController29=function(){'use strict';var r={width:n};this.$TahoeController7=c('CSS').setClass(c('DOM').create('div'),"_5-g-");var s=new (c('DialogX'))(r,this.$TahoeController7);c('CSS').setClass(s.getRoot(),"_5-g_");if(document.body)c('CSS').addClass(document.body,"_1_-b");if(document.body&&c('TahoeVariables').useWiderSidePane)c('CSS').addClass(document.body,"_2mcr");return s};q.prototype.$TahoeController30=function(){'use strict';c('DOM').insertAfter(c('ge')('pagelet_dock'),this.$TahoeController6.getRoot())};q.prototype.$TahoeController35=function(){'use strict';c('ReactDOM').render(c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('TahoeBackAffordanceContainer.react').__setRef('TahoeController'),bootloadPlaceholder:c('React').createElement('div',{className:"_4ua2"}),entryURI:this.$TahoeController5,mediaController:this.$TahoeController23}),this.$TahoeController7)};q.prototype.$TahoeController31=function(r){'use strict';c('TahoeActions').setMediaController(r);this.$TahoeController23=r};q.prototype.$TahoeController33=function(){'use strict';this.$TahoeController35();var r=this.$TahoeController18===c('TahoeMediaType').PHOTO?c('CSS').setClass(c('DOM').create('div'),"_2-sx"):c('CSS').setClass(c('DOM').create('div'),"_1c_u");c('ReactDOM').render(c('React').createElement(c('XUISpinner.react'),{size:'large',background:'dark'}),r);this.$TahoeController17=r;var s=c('CSS').setClass(c('DOM').create('div'),"_5-yb _5_63");c('DOM').setContent(s,this.$TahoeController17);c('DOM').prependContent(this.$TahoeController7,s);this.$TahoeController36()};q.prototype.$TahoeController32=function(){'use strict';this.$TahoeController35();this.$TahoeController9=c('DOM').create('div');switch(this.$TahoeController18){case c('TahoeMediaType').VIDEO:var r=this.$TahoeController23;this.$TahoeController17=r.getRootNode();this.$TahoeController14=this.$TahoeController23;var s=r.getSource();this.$TahoeController15=s?s:c('VideoPlayerLoggerSource').INLINE;break;case c('TahoeMediaType').PHOTO:this.$TahoeController17=this.$TahoeController23.getRootNode();this.$TahoeController14=this.$TahoeController23;break;}var t=c('getElementPosition')(this.$TahoeController17);this.$TahoeController11=this.$TahoeController17.clientWidth;this.$TahoeController12=this.$TahoeController17.clientHeight;c('DOM').insertAfter(this.$TahoeController17,this.$TahoeController9);this.$TahoeController22=true;var u=c('CSS').setClass(c('DOM').create('div'),"_5-yb _5_63");c('DOM').setContent(u,this.$TahoeController17);c('DOM').prependContent(this.$TahoeController7,u);this.$TahoeController37(u,t)};q.prototype.$TahoeController37=function(r,s){'use strict';this.$TahoeController38();var t=c('Style').getFloat(this.$TahoeController17,'width'),u=c('Style').getFloat(this.$TahoeController17,'height'),v='translate('+s.x+'px,'+s.y+'px)',w='scale('+s.width/t+', '+s.height/u+')';c('Style').set(r,c('getVendorPrefixedName')('transform'),v+' '+w);r.offsetWidth;c('Style').set(r,'transition','all .4s cubic-bezier(.12,.8,.32,1)');c('Style').set(r,c('getVendorPrefixedName')('transform'),'none')};q.prototype.$TahoeController38=function(){'use strict';this.$TahoeController2=parseFloat(this.$TahoeController17.getAttribute('data-original-aspect-ratio'));switch(this.$TahoeController18){case c('TahoeMediaType').VIDEO:var r=this.$TahoeController23;r.updateSource(c('VideoPlayerLoggerSource').TAHOE);c('VideoAutoplayControllerX').setShouldAutoplay(false);r.unmute();r.play(this.$TahoeController20);this.$TahoeController23.emit('TahoeController/enterTahoe');if(i)i.destroyComponentIfAvailable(this.$TahoeController23);}this.$TahoeController36();this.$TahoeController8.push(c('ResizeListener').add(this.$TahoeController39))};q.prototype.setPlayReason=function(r){'use strict';this.$TahoeController20=r};q.prototype.addEvent=function(event){'use strict';this.$TahoeController8.push(event)};q.prototype.getMediaController=function(){'use strict';return this.$TahoeController23};q.prototype.$TahoeController36=function(){'use strict';if(this.$TahoeController16)return;var r=window.innerWidth-k;r=Math.max(r,o);var s=window.innerHeight-l-m;s=Math.max(s,p);c('Style').set(this.$TahoeController17,'width',r+'px');c('Style').set(this.$TahoeController17,'height',s+'px');switch(this.$TahoeController18){case c('TahoeMediaType').VIDEO:var t=this.$TahoeController23;t&&t.removeOffsetStylings();break;case c('TahoeMediaType').PHOTO:break;}this.$TahoeController23&&this.$TahoeController23.setDimensions(r,s)};q.prototype.$TahoeController28=function(r){'use strict';var s=c('URI').getRequestURI();if(r.getPath()===this.$TahoeController5.getPath()&&r.getQueryData().ref!=='tahoe'){if(this.$TahoeController15===c('VideoPlayerLoggerSource').WATCH_SCROLL){this.$TahoeController1=true;if(c('shouldWNSRenderToRHC')()){this.$TahoeController23.emit('crossfadeWatchAndScroll')}else this.$TahoeController23.emit('enterWatchAndScroll');}else this.$TahoeController34();}else if(!this.$TahoeController40(r)){this.$TahoeController34();return false}else if((this.$TahoeController5.getPath()!=s.getPath()||s.getQueryData().ref==='tahoe')&&s.getPath()!=r.getPath())this.$TahoeController41(r);c('PageTransitions').transitionComplete();return true};q.prototype.$TahoeController40=function(r){'use strict';if(c('TahoeVariables').useTahoePhotos){return c('PhotoPermalinkURI').isValid(r)||c('VideoPermalinkURI').isValid(r)}else return c('VideoPermalinkURI').isValid(r);};q.prototype.$TahoeController41=function(r){'use strict';this.$TahoeController16=true;var s=this.$TahoeController23;s.pause();this.$TahoeController42();var t=c('VideoPermalinkURI').parse(r).video_id,u=r.getQueryData().sp;this.$TahoeController24.updateView(t,this.$TahoeController4,this.$TahoeController3,u)};q.prototype.resetChannelData=function(){'use strict';this.$TahoeController4=null;this.$TahoeController3=null};q.prototype.$TahoeController42=function(){'use strict';var r=this.$TahoeController17.clientHeight,s=c('CSS').setClass(c('DOM').create('div'),"_1c_u _61-j");c('ReactDOM').render(c('React').createElement(c('XUISpinner.react'),{size:'large',background:'dark'}),s);c('Style').set(s,'height',r+'px');c('DOM').prependContent(this.$TahoeController7,s);if(this.$TahoeController22){c('DOM').insertAfter(this.$TahoeController9,this.$TahoeController13);c('DOM').remove(this.$TahoeController9);c('Style').set(this.$TahoeController13,'width','');c('Style').set(this.$TahoeController13,'height','')}else c('DOM').remove(this.$TahoeController7.children[1]);this.$TahoeController22=false};q.prototype.$TahoeController34=function(){'use strict';this.$TahoeController24&&this.$TahoeController24.onExit();c('PageTransitions').removeHandler(this.$TahoeController19);this.$TahoeController8.forEach(function(t){return t.remove()});c('Style').set(this.$TahoeController17,'width','');c('Style').set(this.$TahoeController17,'height','');this.$TahoeController42();switch(this.$TahoeController18){case c('TahoeMediaType').VIDEO:var r=this.$TahoeController14;c('VideoAutoplayControllerX').setShouldAutoplay(true);if(this.$TahoeController14){if(!(this.$TahoeController15===c('VideoPlayerLoggerSource').WATCH_SCROLL&&this.$TahoeController14!==this.$TahoeController23)){r.addOffsetStylings();r.setDimensions(this.$TahoeController11,this.$TahoeController12);r.updateSource(this.$TahoeController15)}r.pause(c('VideoPlayerReason').AUTOPLAY);r.mute();this.$TahoeController14.emit('resumeAutoplay');this.$TahoeController14.emit('TahoeController/exitTahoe')}this.$TahoeController23&&this.$TahoeController23.emit('TahoeController/exitTahoe');if(this.$TahoeController23!==this.$TahoeController14){var s=this.$TahoeController23;s.pause(c('VideoPlayerReason').USER)}break;}if(document.body)c('CSS').removeClass(document.body,"_1_-b");c('ReactDOM').unmountComponentAtNode(this.$TahoeController7);this.$TahoeController6.destroy();c('Tahoe').set(null)};q.prototype.getID=function(){'use strict';return this.$TahoeController10};q.prototype.getContent=function(){'use strict';return this.$TahoeController7};q.prototype.getChannelID=function(){'use strict';return this.$TahoeController4};q.prototype.getCaller=function(){'use strict';return this.$TahoeController3};q.prototype.updateMedia=function(r){'use strict';this.$TahoeController31(r);this.$TahoeController17=this.$TahoeController23.getRootNode();this.$TahoeController10=this.$TahoeController23.getMediaID();this.$TahoeController16=false;this.$TahoeController38();if(this.$TahoeController18===c('TahoeMediaType').VIDEO){var s=this.$TahoeController24;s.setUpEndScreen()}this.$TahoeController24.setUpUFI();this.$TahoeController20=c('VideoPlayerReason').USER};q.prototype.getView=function(){'use strict';return this.$TahoeController24};q.openFromVideoPlayer=function(r,s,t,u){'use strict';c('EventProfiler').tagCurrentActiveInteractionsAs('TahoeFromVideoPlayer');c('Tahoe').set(new q(c('TahoeMediaType').VIDEO,{video:r},s,t,u))};q.openFromVideoLink=function(r,s,t,u,v,w){'use strict';c('EventProfiler').tagCurrentActiveInteractionsAs('TahoeFromVideoLink');if(j)j.pauseActiveVideo();var x=c('Tahoe').get();if(x){c('PageTransitions').go(r);return}c('Tahoe').set(new q(c('TahoeMediaType').VIDEO,null,r,s,t,u,v,w))};q.openFromVideoLinkHelper=function(r){'use strict';var s=r.getAttribute('data-channel-caller'),t=s;q.openFromVideoLink(new (c('URI'))(r.getAttribute('href')),r.getAttribute('data-video-channel-id'),t)};q.openFromPhoto=function(r,s){'use strict';c('EventProfiler').tagCurrentActiveInteractionsAs('TahoeFromPhoto');c('Tahoe').set(new q(c('TahoeMediaType').PHOTO,null,r,null,null,undefined,undefined,undefined,s))};q.openFromPhotoHelper=function(r,s){'use strict';q.openFromPhoto(new (c('URI'))(r.getAttribute('href')),s)};f.exports=q}),null);
__d('OpenTahoePhotos',['TahoeController','Event','FBID'],(function a(b,c,d,e,f,g){f.exports={openOnClick:function h(i){c('Event').listen(i.link,'click',function(event){event.preventDefault();c('TahoeController').openFromPhotoHelper(i.link,i.results_ids)})}}}),null);