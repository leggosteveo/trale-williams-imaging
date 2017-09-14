if (self.CavalryLogger) { CavalryLogger.start_js(["1y5Je"]); }

__d('ClickPointIdentifiersDEPRECATED',[],(function a(b,c,d,e,f,g){var h={types:{TIMELINE_SEE_LIKERS:'timeline:seelikes'},getUserActionID:function i(j){return '{"ua_id":"'+j+'"}'}};f.exports=h}),null);
__d('UFISubscribeLink.react',['fbt','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props.subscribeAction?h._("Turn On Notifications"):h._("Turn Off Notifications"),n=this.props.subscribeAction?h._("Get a notification whenever someone comments."):h._("Stop getting notifications when someone comments.");return c('React').createElement('a',{className:'UFISubscribeLink',href:'#',role:'button','aria-live':'polite',title:n,onClick:this.props.onClick},m)};function l(){i.apply(this,arguments)}l.propTypes={subscribeAction:k.bool,onClick:k.func};f.exports=l}),null);
__d('UFITimelineBlingBox.react',['cx','fbt','ProfileBrowserLink','ProfileBrowserTypes','React','UFIBlingItem.react','URI'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){var n=[];if(this.props.likes&&this.props.enableShowLikes){var o=this.$UFITimelineBlingBox1(),p=i._("See who likes this"),q=c('React').createElement('a',{ajaxify:o.dialog,className:this.$UFITimelineBlingBox2(n),'data-ft':this.props['data-ft'],'data-gt':this.props['data-gt'],'data-hover':'tooltip','data-tooltip-alignh':'right','data-tooltip-uri':this.$UFITimelineBlingBox3(),href:o.page,key:'like',rel:'dialog',role:'button',title:p},c('React').createElement(c('UFIBlingItem.react'),{count:this.props.likes,countreduced:this.props.likesreduced,iconClassName:'UFIBlingBoxTimelineLikeIcon',itemKey:'like'}));n.push(q)}if(this.props.comments&&this.props.enableShowComments){var r=i._("Show comments"),s=c('React').createElement('a',{'aria-label':r,className:this.$UFITimelineBlingBox2(n),'data-ft':this.props['data-ft'],'data-hover':'tooltip','data-tooltip-alignh':'right','data-tooltip-content':r,href:'#',key:'comment',onClick:this.props.commentOnClick},c('React').createElement(c('UFIBlingItem.react'),{count:this.props.comments||0,countreduced:this.props.commentsreduced,iconClassName:'UFIBlingBoxTimelineCommentIcon',itemKey:'comment'}));n.push(s)}if(this.props.reshares){var t=i._("Show shares"),u=this.$UFITimelineBlingBox4(),v=c('React').createElement('a',{ajaxify:u.dialog,'aria-label':t,className:this.$UFITimelineBlingBox2(n),'data-ft':this.props['data-ft'],'data-hover':'tooltip','data-tooltip-alignh':'right','data-tooltip-content':t,href:u.page,key:'reshare',rel:'async'},c('React').createElement(c('UFIBlingItem.react'),{contextArgs:this.props.contextArgs,count:this.props.reshares,countreduced:this.props.resharesreduced,iconClassName:'UFIBlingBoxTimelineReshareIcon',itemKey:'reshare'}));n.push(v)}return c('React').createElement('span',null,n)};m.prototype.$UFITimelineBlingBox2=function(n){return (n.length>0?"mls":'')+(' '+"UFIBlingBoxTimelineItem")};m.prototype.$UFITimelineBlingBox3=function(){if(this.props.feedbackFBID){var n=new (c('URI'))('/ajax/like/tooltip.php').setQueryData({comment_fbid:this.props.feedbackFBID});return n.toString()}else return null;};m.prototype.$UFITimelineBlingBox1=function(){if(this.props.feedbackFBID){var n=c('ProfileBrowserTypes').LIKES,o={id:this.props.feedbackFBID,actorid:this.props.actorid},p=c('ProfileBrowserLink').constructDialogURI(n,o),q=c('ProfileBrowserLink').constructPageURI(n,o);return {dialog:p.toString(),page:q.toString()}}return {dialog:null,page:null}};m.prototype.$UFITimelineBlingBox4=function(){if(this.props.feedbackFBID){var n=new (c('URI'))('/ajax/shares/view').setQueryData({target_fbid:this.props.feedbackFBID}),o=new (c('URI'))('/shares/view').setSubdomain('www').setQueryData({id:this.props.feedbackFBID});return {dialog:n.toString(),page:o.toString()}}return {dialog:null,page:null}};function m(){j.apply(this,arguments)}m.propTypes={contextArgs:l.object.isRequired,'data-ft':l.string,'data-gt':l.string,actorid:l.any,commentOnClick:l.func,comments:l.number,commentsreduced:l.string,enableShowComments:l.bool,enableShowLikes:l.bool,feedbackFBID:l.any,likes:l.number,likesreduced:l.string,reshares:l.number,resharesreduced:l.string};f.exports=m}),null);
__d('UFIActionLinkController',['cx','Arbiter','BootloadedComponent.react','ClickPointIdentifiersDEPRECATED','CommentPrelude','CSS','DataStore','DOM','DOMQuery','JSResource','Parent','React','ReactDOM','TrackingNodes','UFIAsyncWrapper','UFIBling.react','UFICentralUpdates','UFICommentActionLink.react','UFIConstants','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackTargets','UFIInstanceAction','UFILikeActionLink.react','UFIPrivateReplyLink.react','UFIReactionStore','UFIShareActionLink.react','UFISharedDispatcher','UFISubscribeLink.react','UFITimelineBlingBox.react','UFIToplevelPagedCommentList','UFIUserActions'],(function a(b,c,d,e,f,g,h){'use strict';function i(k,l,m){var n,o=c('DOMQuery').scry(k,l)[0];if(o){var p=document.createElement('span');o.parentNode.replaceChild(p,o);p.appendChild(o);if(typeof m==='function')m(p);}else (function(){var q=c('Arbiter').subscribe('PhotoSnowlift.DATA_CHANGE',function(){c('Arbiter').unsubscribe(q);i(k,l,m)},c('Arbiter').SUBSCRIBE_NEW)})();}function j(k,l,m){this.$UFIActionLinkController19=k;this.$UFIActionLinkController5=l;this.$UFIActionLinkController10=m.targetfbid;this.$UFIActionLinkController12=this.$UFIActionLinkController26();this.$UFIActionLinkController7=new (c('UFIDispatcher'))();this.$UFIActionLinkController24={UFIReactionStore:new (c('UFIReactionStore'))(this.$UFIActionLinkController7)};if(this.$UFIActionLinkController12){this.$UFIActionLinkController27()}else this.$UFIActionLinkController28();if(m.viewercanlike||m.hasviewerliked)this.$UFIActionLinkController29();if(m.cancomment)this.$UFIActionLinkController30();if(m.viewercansubscribetopost)this.$UFIActionLinkController31();this.$UFIActionLinkController32();this.$UFIActionLinkController33();this.$UFIActionLinkController34();this.$UFIActionLinkController35();c('UFICentralUpdates').subscribe('feedback-updated',function(n,o){var p=o.updates;if(l.ftentidentifier in p)this.render();}.bind(this));this.render()}j.prototype.$UFIActionLinkController28=function(){i(this.$UFIActionLinkController19,'^form .uiBlingBox',function(k){this.$UFIActionLinkController2=k;if(this.$UFIActionLinkController6)this.$UFIActionLinkController36();}.bind(this))};j.prototype.$UFIActionLinkController27=function(){var k=c('DOMQuery').scry(this.$UFIActionLinkController19,'^form .fbTimelineFeedbackActions .UFIBlingBoxTimeline')[0];if(k){var l=c('DOMQuery').scry(k,'.fbTimelineFeedbackLikes')[0];this.$UFIActionLinkController9=!!l;var m=c('DOMQuery').scry(k,'.fbTimelineFeedbackComments')[0];this.$UFIActionLinkController8=!!m}this.$UFIActionLinkController3=k;if(this.$UFIActionLinkController6)this.$UFIActionLinkController37();};j.prototype.$UFIActionLinkController34=function(){i(this.$UFIActionLinkController19,'^form .inline_feedback',function(k){this.$UFIActionLinkController11=k;if(this.$UFIActionLinkController38)this.$UFIActionLinkController39();}.bind(this))};j.prototype.$UFIActionLinkController35=function(){i(this.$UFIActionLinkController19,'^form .actor_selector',function(k){this.$UFIActionLinkController1=k;if(this.$UFIActionLinkController38)this.$UFIActionLinkController40();}.bind(this))};j.prototype.$UFIActionLinkController29=function(){i(this.$UFIActionLinkController19,'^form .like_link',function(k){this.$UFIActionLinkController13=k;if(this.$UFIActionLinkController6)this.$UFIActionLinkController41();}.bind(this))};j.prototype.$UFIActionLinkController30=function(){i(this.$UFIActionLinkController19,'^form .comment_link',function(k){this.$UFIActionLinkController4=k;if(this.$UFIActionLinkController6)this.$UFIActionLinkController42();}.bind(this))};j.prototype.$UFIActionLinkController31=function(){i(this.$UFIActionLinkController19,'^form .unsub_link',function(k){this.$UFIActionLinkController25=k;if(this.$UFIActionLinkController6)this.$UFIActionLinkController43();}.bind(this))};j.prototype.$UFIActionLinkController33=function(){i(this.$UFIActionLinkController19,'^form .message_reply_action_link',function(k){this.$UFIActionLinkController15=k;if(this.$UFIActionLinkController15&&this.$UFIActionLinkController15.previousSibling&&this.$UFIActionLinkController15.previousSibling.nodeType===3&&this.$UFIActionLinkController15.previousSibling instanceof Text){this.$UFIActionLinkController16=this.$UFIActionLinkController15.previousSibling;this.$UFIActionLinkController17=this.$UFIActionLinkController16.data}if(this.$UFIActionLinkController6)this.$UFIActionLinkController44();}.bind(this))};j.prototype.$UFIActionLinkController32=function(){i(this.$UFIActionLinkController19,'^form .share_action_link',function(k){this.$UFIActionLinkController21=k;c('CSS').addClass(this.$UFIActionLinkController21,"share_root");var l=c('DOMQuery').scry(this.$UFIActionLinkController21,'.share_action_link')[0];if(l){this.$UFIActionLinkController23=l.getAttribute('href');this.$UFIActionLinkController22=l.getAttribute('rel');this.$UFIActionLinkController20=c('DataStore').get(l,'share-now-menu-uri');this.$UFIActionLinkController18=c('DataStore').get(l,'misinformation-confirm-dialog-uri')}if(this.$UFIActionLinkController6)this.$UFIActionLinkController45();}.bind(this))};j.prototype.render=function(){this.$UFIActionLinkController6=true;if(this.$UFIActionLinkController12){this.$UFIActionLinkController37()}else this.$UFIActionLinkController36();this.$UFIActionLinkController41();this.$UFIActionLinkController42();this.$UFIActionLinkController43();this.$UFIActionLinkController45();this.$UFIActionLinkController44();this.$UFIActionLinkController39();this.$UFIActionLinkController40()};j.prototype.$UFIActionLinkController36=function(){if(this.$UFIActionLinkController2)c('UFIFeedbackTargets').getFeedbackTarget(this.$UFIActionLinkController5.ftentidentifier,function(k){c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIActionLinkController7,stores:this.$UFIActionLinkController24},this.getBling(k))),this.$UFIActionLinkController2)}.bind(this));};j.prototype.getBling=function(k){return c('React').createElement(c('UFIBling.react'),{contextArgs:this.$UFIActionLinkController5,feedbackTarget:k,onCommentVisibilityChanged:function(){return c('UFISharedDispatcher').dispatch(c('UFIInstanceAction').toggleComments(this.$UFIActionLinkController5))}.bind(this)})};j.prototype.$UFIActionLinkController37=function(){if(this.$UFIActionLinkController3)c('UFIFeedbackTargets').getFeedbackTarget(this.$UFIActionLinkController5.ftentidentifier,function(k){c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,this.getTimelineBling(k)),this.$UFIActionLinkController3)}.bind(this));};j.prototype.getTimelineBling=function(k){var l=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.BLINGBOX),m=c('ClickPointIdentifiersDEPRECATED').getUserActionID(c('ClickPointIdentifiersDEPRECATED').types.TIMELINE_SEE_LIKERS),n=function p(event){var q=c('Parent').byTag(event.target,'form');c('CommentPrelude').uncollapse(q,'action_link_timeline_bling');var r=c('DOMQuery').scry(q,'a.UFIPagerLink');if(r.length)r[0].click();event.preventDefault()},o=c('UFIToplevelPagedCommentList').getDisplayedCommentCountForFeedbackTargetID_UNSAFE(this.$UFIActionLinkController5.ftentidentifier);return c('React').createElement(c('UFITimelineBlingBox.react'),{comments:o,commentsreduced:k.commentcountreduced,commentOnClick:n,contextArgs:this.$UFIActionLinkController5,'data-ft':l,'data-gt':m,enableShowComments:this.$UFIActionLinkController8,enableShowLikes:this.$UFIActionLinkController9,feedbackFBID:this.$UFIActionLinkController10,likes:k.likecount,likesreduced:k.likecountreduced,reshares:k.sharecount,resharesreduced:k.sharecountreduced,actorid:k.actorid})};j.prototype.$UFIActionLinkController39=function(){if(this.$UFIActionLinkController11)c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,this.getInlineSearchFeedback()),this.$UFIActionLinkController11);};j.prototype.getInlineSearchFeedback=function(){return c('React').createElement('div',null,c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadPlaceholder:c('React').createElement('div',null),bootloadLoader:c('JSResource')('InlineFeedback.react').__setRef('UFIActionLinkController')},this.$UFIActionLinkController5.inlineSearchFeedbackConfig)))};j.prototype.$UFIActionLinkController40=function(){if(this.$UFIActionLinkController46)c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,this.getActorSelector()),this.$UFIActionLinkController1);};j.prototype.getActorSelector=function(){var k=this.$UFIActionLinkController5.actorSelectorConfig;if(!k)return null;var l=k.module,m=k.props;m.nuxHoverContext=c('Parent').byTag(event.target,'form');return c('React').createElement(l,m)};j.prototype.$UFIActionLinkController41=function(){if(this.$UFIActionLinkController13)c('UFIFeedbackTargets').getFeedbackTarget(this.$UFIActionLinkController5.ftentidentifier,function(k){c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIActionLinkController7,stores:this.$UFIActionLinkController24},this.getLike(k))),this.$UFIActionLinkController13)}.bind(this));};j.prototype.getLike=function(k){return c('React').createElement(c('UFILikeActionLink.react'),{feedback:k,contextArgs:this.$UFIActionLinkController5})};j.prototype.$UFIActionLinkController42=function(){if(this.$UFIActionLinkController4)c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,this.getComment()),this.$UFIActionLinkController4);};j.prototype.getComment=function(){return c('React').createElement(c('UFICommentActionLink.react'),{contextArgs:this.$UFIActionLinkController5})};j.prototype.$UFIActionLinkController44=function(){if(this.$UFIActionLinkController15)c('UFIFeedbackTargets').getFeedbackTarget(this.$UFIActionLinkController5.ftentidentifier,function(k){this.$UFIActionLinkController14=null;var l=this.getMessageReply(k);if(l)c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,l),this.$UFIActionLinkController15);if(!this.$UFIActionLinkController14||!c('ReactDOM').findDOMNode(this.$UFIActionLinkController14)){if(this.$UFIActionLinkController16)this.$UFIActionLinkController16.data='';c('DOM').setContent(this.$UFIActionLinkController15,null);return}if(this.$UFIActionLinkController16)this.$UFIActionLinkController16.data=this.$UFIActionLinkController17;}.bind(this));};j.prototype.getMessageReply=function(k){if(k.messagereplycontext)return c('React').createElement(c('UFIPrivateReplyLink.react'),{ref:function(l){return this.$UFIActionLinkController14=l}.bind(this),actorID:k.actorforpost,activityID:this.$UFIActionLinkController5.ftentidentifier,context:k.messagereplycontext,seeResponseLabel:false});return null};j.prototype.$UFIActionLinkController43=function(){if(this.$UFIActionLinkController25)c('UFIFeedbackTargets').getFeedbackTarget(this.$UFIActionLinkController5.ftentidentifier,function(k){c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,this.getSubscribe(k)),this.$UFIActionLinkController25)}.bind(this));};j.prototype.getSubscribe=function(k){var l=!k.hasviewersubscribed,m=function(event){if(event.target instanceof Element)c('UFIUserActions').changeSubscribe(this.$UFIActionLinkController5.ftentidentifier,l,{source:this.$UFIActionLinkController5.source,target:event.target,rootid:this.$UFIActionLinkController5.rootid,commentexpandmode:k.commentexpandmode});event.preventDefault()}.bind(this);return c('React').createElement(c('UFISubscribeLink.react'),{onClick:m,subscribeAction:l})};j.prototype.$UFIActionLinkController45=function(){if(this.$UFIActionLinkController21&&this.$UFIActionLinkController23)c('UFIFeedbackTargets').getFeedbackTarget(this.$UFIActionLinkController5.ftentidentifier,function(k){c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,this.getShare(k)),this.$UFIActionLinkController21)}.bind(this));};j.prototype.getShare=function(k){return c('React').createElement(c('UFIShareActionLink.react'),{feedbackTarget:k,ufiInstanceID:this.$UFIActionLinkController5.instanceid,shareURI:this.$UFIActionLinkController23,shareRel:this.$UFIActionLinkController22,shareNowMenuURI:this.$UFIActionLinkController20,misinformationConfirmDialogURI:this.$UFIActionLinkController18})};j.prototype.$UFIActionLinkController26=function(){if(this.$UFIActionLinkController5.source===c('UFIConstants').UFIFeedbackSourceType.PROFILE){var k=c('DOMQuery').scry(this.$UFIActionLinkController19,'^form .fbTimelineFeedbackActions .UFIBlingBoxTimeline');return k.length>0}return false};f.exports=j}),null);