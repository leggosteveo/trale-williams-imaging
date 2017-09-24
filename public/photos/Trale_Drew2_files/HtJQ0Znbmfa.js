if (self.CavalryLogger) { CavalryLogger.start_js(["Goo\/Q"]); }

__d('MercuryChatTabPagesGreetingContainer.react',['cx','ix','Grid.react','Image.react','MercuryMessages','PagesMessagingMercuryChatTabActions','PagesMessagingMercuryChatTabStore','React','StoreAndPropBasedStateMixin','fbglyph'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('Grid.react').GridItem,k=c('React').PropTypes,l=c('React').createClass({displayName:'MercuryChatTabPagesGreetingContainer',propTypes:{threadID:k.string.isRequired},mixins:[c('StoreAndPropBasedStateMixin')(c('MercuryMessages'),c('PagesMessagingMercuryChatTabStore'))],statics:{calculateState:function m(n){var o=c('MercuryMessages').get().getCurrentlyLoadedMessages(n.threadID);if(o&&o.length>0)return {greetingMessage:null,shouldShowGreetingMessage:false,pageResponsiveness:null,connectionContext:null,pageOnlineMessage:null};var p=c('PagesMessagingMercuryChatTabStore').getStateByThread(n.threadID);return {shouldShowGreetingMessage:p.pagesGreetingShouldShow&&p.pagesGreetingContent&&p.pagesGreetingContent.length>0,greetingMessage:p.pagesGreetingContent,pageResponsiveness:p.pageResponsiveness,connectionContext:p.connectionContext,pageOnlineMessage:p.pageOnlineMessage}}},componentDidMount:function m(){c('PagesMessagingMercuryChatTabActions').requestGreetingConfig(this.props.threadID)},render:function m(){return c('React').createElement(c('Grid.react'),{alignv:'top',className:"_5-5-",cols:2,spacing:"_253f"},this._renderTopRow(),this._renderSubRow())},_renderTopRow:function m(){if(this.state.pageOnlineMessage)return this._renderOnlineMessage();if(this.state.pageResponsiveness)return this._renderPageResponsiveness();return null},_renderSubRow:function m(){if(this.state.shouldShowGreetingMessage)return [c('React').createElement(j,{className:"_2f2u",key:'messenger_greeting_icon'},c('React').createElement(c('Image.react'),{src:i("124738")})),c('React').createElement(j,{className:"_253g",key:'messenger_greeting_text'},this.state.greetingMessage)];return this._renderConnectionContext()},_renderOnlineMessage:function m(){return [c('React').createElement(j,{className:"_2f2v",key:'online_indicator_icon'},c('React').createElement(c('Image.react'),{src:i("311943")})),c('React').createElement(j,{className:"_2f2w",key:'online_indicator_text'},this.state.pageOnlineMessage)]},_renderPageResponsiveness:function m(){return [c('React').createElement(j,{key:'page_responsiveness_icon'},c('React').createElement(c('Image.react'),{src:i("124279")})),c('React').createElement(j,{className:"_2f2w",key:'page_responsiveness_text'},this.state.pageResponsiveness)]},_renderConnectionContext:function m(){if(!this.state.connectionContext)return null;return [c('React').createElement(j,{className:"_2f2u",key:'connection_context_icon'},c('React').createElement(c('Image.react'),{src:i("124577")})),c('React').createElement(j,{className:"_253g",key:'connection_context_text'},this.state.connectionContext)]}});f.exports=l}),null);