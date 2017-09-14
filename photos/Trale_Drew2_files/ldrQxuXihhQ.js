if (self.CavalryLogger) { CavalryLogger.start_js(["2toDT"]); }

__d('TahoeEllipsisText.react',['DOMContainer.react','LineClamp.react','Link.react','React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l,m){'use strict';i.constructor.call(this,l,m)}k.prototype.render=function(){'use strict';var l=this.props.seeMoreLink&&this.props.seeMoreText?c('React').createElement(c('Link.react'),{href:this.props.seeMoreLink},this.props.seeMoreText):'\u2026';return c('React').createElement(c('LineClamp.react'),{lines:this.props.lines,lineHeight:this.props.lineHeight,customEllipsisDisableGradient:false,customEllipsis:l,fitHeightToShorterText:this.props.fitHeightToShorterText},c('React').createElement(c('DOMContainer.react'),null,this.props.content))};k.propTypes={content:j.object.isRequired,lines:j.number.isRequired,lineHeight:j.number.isRequired,seeMoreLink:j.string,seeMoreText:j.string,fitHeightToShorterText:j.bool};f.exports=k}),null);
__d('TahoeEndScreenProgressCircle.react',['cx','React','ReactDOM','Style'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$TahoeEndScreenProgressCircle1=0,this.$TahoeEndScreenProgressCircle2=0,n}l.prototype.componentDidMount=function(){'use strict';this.drawProgressCircle(this.props)};l.prototype.componentWillUnmount=function(){'use strict';clearInterval(this.$TahoeEndScreenProgressCircle1)};l.prototype.componentWillReceiveProps=function(m){'use strict';if(m.makeProgress!==this.props.makeProgress||m.timeoutSec!==this.props.timeoutSec)this.drawProgressCircle(m);};l.prototype.drawProgressCircle=function(m){'use strict';var n=c('ReactDOM').findDOMNode(this.refs.progressCircle),o=this.$TahoeEndScreenProgressCircle2,p=o/100;c('Style').set(n,'stroke-dashoffset',o+'px');clearInterval(this.$TahoeEndScreenProgressCircle1);if(m.makeProgress)this.$TahoeEndScreenProgressCircle1=setInterval(function(){o-=p;c('Style').set(n,'stroke-dashoffset',o+'px');if(o<=0){clearInterval(this.$TahoeEndScreenProgressCircle1);c('Style').set(n,'stroke-dashoffset','0px');m.onProgressDone&&m.onProgressDone()}}.bind(this),m.timeoutSec*10);};l.prototype.render=function(){'use strict';var m=48,n=4,o=m/2,p=o-n/2;this.$TahoeEndScreenProgressCircle2=p*2*Math.PI;return c('React').createElement('div',null,c('React').createElement('svg',{className:"_4bcw"},c('React').createElement('circle',{cx:o,cy:o,r:o,fill:'rgba(0, 0, 0, 0.3)'}),c('React').createElement('circle',{ref:'progressCircle',cx:o,cy:o,r:p,fill:'transparent',stroke:'#ffffff',strokeWidth:n,strokeDasharray:this.$TahoeEndScreenProgressCircle2})),this.props.children)};l.propTypes={children:k.element,makeProgress:k.bool.isRequired,onProgressDone:k.func,timeoutSec:k.number.isRequired};f.exports=l}),null);
__d('TahoeEndScreenUpNextTile.react',['cx','fbt','DOM','DOMContainer.react','Image.react','React','ResizeListener','ShimButton.react','TahoeEllipsisText.react','TahoeEndScreenProgressCircle.react'],(function a(b,c,d,e,f,g,h,i){var j,k,l=20;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={containerWidth:0,containerHeight:0,makeProgress:true,cancelButtonVisible:true},this.$TahoeEndScreenUpNextTile2=function(){if(this.container)this.setState({containerWidth:this.container.clientWidth,containerHeight:this.container.clientHeight});}.bind(this),o}m.prototype.componentDidMount=function(){'use strict';this.$TahoeEndScreenUpNextTile2();this.$TahoeEndScreenUpNextTile1=c('ResizeListener').add(this.$TahoeEndScreenUpNextTile2)};m.prototype.componentWillUnmount=function(){'use strict';this.$TahoeEndScreenUpNextTile1&&this.$TahoeEndScreenUpNextTile1.remove()};m.prototype.$TahoeEndScreenUpNextTile3=function(){'use strict';this.setState({cancelButtonVisible:false,makeProgress:false})};m.prototype.render=function(){'use strict';var n=c('DOM').create('span',undefined,this.props.titleText),o=0,p=0,q=Math.min(this.state.containerWidth,this.state.containerHeight);if(this.props.aspectRatio>=1){o=q;p=q/this.props.aspectRatio}else{p=q;o=q*this.props.aspectRatio}var r={backgroundImage:this.props.imageUrl?'url('+this.props.imageUrl+')':'none',width:o+'px',height:p+'px'},s=i._("UP NEXT"),t=i._("Cancel");return c('React').createElement('div',{className:"_6236",ref:function(u){return this.container=u}.bind(this)},c('React').createElement('div',{className:"_6237",style:r},c('React').createElement('div',{className:"_6238"},s),c('React').createElement(c('ShimButton.react'),{hidden:!this.state.cancelButtonVisible,className:"_6239",onClick:function(){return this.$TahoeEndScreenUpNextTile3()}.bind(this)},t),c('React').createElement('div',{className:"_6230"},c('React').createElement('div',{className:"_29y5"},c('React').createElement(c('TahoeEllipsisText.react'),{content:n,lines:1,lineHeight:l})),c('React').createElement('div',{className:"_6231"},c('React').createElement(c('DOMContainer.react'),null,this.props.profileCard),c('React').createElement('span',{className:"_6232"},this.props.viewCount))),c('React').createElement('div',{className:"_2x_j"},c('React').createElement(c('TahoeEndScreenProgressCircle.react'),{makeProgress:this.state.makeProgress,onProgressDone:this.props.onCountdownDone,timeoutSec:this.props.countdownTimeoutSec},c('React').createElement(c('Image.react'),{onClick:this.props.onPlayClick,className:"_6235",src:'/images/video/player/embedded_controls/icons/play-2x.png'})))))};m.defaultProps={countdownTimeoutSec:3,aspectRatio:1};f.exports=m}),null);
__d('TahoeShareButton.react',['React','UFIShareNowMenuBootloader.react'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';var k=this.props,l=k.endpoint,m=k.endpointData;return c('React').createElement(c('UFIShareNowMenuBootloader.react'),{endpoint:l,endpointData:m,openOnInitOverride:false})};function j(){'use strict';h.apply(this,arguments)}f.exports=j}),null);
__d('TahoeSidePanePlaceholder.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_wxj _1-z7"},c('React').createElement('div',{className:"_1-z8"}),c('React').createElement('div',{className:"_1-za"}),c('React').createElement('div',{className:"_1-zb"}),c('React').createElement('div',{className:"_1-zf"}),c('React').createElement('div',{className:"_1-zg"}),c('React').createElement('div',{className:"_1-zh"}),c('React').createElement('div',{className:"_1-zi"}),c('React').createElement('div',{className:"_1-zj"}),c('React').createElement('div',{className:"_1-zk"}),c('React').createElement('div',{className:"_1-zl"}))};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('TahoeVideoFloatingReplayImage.react',['ix','cx','fbt','AbstractButton.react','Image.react','React','ReactDOM','VideoWebDriverIDs','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits(m,c('React').Component);l=k&&k.prototype;m.prototype.onMouseOut=function(n){'use strict';c('ReactDOM').findDOMNode(this.refs.button).blur()};m.prototype.render=function(){'use strict';var n=h("115482"),o=j._("Replay"),p=c('React').createElement(c('Image.react'),{className:"_ity",src:n});return c('React').createElement(c('AbstractButton.react'),{className:"_itz",'data-testid':c('VideoWebDriverIDs').PLAY_PAUSE_CONTROL,image:p,label:o,labelIsHidden:true,onClick:this.props.onClick,onMouseOut:this.onMouseOut.bind(this),ref:'button',type:'button'})};function m(){'use strict';k.apply(this,arguments)}f.exports=m}),null);
__d('TahoeVideoEndScreen',['cx','invariant','CSS','DOM','React','ReactDOM','TahoeEndScreenUpNextTile.react','TahoeVideoFloatingReplayImage.react','VideoChannelProgressCircle.react','VideoChannelReplayImage.react'],(function a(b,c,d,e,f,g,h,i){function j(k){'use strict';this.$TahoeVideoEndScreen1=k;this.$TahoeVideoEndScreen2=c('DOM').create('div',{className:"_1r-0 _2se8"})}j.prototype.showEndScreen=function(k,l,m,n){'use strict';k||i(0);c('CSS').addClass(k,"_1r-1");c('CSS').addClass(k,"_1s-2");k.appendChild(this.$TahoeVideoEndScreen2);if(l){this.$TahoeVideoEndScreen3(m||{},n)}else this.$TahoeVideoEndScreen4();};j.prototype.$TahoeVideoEndScreen4=function(){'use strict';c('ReactDOM').render(c('React').createElement('div',{className:"_1szy"},c('React').createElement(c('VideoChannelProgressCircle.react'),{makeProgress:false,timeoutSec:j.TIMEOUT},c('React').createElement(c('VideoChannelReplayImage.react'),{onClick:this.$TahoeVideoEndScreen1}))),this.$TahoeVideoEndScreen2)};j.prototype.$TahoeVideoEndScreen3=function(k,l){'use strict';c('ReactDOM').render(c('React').createElement('div',null,c('React').createElement(c('TahoeEndScreenUpNextTile.react'),{countdownTimeoutSec:j.TIMEOUT,onCountdownDone:function m(){l(false)},onPlayClick:function m(){l(true)},titleText:k.title,viewCount:k.viewCount,imageUrl:k.imgUrl,profileCard:k.profileCard,aspectRatio:k.aspectRatio}),c('React').createElement(c('TahoeVideoFloatingReplayImage.react'),{onClick:this.$TahoeVideoEndScreen1})),this.$TahoeVideoEndScreen2)};j.prototype.endCountdown=function(k){'use strict';k||i(0);c('CSS').removeClass(k,"_1s-2");c('CSS').removeClass(k,"_1r-1");c('ReactDOM').unmountComponentAtNode(this.$TahoeVideoEndScreen2)};j.TIMEOUT=3;f.exports=j}),null);
__d('TahoeView',['csx','cx','CSS','DOM','DOMQuery','Event','EventProfiler','Keys','SubscriptionsHandler','TabBar','Tahoe'],(function a(b,c,d,e,f,g,h,i){function j(k,l,m){'use strict';this.$TahoeView4=k;this.$TahoeView5=this.$TahoeView4.getID()}j.prototype.$TahoeView12=function(){'use strict';c('CSS').addClass(this.$TahoeView8,"_4f4w");c('DOM').empty(this.$TahoeView10)};j.prototype.$TahoeView13=function(){'use strict';c('CSS').removeClass(this.$TahoeView8,"_4f4w");if(this.$TahoeView11){var k=c('DOM').find(this.$TahoeView8,"._3dj6");c('CSS').removeClass(k,"_3dj6");c('DOM').setContent(k,c('DOM').find(this.$TahoeView6,"._3dj7"));c('EventProfiler').informManualInteractionTimestamp(['Tahoe'],true);this.$TahoeView11=false}};j.prototype.$TahoeView14=function(event){'use strict';if(event.keyCode===c('Keys').ESC&&!event.cancelBubble&&!event.defaultPrevented)this.$TahoeView4.onExit();};j.prototype.selectAddComment=function(){'use strict';var k=c('DOMQuery').scry(this.$TahoeView8,".UFIAddCommentInput");if(k[0]!=null)k[0].click();this.selectCommentTab()};j.prototype.selectCommentTab=function(){'use strict';var k=c('DOM').find(this.$TahoeView8,"._1rgu");c('CSS').addClass(k,"_601h");c('CSS').removeClass(k,"_601i")};j.prototype.selectUpNextTab=function(){'use strict';var k=c('DOM').find(this.$TahoeView8,"._1rgu");if(k!=null){c('CSS').addClass(k,"_601i");c('CSS').removeClass(k,"_601h")}};j.registerCommentLink=function(k){'use strict';var l=c('Tahoe').get();if(l)l.addEvent(c('Event').listen(k,'click',function(){return l.getView().selectAddComment()}));};f.exports=j}),null);
__d("XTahoeAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/tahoe\/async\/{id}\/",{id:{type:"FBID",required:true},chain:{type:"Bool",defaultValue:false},isvideo:{type:"Bool",defaultValue:false},sponsoreddata:{type:"String"},originalmediaid:{type:"String"},preload:{type:"Bool",defaultValue:false},playerorigin:{type:"Enum",enumType:1},playersuborigin:{type:"String"},reactionvideochanneltype:{type:"Enum",enumType:1}})}),null);
__d("XTahoeUpNextAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/tahoe\/upnext\/async\/{media_id}\/",{channel_id:{type:"String"},media_id:{type:"FBID",required:true},viewed_videos:{type:"FBIDSet"},caller:{type:"Enum",enumType:1},chainingindex:{type:"Int"},cursor:{type:"String"}})}),null);
__d('TahoeVideoView',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','DOMQuery','Event','EventProfiler','HTML','Keys','React','ReactDOM','Set','SubscriptionsHandler','TabBar','Tahoe','TahoeSidePanePlaceholder.react','TahoeView','TahoeVariables','TahoeVideoEndScreen','TimeSlice','URI','VideoChannelEndScreen','VideoPermalinkURI','VideoPlayerReason','VideoPlayerStates','XTahoeAsyncController','XTahoeUpNextAsyncController','ge'],(function a(b,c,d,e,f,g,h,i){var j,k,l='tahoe-preloaded-video';j=babelHelpers.inherits(m,c('TahoeView'));k=j&&j.prototype;function m(n,o,p){'use strict';k.constructor.call(this,n,o,p);this.$TahoeVideoView6=n;this.$TahoeVideoView9=this.$TahoeVideoView6.getID();this.$TahoeVideoView17=o;this.$TahoeVideoView18=p;this.$TahoeVideoView16=new (c('Set'))([this.$TahoeVideoView9]);this.$TahoeVideoView15=false;this.$TahoeVideoView6.addEvent(c('Event').listen(document,'keydown',this.$TahoeVideoView19.bind(this)));this.$TahoeVideoView14=c('CSS').setClass(c('DOM').create('div'),"_1e8c _2b-0");this.$TahoeVideoView12=c('CSS').setClass(c('DOM').create('div'),"_5-lm");if(c('TahoeVariables').useWiderSidePane){c('CSS').addClass(this.$TahoeVideoView12,"_2g3m");c('CSS').addClass(this.$TahoeVideoView12,"_2g3n")}this.$TahoeVideoView5=c('CSS').setClass(c('DOM').create('div'),"_17am");this.$TahoeVideoView10=c('CSS').setClass(c('DOM').create('div'),"hidden_elem");c('ReactDOM').render(c('React').createElement(c('TahoeSidePanePlaceholder.react'),null),this.$TahoeVideoView12);c('DOM').appendContent(this.$TahoeVideoView6.getContent(),this.$TahoeVideoView14);c('DOM').appendContent(this.$TahoeVideoView6.getContent(),this.$TahoeVideoView12);c('DOM').appendContent(this.$TahoeVideoView12,this.$TahoeVideoView5);c('DOM').appendContent(this.$TahoeVideoView6.getContent(),this.$TahoeVideoView10);var q=this.$TahoeVideoView6.getChannelID(),r=this.$TahoeVideoView6.getCaller();if(this.$TahoeVideoView6.getMediaController()){this.$TahoeVideoView20(this.$TahoeVideoView6.getID(),false,q,r);this.setUpEndScreen();this.setUpUFI()}else this.updateView(this.$TahoeVideoView6.getID(),q,r);this.$TahoeVideoView1=new (c('SubscriptionsHandler'))();this.$TahoeVideoView1.addSubscriptions(c('Arbiter').subscribe('layer_shown',this.$TahoeVideoView21.bind(this)),c('Arbiter').subscribe('UFIAddComment/focus',this.selectCommentTab.bind(this)))}m.prototype.$TahoeVideoView21=function(n,o){'use strict';if(o.type==='DialogX'||o.type==='PhotoSnowlift'){var p=this.$TahoeVideoView6.getMediaController(),q=this.$TahoeVideoView7,r=p,s=this.$TahoeVideoView8;if(r.isState(c('VideoPlayerStates').FINISHED)&&(q||s)){var t=p.getRootNode();if(q){q.endCountdown(t);q.showEndScreen(t,false,function(){})}else if(s){s.endCountdown(t);s.showEndScreen(t,false,{},function(){})}}}};m.prototype.setUpUFI=function(){'use strict';var n=this.$TahoeVideoView6.getMediaController();if(n){this.$TahoeVideoView6.addEvent(n.addListener('commercialBreak/hideUFI',function(){return this.$TahoeVideoView22(true)}.bind(this)));this.$TahoeVideoView6.addEvent(n.addListener('commercialBreak/showUFI',function(){return this.$TahoeVideoView22(false)}.bind(this)))}};m.prototype.$TahoeVideoView22=function(n){'use strict';c('CSS').conditionClass(this.$TahoeVideoView5,"_17an",n);c('CSS').conditionClass(this.$TahoeVideoView14,"_3qt9",n)};m.prototype.setUpEndScreen=function(){'use strict';var n=this.$TahoeVideoView6.getMediaController(),o=n;if(n.isLiveVideo()){this.$TahoeVideoView7=null;this.$TahoeVideoView8=null;return}if(c('TahoeVariables').useTahoeEndScreen){this.$TahoeVideoView8=new (c('TahoeVideoEndScreen'))(function(){var p=this.$TahoeVideoView8;p&&p.endCountdown(n.getRootNode());var q=c('DOMQuery').scry(n.getRootNode(),"._35sk")[0];if(q)c('CSS').show(q);o.play(c('VideoPlayerReason').USER)}.bind(this))}else this.$TahoeVideoView7=new (c('VideoChannelEndScreen'))(function(){var p=this.$TahoeVideoView7;p&&p.endCountdown(n.getRootNode());o.play(c('VideoPlayerReason').USER);var q=c('DOMQuery').scry(n.getRootNode(),"._35sk")[0];if(q)c('CSS').show(q);}.bind(this));this.$TahoeVideoView6.addEvent(n.addListener('stateChange',this.$TahoeVideoView23.bind(this)));this.$TahoeVideoView6.addEvent(n.addListener('toggleFullscreen',this.$TahoeVideoView23.bind(this)))};m.prototype.$TahoeVideoView23=function(){'use strict';var n=this.$TahoeVideoView6.getMediaController(),o=this.$TahoeVideoView7,p=this.$TahoeVideoView8,q=n;if(q.isState(c('VideoPlayerStates').FINISHED)&&!q.isFullscreen()&&(o||p)){if(o){o.showEndScreen(n.getRootNode(),!!this.$TahoeVideoView3,function(){this.$TahoeVideoView6.setPlayReason(c('VideoPlayerReason').AUTOPLAY);if(this.$TahoeVideoView3)this.$TahoeVideoView6.go(this.$TahoeVideoView3);o.endCountdown(n.getRootNode())}.bind(this))}else if(p)p.showEndScreen(n.getRootNode(),!!this.$TahoeVideoView3,this.$TahoeVideoView2||{},function(s){this.$TahoeVideoView6.setPlayReason(s?c('VideoPlayerReason').USER:c('VideoPlayerReason').AUTOPLAY);if(this.$TahoeVideoView3)this.$TahoeVideoView6.go(this.$TahoeVideoView3);p.endCountdown(n.getRootNode())}.bind(this));var r=c('DOMQuery').scry(n.getRootNode(),"._35sk")[0];if(r)c('CSS').hide(r);}};m.prototype.$TahoeVideoView24=function(){'use strict';c('CSS').addClass(this.$TahoeVideoView12,"_4f4w");c('DOM').empty(this.$TahoeVideoView14)};m.prototype.$TahoeVideoView25=function(){'use strict';c('CSS').removeClass(this.$TahoeVideoView12,"_4f4w");if(this.$TahoeVideoView15){var n=c('DOMQuery').find(this.$TahoeVideoView12,"._3dj6");n=c('CSS').removeClass(n,"_3dj6");var o=c('DOM').find(this.$TahoeVideoView10,"._3dj7");c('DOM').setContent(n,o);c('EventProfiler').informManualInteractionTimestamp(['Tahoe'],true);this.$TahoeVideoView15=false;if(o.firstChild)this.$TahoeVideoView26(o.firstChild,function(){c('TimeSlice').guard(this.$TahoeVideoView27.bind(this),'Tahoe preload next video',{isContinuation:false})()}.bind(this));}};m.prototype.$TahoeVideoView19=function(n){'use strict';if(n.keyCode===c('Keys').ESC&&!n.cancelBubble&&!n.defaultPrevented)this.$TahoeVideoView6.onExit();};m.prototype.$TahoeVideoView28=function(n,o,p,q){'use strict';var r=this.$TahoeVideoView29(n,p,q);r&&r.send();var s=c('DOMQuery').scry(this.$TahoeVideoView6.getContent(),"._1c_u"),t=c('DOMQuery').scry(this.$TahoeVideoView12,"._1rgu");if(s[0])c('DOM').replace(s[0],c('DOMQuery').scry(o,"._5-yb")[0]);c('DOM').setContent(this.$TahoeVideoView14,c('DOMQuery').find(o,"._1w6j"));if(t[0]){c('DOM').replace(t[0],c('DOMQuery').find(o,"._1rgu"))}else c('DOM').appendContent(this.$TahoeVideoView12,c('DOMQuery').find(o,"._1rgu"));m.registerPendingController(this.$TahoeVideoView11);this.$TahoeVideoView25()};m.prototype.$TahoeVideoView20=function(n,o,p,q,r){'use strict';this.$TahoeVideoView3=null;this.$TahoeVideoView2=null;var s=c('XTahoeAsyncController').getURIBuilder().setFBID('id',n).setBool('chain',o).setBool('isvideo',true).setString('originalmediaid',this.$TahoeVideoView9).setEnum('playerorigin',this.$TahoeVideoView17).setString('playersuborigin',this.$TahoeVideoView18).setString('sponsoreddata',r).setEnum('reactionvideochanneltype',this.$TahoeVideoView6.getReactionVideoChannelType()),t=new (c('AsyncRequest'))(s.getURI()).setHandler(function(v){var w=v.getPayload();if(o){var x=c('DOMQuery').scry(this.$TahoeVideoView6.getContent(),"._1c_u"),y=c('DOMQuery').scry(this.$TahoeVideoView12,"._1rgu");if(x[0])c('DOM').replace(x[0],c('HTML').replaceJSONWrapper(w.video.markup));c('DOM').setContent(this.$TahoeVideoView14,c('HTML').replaceJSONWrapper(w.ufiTray.markup));if(y[0]){c('DOM').replace(y[0],c('HTML').replaceJSONWrapper(w.sidePane.markup))}else c('DOM').appendContent(this.$TahoeVideoView12,c('HTML').replaceJSONWrapper(w.sidePane.markup));}else{c('DOM').appendContent(this.$TahoeVideoView14,c('HTML').replaceJSONWrapper(w.ufiTray.markup));c('DOM').appendContent(this.$TahoeVideoView12,c('HTML').replaceJSONWrapper(w.sidePane.markup))}this.$TahoeVideoView25();c('EventProfiler').informManualInteractionTimestamp(['Tahoe'],true)}.bind(this)),u=this.$TahoeVideoView29(n,p,q);t.send();u&&u.send();this.$TahoeVideoView24()};m.prototype.$TahoeVideoView26=function(n,o){'use strict';var p=c('DOMQuery').scry(n,'a')[0],q=c('DOMQuery').scry(n,"._fh9")[0];if(p){this.$TahoeVideoView3=p.getAttribute('href');this.$TahoeVideoView2={title:n.getAttribute('data-full-title')||'',imgUrl:n.getAttribute('data-up-next-image')||'',viewCount:n.getAttribute('data-view-count')||'',aspectRatio:parseFloat(n.getAttribute('data-aspect-ratio')),profileCard:q?q.cloneNode(true):undefined};o&&o()}};m.prototype.$TahoeVideoView29=function(n,o,p){'use strict';var q=c('ge')('video-up-next-'+n);if(q){var r=q.parentNode,s=Array.from(r.children);s.some(function(v){if(v.id!=='video-up-next-'+n){c('DOM').remove(v);return false}else return true;});c('DOM').remove(r.firstChild);c('DOM').appendContent(this.$TahoeVideoView10,r);if(r.children.length>=10){this.$TahoeVideoView15=true;return null}}else if(!q&&n!==this.$TahoeVideoView9){this.$TahoeVideoView6.resetChannelData();this.$TahoeVideoView4=null;o=null;p=null}var t=c('XTahoeUpNextAsyncController').getURIBuilder().setFBID('media_id',n).setFBIDSet('viewed_videos',Array.from(this.$TahoeVideoView16)).setString('channel_id',o).setEnum('caller',p).setString('cursor',this.$TahoeVideoView4),u=new (c('AsyncRequest'))(t.getURI()).setHandler(function(v){var w,x=this,y=v.getPayload();this.$TahoeVideoView4=y.chainingCursor;var z=c('HTML').replaceJSONWrapper(y.upNextUnit.markup);this.$TahoeVideoView15=true;var aa=c('DOMQuery').scry(this.$TahoeVideoView12,"._3dj6"),ba=c('DOMQuery').scry(this.$TahoeVideoView10,"._3dj7");if(ba[0])(function(){c('DOM').appendContent(x.$TahoeVideoView10,z);ba=c('DOMQuery').scry(x.$TahoeVideoView10,"._3dj7");var da=Array.from(ba[1].children);da.forEach(function(fa){c('DOM').appendContent(ba[0],fa)});c('DOM').remove(ba[1]);z=ba[0];var ea={};Array.from(z.children).forEach(function(fa){if(ea[fa.id]){c('DOM').remove(fa)}else ea[fa.id]=true;});c('DOM').remove(ba[0])})();if(aa[0]){aa=c('CSS').removeClass(aa[0],"_3dj6");c('DOM').setContent(aa,z);this.$TahoeVideoView15=false}else c('DOM').appendContent(this.$TahoeVideoView10,z);var ca=c('DOMQuery').scry(this.$TahoeVideoView12,"._bne");c('EventProfiler').informManualInteractionTimestamp(['Tahoe'],true);if(ca[0])this.$TahoeVideoView26(ca[0],function(){c('TimeSlice').guard(this.$TahoeVideoView27.bind(this),'Tahoe preload next video',{isContinuation:false})()}.bind(this));}.bind(this));return u};m.prototype.$TahoeVideoView27=function(){'use strict';var n=new (c('URI'))(this.$TahoeVideoView3),o=c('VideoPermalinkURI').parse(n).video_id;if(!o)return;var p=n.getQueryData().sp,q=c('XTahoeAsyncController').getURIBuilder().setFBID('id',o).setBool('chain',true).setBool('isvideo',true).setString('originalmediaid',this.$TahoeVideoView9).setBool('preload',true).setEnum('playerorigin',this.$TahoeVideoView17).setString('playersuborigin',this.$TahoeVideoView18).setString('sponsoreddata',p).setEnum('reactionvideochanneltype',this.$TahoeVideoView6.getReactionVideoChannelType()),r=new (c('AsyncRequest'))(q.getURI()).setHandler(function(s){var t=s.getPayload(),u=c('DOM').create('div',{id:'preload-'+o,'class':l});c('DOM').appendContent(u,c('HTML').replaceJSONWrapper(t.video.markup));c('DOM').appendContent(u,c('HTML').replaceJSONWrapper(t.ufiTray.markup));c('DOM').appendContent(u,c('HTML').replaceJSONWrapper(t.sidePane.markup));c('DOM').appendContent(this.$TahoeVideoView10,u)}.bind(this));r.send()};m.prototype.selectAddComment=function(){'use strict';var n=c('DOMQuery').scry(this.$TahoeVideoView12,".UFIAddCommentInput");n[0]&&n[0].click();this.selectCommentTab()};m.prototype.selectCommentTab=function(){'use strict';var n=c('DOMQuery').scry(this.$TahoeVideoView12,"._1rgu")[0];c('CSS').addClass(n,"_601h");c('CSS').removeClass(n,"_601i")};m.prototype.selectUpNextTab=function(){'use strict';var n=c('DOMQuery').scry(this.$TahoeVideoView12,"._1rgu")[0];if(n){c('CSS').addClass(n,"_601i");c('CSS').removeClass(n,"_601h")}};m.prototype.updateView=function(n,o,p){var q=arguments.length<=3||arguments[3]===undefined?null:arguments[3];'use strict';this.$TahoeVideoView16.add(n);var r=c('DOMQuery').scry(this.$TahoeVideoView10,'#preload-'+n);if(r[0]&&this.$TahoeVideoView11){this.$TahoeVideoView28(n,r[0],o,p);this.$TahoeVideoView30()}else{this.$TahoeVideoView30();this.$TahoeVideoView20(n,true,o,p,q)}};m.prototype.$TahoeVideoView30=function(){'use strict';this.$TahoeVideoView11=null;var n=c('DOMQuery').scry(this.$TahoeVideoView10,'.'+l);Array.from(n).forEach(function(o){c('DOM').remove(o)})};m.prototype.onExit=function(){'use strict';this.$TahoeVideoView7&&this.$TahoeVideoView7.endCountdown(this.$TahoeVideoView6.getMediaController().getRootNode());this.$TahoeVideoView8&&this.$TahoeVideoView8.endCountdown(this.$TahoeVideoView6.getMediaController().getRootNode());this.$TahoeVideoView1.release()};m.registerCommentLink=function(n){'use strict';k.registerCommentLink.call(this,n)};m.registerPendingController=function(n){'use strict';var o=c('Tahoe').get();if(o&&n)o.updateMedia(n);};m.registerPreloadController=function(n){'use strict';var o=c('Tahoe').get();if(o)o.getView().$TahoeVideoView11=n;};m.registerSidepaneTabbar=function(n){var o;'use strict';var p=c('Tahoe').get();if(p!=null)(function(){var q=p.getView();if(q instanceof m)n.subscribe(c('TabBar').TAB_CLICK,function(r,s){switch(s){case 'up-next':q.selectUpNextTab();break;case 'comments':q.selectCommentTab();}});})();};m.loadView=function(n,o,p){'use strict';return new m(n,o,p)};f.exports=m}),null);