if (self.CavalryLogger) { CavalryLogger.start_js(["FdLrU"]); }

__d('CaptionsDisplayForm',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k,l,m){this.$CaptionsDisplayForm1=i;this.$CaptionsDisplayForm2=j;this.$CaptionsDisplayForm3=k;this.$CaptionsDisplayForm4=l;this.$CaptionsDisplayForm5=m;j.subscribe('change',this.onFormChange.bind(this));k.subscribe('change',this.onFormChange.bind(this));l.subscribe('change',this.onFormChange.bind(this));m.subscribe('change',this.onFormChange.bind(this))}h.prototype.onFormChange=function(){this.$CaptionsDisplayForm1.setBackgroundColor(this.$CaptionsDisplayForm2.getValue());this.$CaptionsDisplayForm1.setBackgroundOpacity(this.$CaptionsDisplayForm3.getValue());this.$CaptionsDisplayForm1.setTextColor(this.$CaptionsDisplayForm4.getValue());this.$CaptionsDisplayForm1.setTextSize(this.$CaptionsDisplayForm5.getValue());this.$CaptionsDisplayForm1.updateStyle()};f.exports=h}),null);
__d("VideoCaptionBackgroundOpacityType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({OPAQUE:100,DARK:75,DEFAULT:45,LIGHT:25,TRANSPARENT:-1})}),null);
__d("VideoCaptionTextSizeType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({BIGGEST:200,BIGGER:175,BIG:150,MEDIUM:125,DEFAULT:100,SMALL:75,SMALLEST:50})}),null);
__d('SubtitlesStyle',['cx','VideoCaptionBackgroundOpacityType','CSS','VideoCaptionTextSizeType'],(function a(b,c,d,e,f,g,h){'use strict';var i={Black:'20, 22, 26',Blue:'0, 0, 255',Green:'0, 255, 0',Cyan:'0, 255, 255',Red:'255, 0, 0',Magenta:'255, 0, 255',White:'255, 255, 255',Yellow:'255, 255, 0'},j='Black',k='White';function l(m,n,o,p,q,r){this.$SubtitlesStyle3=o;this.$SubtitlesStyle4=p;this.setBackgroundColor(m);this.setBackgroundOpacity(n);this.setTextColor(q);this.setTextSize(r);this.updateStyle()}l.prototype.updateStyle=function(){var m=this.$SubtitlesStyle2;if(this.$SubtitlesStyle2===c('VideoCaptionBackgroundOpacityType').TRANSPARENT)m=0;var n=m/100,o='rgba('+i[this.$SubtitlesStyle1]+', '+n+')';this.$SubtitlesStyle3.style.backgroundColor=o;this.$SubtitlesStyle3.style.color=this.$SubtitlesStyle6;var p='0 0 10px rgb('+i[this.$SubtitlesStyle1]+'), 0 0 5px rgba('+i[this.$SubtitlesStyle1]+', .8)';this.$SubtitlesStyle3.style.textShadow=p;c('CSS').conditionClass(this.$SubtitlesStyle4,"_5z64",this.$SubtitlesStyle7==c('VideoCaptionTextSizeType').SMALLEST);c('CSS').conditionClass(this.$SubtitlesStyle4,"_5z65",this.$SubtitlesStyle7==c('VideoCaptionTextSizeType').SMALL);c('CSS').conditionClass(this.$SubtitlesStyle4,"_5z66",this.$SubtitlesStyle7==c('VideoCaptionTextSizeType').MEDIUM);c('CSS').conditionClass(this.$SubtitlesStyle4,"_5z67",this.$SubtitlesStyle7==c('VideoCaptionTextSizeType').BIG);c('CSS').conditionClass(this.$SubtitlesStyle4,"_5z68",this.$SubtitlesStyle7==c('VideoCaptionTextSizeType').BIGGER);c('CSS').conditionClass(this.$SubtitlesStyle4,"_5z69",this.$SubtitlesStyle7==c('VideoCaptionTextSizeType').BIGGEST)};l.prototype.setBackgroundColor=function(m){if(Object.prototype.hasOwnProperty.call(i,m)){this.$SubtitlesStyle1=m}else this.$SubtitlesStyle1=j;};l.prototype.setBackgroundOpacity=function(m){if(m!==0&&m>=c('VideoCaptionBackgroundOpacityType').TRANSPARENT&&m<=c('VideoCaptionBackgroundOpacityType').OPAQUE){this.$SubtitlesStyle2=m}else this.$SubtitlesStyle2=c('VideoCaptionBackgroundOpacityType').DEFAULT;};l.prototype.setTextColor=function(m){if(Object.prototype.hasOwnProperty.call(i,m)){this.$SubtitlesStyle6=m}else this.$SubtitlesStyle6=k;};l.prototype.setTextSize=function(m){if(m>=c('VideoCaptionTextSizeType').SMALLEST&&m<=c('VideoCaptionTextSizeType').BIGGEST){this.$SubtitlesStyle7=m}else this.$SubtitlesStyle7=c('VideoCaptionTextSizeType').DEFAULT;};f.exports=l}),null);