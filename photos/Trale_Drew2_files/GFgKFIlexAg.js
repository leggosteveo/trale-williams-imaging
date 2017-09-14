if (self.CavalryLogger) { CavalryLogger.start_js(["3cfU\/"]); }

__d("XRefererFrameController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/common\/referer_frame.php",{v:{type:"Int"}})}),null);
__d('isOculusDotComURI',['URI'],(function a(b,c,d,e,f,g){var h=new RegExp('(^|\\.)oculus\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain())}f.exports=j}),null);
__d('ControlledReferer',['Bootloader','DeferredCookie','URI','UserAgent','XRefererFrameController','isMessengerDotComURI','isOculusDotComURI','lowerFacebookDomain'],(function a(b,c,d,e,f,g){var h={useFacebookReferer:function i(j,k,l){if(!c('DeferredCookie').canEmbedThirdPartyPixel()){c('Bootloader').loadModules(["BanzaiODS"],function(p){p.bumpEntityKey('defer_cookies','block_controlled_referer_iframe')},'ControlledReferer');return}var m=false;function n(){if(m)return;var p=j.contentWindow.location.pathname;if(p!=='/intern/common/referer_frame.php'&&p!=='/common/referer_frame.php')return;m=true;j.contentWindow.document.body.style.margin=0;k()}var o=void 0;if(c('isMessengerDotComURI')(c('URI').getRequestURI())){o=c('XRefererFrameController').getURIBuilder().getURI().toString()}else if(c('isOculusDotComURI')(c('URI').getRequestURI())){o='/common/referer_frame.php'}else if(!c('lowerFacebookDomain').isValidDocumentDomain()){o='/intern/common/referer_frame.php'}else if(c('UserAgent').isBrowser('Opera')){o=c('XRefererFrameController').getURIBuilder().getURI().toString()}else o=c('XRefererFrameController').getURIBuilder().getURI().qualify().setProtocol('https').setSubdomain('staticxx').toString();if(l)o+='?fb_source='+l;j.onload=n;j.src=o},useFacebookRefererHtml:function i(j,k,l){h.useFacebookReferer(j,function(){j.contentWindow.document.body.innerHTML=k},l)}};f.exports=h}),null);
__d('TrackingPixel',['Arbiter','ControlledReferer','DeferredCookie','JSLog','NonBlockingIFrame','WebSpeedJSExperiments'],(function a(b,c,d,e,f,g){var h={_iframe:undefined,loadWithNoReferrer:function i(j){if(!c('DeferredCookie').canEmbedThirdPartyPixel()){c('JSLog').error('Attempting to load a TrackingPixel (%s) while cookies are deferred. '+'This is not allowed because tracking pixels sometimes set cookies.',j);return}if(!h._iframe)if(c('WebSpeedJSExperiments').non_blocking_logger){h._iframe=true;c('NonBlockingIFrame').loadIFrame().then(function(l){h._iframe=l;c('ControlledReferer').useFacebookReferer(l,function(){c('Arbiter').inform('TrackingPixel/iframeIsLoaded',null,c('Arbiter').BEHAVIOR_PERSISTENT)},null)}).done()}else{var k=document.createElement('iframe');k.frameborder=0;k.width=k.height=1;k.style.position='absolute';k.style.top='-10px';c('ControlledReferer').useFacebookReferer(k,function(){c('Arbiter').inform('TrackingPixel/iframeIsLoaded',null,c('Arbiter').BEHAVIOR_PERSISTENT)},null);document.body.appendChild(k);h._iframe=k}c('Arbiter').subscribe('TrackingPixel/iframeIsLoaded',function(){var l=h._iframe.contentWindow,m=new l.Image();m.src=j})}};f.exports=h}),null);
__d('ExternalTrackingTag',['AsyncSignal','Event','TrackingPixel'],(function a(b,c,d,e,f,g){var h={listenForElementClick:function i(j,k,l,m,n){c('Event').listen(j,'click',function(){h.sendRequest(k,l,m,n)})},sendRequest:function i(j,k,l,m){if(!j)return;new (c('AsyncSignal'))('/ads/external_tracking_tag/',{href:j,tracking_tag_id:k,adgroup_id:l,ad_id:m}).send();c('TrackingPixel').loadWithNoReferrer(j)}};f.exports=h}),null);
__d('FBLynxWrapper',['URI','isFacebookURI','isLinkshimURI'],(function a(b,c,d,e,f,g){'use strict';var h={SUBDOMAIN:'l',SUBDOMAIN_M:'lm',PATH:'/',URL_PARAM:'u',ENC_PARAM:'e',isLynxLink:function i(j){if(j.getAttribute('data-lynx-async-dest'))return true;if(j.getAttribute('data-lynx-uri'))return true;if(c('isLinkshimURI')(new (c('URI'))(j.href)))return true;return false}};f.exports=h}),null);
__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','getScrollPosition'],(function a(b,c,d,e,f,g){'use strict';var h=0,i=null;function j(){if(i)return;i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){m(0);k()}),c('Event').listen(window,'resize',function(){if(!c('BlueBar').hasFixedBlueBar()){m(0);k()}}),c('Event').listen(window,'scroll',function(){if(!l())k();}));c('Run').onLeave(function(){return i&&i.release()})}function k(){i&&i.release();i=null}function l(){if(h<=0)return false;m(c('clamp')(c('getScrollPosition')(window).y,0,h));return h>0}function m(o){h=o}var n={adjustVerticalWindowPosition:function o(p,q){j();m(q);window.scrollTo(p.x,p.y+h)}};f.exports=n}),null);
__d('LitestandStream',['csx','invariant','Arbiter','CSS','EventEmitter','LitestandColumnManager','Run','getScrollPosition','nullthrows'],(function a(b,c,d,e,f,g,h,i){var j=void 0,k=void 0,l=void 0,m=void 0,n=new (c('EventEmitter'))(),o={init:function p(q,r,s,t){j=s;l=q;k=t;if(!m)m=c('Arbiter').subscribe('ufi/didUpdate',function(u,v){if(v.offsetY)c('LitestandColumnManager').adjustVerticalWindowPosition(c('getScrollPosition')(window),v.offsetY);});c('Run').onLeave(function(){m&&m.unsubscribe();m=null;n.removeAllListeners('ready');l=null});n.emit('ready')},getStoriesSelector:function p(){return "._5jmm"},getStreamRoot:function p(){return l},getSectionID:function p(){return j},getStoryID:function p(){return k},isStory:function p(q){return c('CSS').matchesSelector(q,"._5jmm")},getFeedStreamID:function p(){return parseInt(c('nullthrows')(l).id.split('feed_stream_')[1],16)%1e+08},isReady:function p(){return !!l},addReadyListener:function p(q){o.isReady()||i(0);return n.once('ready',q)}};f.exports=o}),null);
__d('FeedAdsClickLogger',['Arbiter','AsyncRequest','BanzaiODS','DataAttributeUtils','DOM','ExternalTrackingTag','FBLynxWrapper','LitestandMessages','LitestandStream','Parent','SLConfig','TrackingNodes','URI','collectDataAttributes','isFacebookURI','isLinkshimURI','ge'],(function a(b,c,d,e,f,g){var h='ssinfeed',i={},j=false,k=[],l,m=false;function n(){'use strict'}n.prototype.init=function(p){'use strict';l=c('SLConfig').gk.sl_replace_s;c('Arbiter').subscribe('ClickRefAction/new',this.onNewUserAction.bind(this));m=p.see_more_logging_enabled;if(p.append_tracking_data_to_links){this.appendTrackingDataToLinks();c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this));c('Arbiter').subscribe('FeedAdsClickLogger/refreshTrackingData',this.appendTrackingDataToLinks.bind(this),c('Arbiter').SUBSCRIBE_NEW)}};n.prototype.getStories=function(){'use strict';var p=c('LitestandStream').getStreamRoot();if(p){return c('DOM').scry(p,c('LitestandStream').getStoriesSelector())}else{var q=c('ge')('home_stream');if(q)return c('DOM').scry(q,'.uiStreamStory');}return []};n.prototype.appendTrackingDataToLinks=function(){'use strict';var p=this.getStories();for(var q=0;q<p.length;q++){var r=p[q];if(r in k)continue;var s=c('DataAttributeUtils').getDataFt(r);if(!s||s.indexOf('ei')===-1&&s.indexOf('mei')===-1)continue;var t=c('DOM').scry(r,'a');for(var u=0;u<t.length;u++){var v=t[u];if(v.getAttribute('ajaxify')!=null)continue;if(v.getAttribute('rel')!=null)continue;var w=v.getAttribute('href');if(!w||w.charAt(0)==='#')continue;var x=new (c('URI'))(v);if(c('isFacebookURI')(x)===false)continue;if(c('isLinkshimURI')(x)||c('FBLynxWrapper').isLynxLink(v))continue;if(x.isPossiblySignedURI()===true)continue;if(l&&(x.getPath()==='/ads/about'||x.getPath()==='/about/ads'))continue;v.setAttribute('href',o(v).toString());v.setAttribute('onmousedown',"this.href = this.href.replace('__md__=0', '__md__=1');")}k.push(r)}};n.prototype.getHref=function(p){'use strict';return p.getAttribute&&(p.getAttribute('ajaxify')||p.getAttribute('data-endpoint'))||p.action||p.href};n.prototype.sendLogRequest=function(p,q){'use strict';var r=p.ei||p.ai;if(!r&&p.mei)r=p.mf_story_key;if(p!==null&&typeof r==='string'){var s=false;if(p.tn){var t=c('TrackingNodes').parseTrackingNodeString(p.tn);for(var u=0;u<t.length;u++){var v=t[u][0];switch(v){case c('TrackingNodes').types.LIKE_LINK:case c('TrackingNodes').types.UNLIKE_LINK:case c('TrackingNodes').types.COMMENT:case c('TrackingNodes').types.COMMENT_LINK:case c('TrackingNodes').types.ADD_COMMENT_BOX:case c('TrackingNodes').types.MULTI_ATTACHMENT_VIDEO:return;case c('TrackingNodes').types.XBUTTON:case c('TrackingNodes').types.HIDE_LINK:case c('TrackingNodes').types.REPORT_SPAM_LINK:case c('TrackingNodes').types.HIDE_ALL_LINK:case c('TrackingNodes').types.DROPDOWN_BUTTON:case c('TrackingNodes').types.UNHIDE_LINK:return;case c('TrackingNodes').types.RELATED_SHARE_ARTICLE:case c('TrackingNodes').types.RELATED_SHARE_VIDEO:return;case c('TrackingNodes').types.TRANSLATION:return;case c('TrackingNodes').types.ATTACHMENT:case c('TrackingNodes').types.USER_MESSAGE:s=true;break;}}}var w=Date.now(),x=500;p.duplicate_click=!!i[r]&&w-i[r]<x;i[r]=w;var y=new (c('AsyncRequest'))('/ajax/ssinfeed/end/').setData(p).setAllowCrossPageTransition(true).setMethod('POST');y.send();var z=p.href;if(c('isLinkshimURI')(new (c('URI'))(z))&&new (c('URI'))(z).getQueryData())z=new (c('URI'))(z).getQueryData().u;if(s&&!p.duplicate_click&&q!==null&&q.url&&z&&c('isFacebookURI')(new (c('URI'))(z))===false){c('ExternalTrackingTag').sendRequest(q.url,q.tag_id,q.adgroup_id);c('BanzaiODS').bumpEntityKey('external_tracking_tags','request_sent')}}};n.prototype.onNewUserAction=function(p,q){'use strict';if(!q.node)return;var r=this.getHref(q.node),s=c('Parent').byTag(q.node,'input')||c('Parent').byTag(q.node,'button');if(!r&&s&&s.type=='submit'&&s.getAttribute&&c('DataAttributeUtils').getDataFt(s))r='#';if(q.event&&q.node.tagName==='A'&&q.event.defaultPrevented&&m)r='#';var t,u;if(r&&q.event&&(q.event.type==='click'||q.event.type==='contextmenu')){t=c('collectDataAttributes')(q.node,['ft']);t.ft.href=r;t.ft.mouse_type=q.event.type;u=c('collectDataAttributes')(q.node,['external-tracking-tags']);this.sendLogRequest(t.ft,u['external-tracking-tags'])}};function o(p){var q=new (c('URI'))(p.href),r=c('collectDataAttributes')(p,['ft']).ft,s=q.getQueryData();s.ft=r;s.__md__=0;q.setQueryData(s);return q}f.exports={init:function p(q){if(j===false){new n().init(q);j=true}},buildURL:o}}),null);
__d('SLPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:SLPerfLoggerConfig',this.$SLPerfTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:SLPerfLoggerConfig',this.$SLPerfTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$SLPerfTypedLogger1={};return this};h.prototype.updateData=function(j){this.$SLPerfTypedLogger1=babelHelpers['extends']({},this.$SLPerfTypedLogger1,j);return this};h.prototype.setCount=function(j){this.$SLPerfTypedLogger1.count=j;return this};h.prototype.setDurationMs=function(j){this.$SLPerfTypedLogger1.duration_ms=j;return this};h.prototype.setEvent=function(j){this.$SLPerfTypedLogger1.event=j;return this};var i={count:true,duration_ms:true,event:true};f.exports=h}),null);
__d('SLUtils',['csx','cx','Arbiter','DOM','Event','FeedAdsClickLogger','LitestandMessages','LitestandStream','Map','SLConfig','SLPerfTypedLogger','URI','clearTimeout','curry','cxodecode','goURI','joinClasses','setIntervalAcrossTransitions','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=false;function k(ra,sa){var ta;if(j)return;j=true;if(!c('SLConfig').gk.s_link_utils)return;if(ka()){ma().setEvent('init').log();oa('init_timer')}l();if(c('SLConfig').gk.sl_replace_about_link)q(function(ua,va){return r(ua,va)});if(c('SLConfig').gk.sl_replace_s)(function(){da(ra);var ua=sa.map(function(va){return {nonce:c('cxodecode')(va.nonce),className:c('cxodecode')(va.className)}});q(function(va,wa){ua.forEach(function(xa){var ya=c('DOM').scry(va,xa.nonce);ya.forEach(function(za){while(za.firstChild)za.removeChild(za.firstChild);za.className=c('joinClasses')(za.className,xa.className)})})})})();if(c('SLConfig').gk.sl_replace_subtitle){ga();q(function(ua,va){y(ua,va);z(va)});c('setIntervalAcrossTransitions')(aa,c('SLConfig').sv.interval)}n();if(ka())ma().setEvent('init_duration').setDurationMs(pa('init_timer')).log();}function l(){c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,n);c('Arbiter').subscribe('FeedAdsClickLogger/refreshTrackingData',n,c('Arbiter').SUBSCRIBE_NEW)}var m=null;function n(){if(ka())oa('hsa_timer');c('clearTimeout')(m);m=null;var ra=[],sa=u(),ta=ja(),ua=false;ta.forEach(function(va){if(!va.id)return;if(sa.has(va.id))return;if(!x(va,va.id)){ua=true;return}sa.set(va.id,va);ra.push([va,va.id])});if(ua){m=c('setTimeoutAcrossTransitions')(n,c('SLConfig').sv.sl_content_waiting_delay);if(ka())ma().setEvent('hsa_waiting_for_content').log();}if(ka())ma().setEvent('hsa_stories_added').setCount(ra.length).log();if(ra.length===0)return;ra.forEach(function(va){var wa=va[0],xa=va[1];return p().forEach(function(ya){return ya(wa,xa)})});if(ka())ma().setEvent('hsa_duration').setDurationMs(pa('hsa_timer')).log();}var o=[];function p(){return o}function q(ra){o.push(ra)}function r(ra,sa){var ta=x(ra,sa);if(!ta){if(ka())ma().setEvent('usl_real_subtitle_missing').log();return}var ua=c('DOM').scry(ta,'a'),va=ua.filter(function(wa){var xa=new (c('URI'))(wa.href).getPath();return xa==='/ads/about'||xa==='/about/ads'});if(ka())ma().setEvent('usl_links_updated').setCount(va.length).log();va.forEach(function(wa){var xa=c('FeedAdsClickLogger').buildURL(wa);c('Event').listen(wa,'click',c('curry')(s,xa));wa.href='#'})}function s(ra,sa){c('goURI')(ra.toString().replace('__md__=0','__md__=1'));c('Event').stop(sa)}var t=new (c('Map'))();function u(){return t}var v=new (c('Map'))(),w=new (c('Map'))();function x(ra,sa){var ta=null;if(v.has(sa)){ta=v.get(sa)}else ta=ra;var ua=c('DOM').scry(ta,"._5pcp");if(ua.length===0){return null}else return ua[0];}function y(ra,sa){if(v.has(sa)||w.has(sa))return;var ta=fa();if(!ta){if(ka())ma().setEvent('es_subtitle_container_missing').log();return}var ua=c('DOM').scry(ra,"._5pcp");if(ka())ma().setEvent('es_subtitle_count').setCount(ua.length).log();if(ua.length===0)return;var va=ua[0],wa=va.parentNode;if(!va||!wa)return;var xa=ba();va.parentNode.replaceChild(xa,va);var ya=ca(va);ta.appendChild(ya);v.set(sa,ya);w.set(sa,xa)}function z(ra){if(la())oa('usp_timer');var sa=ia();if(!sa){if(ka())ma().setEvent('usp_feed_root_missing').log();return}var ta=w.get(ra);if(!ta){if(ka())ma().setEvent('usp_fake_missing').log();return}var ua=v.get(ra);if(!ua){if(ka())ma().setEvent('usp_real_missing').log();return}var va=sa.getBoundingClientRect(),wa=ta.getBoundingClientRect(),xa=wa.top!==0&&wa.left!==0;ua.style.display=xa?'initial':'none';ua.style.top=wa.top-va.top+'px';ua.style.left=wa.left-va.left+'px';if(la())ma().setEvent('usp_duration').setDurationMs(pa('usp_timer')).log();}function aa(){if(la())oa('eausp_duration');ha();var ra=u();ra.forEach(function(sa,ta){y(sa,ta);z(ta)});if(la())ma().setEvent('eausp_duration').setDurationMs(pa('eausp_duration')).setCount(ra.size).log();}function ba(){return c('DOM').create('div',{'class':"_4kgx"})}function ca(ra){return c('DOM').create('div',{style:'position: absolute; z-index: 1;'},ra)}function da(ra){var sa=document.createElement('style');sa.type='text/css';sa.textContent=c('cxodecode')(ra);document.getElementsByTagName('head')[0].appendChild(sa)}var ea=null;function fa(){return ea}function ga(){if(ea)return;var ra=ia();ea=c('DOM').create('div',{style:'position: relative;'});ra.insertBefore(ea,ra.firstChild)}function ha(){if(!ea)return;var ra=ia();if(ea.parentNode===ra)return;c('DOM').remove(ea);ra.insertBefore(ea,ra.firstChild)}function ia(){return c('LitestandStream').getStreamRoot()||document.body}function ja(){return c('DOM').scry(ia(),"._5pat")}function ka(){return !!c('SLConfig').gk.sl_perf_logging}function la(){return !!c('SLConfig').gk.sl_perf_logging_heavy}function ma(){return new (c('SLPerfTypedLogger'))()}var na=new (c('Map'))();function oa(ra){na.set(ra,Date.now())}function pa(ra){var sa=na.get(ra);return sa==null?-1:Date.now()-sa}var qa={init:k};f.exports=qa}),null);
__d('UFIOrderingModeSelector.react',['cx','invariant','ix','Image.react','InlineBlock.react','Link.react','PopoverMenu.react','React','ReactXUIMenu'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('ReactXUIMenu').SelectableMenu,n=c('ReactXUIMenu').SelectableItem;k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.onMenuItemClick=function(u,v){this.props.onOrderChanged(v.item.getValue())}.bind(this),q}o.prototype.render=function(){if(this.props.orderingModes.length===0)return null;var p=this.props.orderingModes.filter(function(r){return r.value==this.props.selectedMode}.bind(this)).map(function(r){return r.name}).pop();p||i(0);var q=c('React').createElement(m,{className:"_4tju",onItemClick:this.onMenuItemClick},this.props.orderingModes.map(function(r){return c('React').createElement(n,{key:r.value,value:r.value,label:r.name,selected:r.value===this.props.selectedMode},c('React').createElement('div',{className:"_3scm"},c('React').createElement('div',{className:"_3scn"},r.name),c('React').createElement('div',{className:"_3sco"},r.description)))}.bind(this)));return c('React').createElement('div',{className:"_3scp"},c('React').createElement(c('InlineBlock.react'),null,c('React').createElement(c('PopoverMenu.react'),{className:"_3scs",menu:q,alignh:'right'},c('React').createElement(c('Link.react'),null,p,c('React').createElement(c('Image.react'),{className:"_3sct",src:j("101460")})))))};f.exports=o}),null);
__d('CommentsOrderingModeSelectorUsageTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:CommentsOrderingModeSelectorUsageLoggerConfig',this.$CommentsOrderingModeSelectorUsageTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:CommentsOrderingModeSelectorUsageLoggerConfig',this.$CommentsOrderingModeSelectorUsageTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$CommentsOrderingModeSelectorUsageTypedLogger1={};return this};h.prototype.updateData=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1=babelHelpers['extends']({},this.$CommentsOrderingModeSelectorUsageTypedLogger1,j);return this};h.prototype.setAvailableOrders=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.available_orders=c('GeneratedLoggerUtils').serializeVector(j);return this};h.prototype.setEndOrder=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.end_order=j;return this};h.prototype.setPostFbid=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.post_fbid=j;return this};h.prototype.setPostOwnerFbid=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.post_owner_fbid=j;return this};h.prototype.setStartOrder=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.start_order=j;return this};h.prototype.setVC=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.vc=j;return this};var i={available_orders:true,end_order:true,post_fbid:true,post_owner_fbid:true,start_order:true,vc:true};f.exports=h}),null);
__d('UFIOrderingModeSelectorContainer.react',['CommentsOrderingModeSelectorUsageTypedLogger','Random','React','SubscriptionsHandler','UFIConfig','UFIInstanceAction','UFIOrderingModeSelector.react','UFIOrderingModeStore','UFISharedDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)},this.$UFIOrderingModeSelectorContainer1=null,this.onOrderChanged=function(q){var r=this.props.feedback;if(r.orderingmodes&&c('UFIConfig').logChangeOrderingModeUsageSampleRate>c('Random').random()){var s=r.orderingmodes.map(function(t){return t.value});new (c('CommentsOrderingModeSelectorUsageTypedLogger'))().setStartOrder(this.state.selectedMode).setEndOrder(q).setPostFbid(r.commentstargetfbid).setPostOwnerFbid(r.ownerid).setAvailableOrders(s).log()}c('UFISharedDispatcher').dispatch(c('UFIInstanceAction').changeOrderingMode(this.props.contextArgs,q))}.bind(this),m}k.prototype.componentDidMount=function(){this.$UFIOrderingModeSelectorContainer1=new (c('SubscriptionsHandler'))();this.$UFIOrderingModeSelectorContainer1.addSubscriptions(c('UFIOrderingModeStore').addListener(function(){if(!this.$UFIOrderingModeSelectorContainer1)return;this.setState({selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)})}.bind(this)))};k.prototype.componentWillUnmount=function(){if(this.$UFIOrderingModeSelectorContainer1){this.$UFIOrderingModeSelectorContainer1.release();this.$UFIOrderingModeSelectorContainer1=null}};k.prototype.shouldComponentUpdate=function(l,m){return this.state.selectedMode!==m.selectedMode};k.prototype.render=function(){return c('React').createElement(c('UFIOrderingModeSelector.react'),{onOrderChanged:this.onOrderChanged,orderingModes:this.props.feedback.orderingmodes,selectedMode:this.state.selectedMode})};k.propTypes={feedback:j.shape({defaultcommentorderingmode:j.string.isRequired,orderingmodes:j.arrayOf(j.shape({name:j.string.isRequired,description:j.string.isRequired,selected:j.bool.isRequired,value:j.string.isRequired})).isRequired,commentstargetfbid:j.string.isRequired,ownerid:j.string.isRequired}).isRequired,contextArgs:j.object.isRequired};f.exports=k}),null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{})}),null);
__d('EntstreamAttachmentRelatedShare',['csx','cx','Arbiter','AsyncRequest','AttachmentRelatedShareConstants','CSS','DOM','Event','XPubcontentInlinePhotoPivotsEventsController','ge','getOrCreateDOMID','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j=2,k=3,l={loadRelatedAttachment:function m(n,o,p){var q=null;if(typeof n==='string'){q=c('ge')(n)}else q=n;if(!q)return;var r=c('Event').listen(q,'click',function(){r.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:q,global_share_id:o,is_right_click:false,share_id:p})}),s=c('Event').listen(q,'mousedown',function(event){if(event.which===k||event.button===j){s.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:q,global_share_id:o,is_right_click:true})}})},loadInlineStoryPivotAttachment:function m(n,o){var p=c('ge')(n);if(!p)return;var q=c('Event').listen(p,'click',function(){q.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').PHOTO_CLICK,{attachment:p,storyid:o})})},loadRelatedGameAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n)}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:p,global_share_id:o})}));c('tidyEvent')(c('Event').listen(p,'mousedown',function(event){if(event.which===k||event.button===j)c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:p,global_share_id:o});}))},loadRelatedLSCVideoAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n)}else p=n;if(!p)return;var q=c('Event').listen(p,'click',function(){q.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').VIDEO_CLICK,{attachment:p,global_share_id:o})})},loadRelatedLSCInlineVideoAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n)}else p=n;if(!p)return;c('Event').listen(p,'click',function(){var q="^div._4-u2",r="_1d8v",s=c('DOM').scry(p,q),t=s.length===1?s[0]:null,u=t.parentNode,v=u.previousSibling;while(!v){u=u.parentNode;v=u.previousSibling}if(!c('CSS').hasClass(v,r)){var w=c('DOM').create('div',{className:r}),x=c('DOM').insertBefore(t.parentNode,w),y=x.length>=1?x[0]:null}else y=v;var z=c('getOrCreateDOMID')(y);new (c('AsyncRequest'))().setURI('/ajax/flash/expand_inline.php').setData({share_id:o,target_div:z,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(p.parentNode).send()})},loadRelatedEventsPivotAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n)}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').EVENT_JOIN,{attachment:p,event_id:o})}))},loadRelatedProductAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n)}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').PRODUCT_CLICK,{attachment:p,product_id:o})}))},loadMapAttachment:function m(n,o,p){var q=typeof n==='string'?c('ge')(n):n;if(!q)return;var r=typeof o==='string'?c('ge')(o):o;if(!r)return;c('tidyEvent')(c('Event').listen(q,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').MAP_CLICK,{attachment:r,story_id:p})}))},loadMapAttachmentActionButton:function m(n,o){var p=typeof n==='string'?c('ge')(n):n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').ACTION_BUTTON_CLICK,{button:p,story_id:o})}))},closeButton:function m(n,o){c('Event').listen(n,'click',function(){c('DOM').remove(o)})},closeButtonPhotoPivots:function m(n,o,p,q){c('Event').listen(n,'click',function(){var r=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),s={story_id:p,search_query_type:q,event:'hide'};new (c('AsyncRequest'))().setMethod('POST').setURI(r.getURI()).setData(s).send();c('DOM').remove(o)})},seeAllLinkPhotoPivots:function m(n,o,p){c('Event').listen(n,'click',function(){var q=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),r={story_id:o,search_query_type:p,event:'see_all'};new (c('AsyncRequest'))().setMethod('POST').setURI(q.getURI()).setData(r).send()})},removeOldSuggestions:function m(n){var o=c('ge')(n);if(!o)return;var p=c('DOM').scry(o.parentNode,"._5d73");for(var q=1;q<p.length;q++)c('DOM').remove(p[q]);setTimeout(function(){c('CSS').show(p[0])},1000)},showHiddenSuggestions:function m(n){var o=c('Event').listen(n,'click',function(){o.remove();var p="^._1ui8",q=c('DOM').scry(n,p);if(!q)return;c('CSS').hide(q[0]);var r=q[0].previousSibling;while(r){c('CSS').show(r);r=r.previousSibling}})}};f.exports=l}),null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null})}}),null);
__d('FbFeedAccessible',['csx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DataAttributeUtils','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i,j){var k='Accessibility/StoriesRequested',l='Accessibility/StoriesLoaded',m='Accessibility/StoryContentInserted',n='Accessibility/SubstreamInserted',o=void 0,p=void 0,q={init:function r(s){o=s;if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){var t=new (c('SubscriptionsHandler'))();t.addSubscriptions(c('Arbiter').subscribe(c('LitestandMessages').STORIES_REQUESTED,this._onStoriesRequested.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(l,this._processStoriesLoaded.bind(this)),c('Arbiter').subscribe(k,this._processStoriesRequested.bind(this)),c('Arbiter').subscribe(m,this._processStoryContentInserted.bind(this)),c('Arbiter').subscribe(n,this._processInsertedSubstream.bind(this)));this._enumerateStories()}},informStoryContentInserted:function r(s){c('Arbiter').inform(m,s);var t=c('ge')(s);if(t&&this._isStory(t)){this.setARIARole(t);this.setAriaLabelledBy(t);this.setAriaDescribedBy(t)}},setARIARole:function r(s){s.setAttribute('role','article')},setAriaLabelledBy:function r(s){if(s.getAttribute('aria-labelledby'))return;var t=this._filterForElement(s,["._5pbw"]);if(t.length>0)s.setAttribute('aria-labelledby',t.map(function(u){return c('getOrCreateDOMID')(u)}).join(' '));},setAriaDescribedBy:function r(s){if(s.getAttribute('aria-describedby'))return;var t=this._filterForElement(s,[".timestampContent","._5pbx"]);if(t.length>0)s.setAttribute('aria-describedby',t.map(function(u){return c('getOrCreateDOMID')(u)}).join(' '));},_getStories:function r(s){return c('DOMQuery').scry(s||o,"._5jmm")},_onInsertedSubstream:function r(s,t){if(t&&t.substream_id)c('Arbiter').inform(n,t.substream_id);},_onStoriesRequested:function r(){c('Arbiter').inform(k)},_enumerateStories:function r(){var s=this._getStories(o);p=s.length;s.forEach(function(t,u){this._enumerateStory(t,u+=1)}.bind(this))},_enumerateSubstream:function r(s){var t=this._getStories();p=t.length;var u=this._getStories(c('ge')(s)),v=u.length||0;for(var w=0;w<v;w++)this._registerStoryEnumerationPosition(u[w],p-v+(w+1),w+1);},_enumerateStory:function r(s,t){this._isStory(s)||j(0);if(t>0){s.setAttribute('aria-posinset',''+t);s.setAttribute('aria-setsize',p)}},_processStoriesLoaded:function r(){c('ARIA').notify(i._("More stories loaded."))},_processStoriesRequested:function r(){c('ARIA').notify(i._("More stories requested."))},_processInsertedSubstream:function r(s,t){this._enumerateSubstream(t);this._enumerateStories()},_processStoryContentInserted:function r(s,t){var u=void 0,v=c('ge')(t);if(v)u=JSON.parse(c('DataAttributeUtils').getDataFt(v));if(u&&u.ordinal_position){var w=u.ordinal_position.split(':'),x=w[0],y=w[1];x=parseInt(x,10);y=parseInt(y,10);this._enumerateStory(v,x);if(y===1)c('Arbiter').inform(l);}},_registerStoryEnumerationPosition:function r(s,t,u){var v=JSON.parse(c('DataAttributeUtils').getDataFt(s));if(v){v.ordinal_position=t+':'+u;c('DataAttributeUtils').setDataFt(s,JSON.stringify(v))}},_isStory:function r(s){return c('CSS').matchesSelector(s,"._5jmm")},_filterForElement:function r(s,t){return t.map(function(u){return c('DOMQuery').scry(s||document,u)[0]}).filter(function(u){return !!u})}};f.exports=q}),null);