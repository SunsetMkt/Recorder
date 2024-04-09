/*
录音
https://github.com/xiangyuecn/Recorder
src: extensions/buffer_stream.player.js
*/
!function(e){var t="object"==typeof window&&!!window.document,r=(t?window:Object).Recorder,n=r.i18n;!function(v,e,B,g){"use strict";var b=function(e){return new t(e)},w="BufferStreamPlayer",t=function(e){var t={play:!0,realtime:!0};for(var r in e)t[r]=e[r];this.set=e=t,e.onInputError||(e.onInputError=function(e,t){S(e,1)})};t.prototype=b.prototype={getAudioSrc:function(){return S(B("0XYC::getAudioSrc方法已过时：请直接使用getMediaStream然后赋值给audio.srcObject，仅允许在不支持srcObject的浏览器中调用本方法赋值给audio.src以做兼容"),3),this._src||(this._src=(window.URL||webkitURL).createObjectURL(this.getMediaStream())),this._src},getMediaStream:function(){if(!this._dest)throw new Error(u());return this._dest.stream},start:function(t,n){var r=function(e,t){var r=!a();t||u._clear(),S(e,1),r&&n&&n(e)},a=function(){if(u.isStop)return S(B("6DDt::start被stop终止"),3),!0},u=this,e=u.set,i=u.__abTest;if(null==u._Tc)if(g){u._Tc=0,u._Td=0,u.currentTime=0,u.duration=0,u.isStop=0,u.isPause=0,u.isPlayEnd=0,u.inputN=0,u.inputQueueIdx=0,u.inputQueue=[],u.bufferSampleRate=0,u.audioBuffer=0,u.pcmBuffer=[[],[]];var f=function(e){r(B("P6Gs::浏览器不支持打开{1}",0,w)+(e?": "+e:""))},o=e.runningContext||v.GetContext(!0),s=(u._ctx=o).state,c=v.CtxSpEnd(s);!i&&S("start... ctx.state="+s+(c?B("JwDm::（注意：ctx不是running状态，start需要在用户操作(触摸、点击等)时进行调用，否则会尝试进行ctx.resume，可能会产生兼容性问题(仅iOS)，请参阅文档中runningContext配置）"):""));var d=1;if(o&&o.createMediaStreamDestination){var l=o.createBufferSource();l.start&&void 0!==l.onended||(d=0)}else d=0;if(d){var p=function(){if(!a()){var e=o.createMediaStreamDestination();e.channelCount=1,u._dest=e,!i&&S("start ok"),t&&t(),u._inputProcess(),u._updateTime(),_?(S(B("qx6X::此浏览器的AudioBuffer实现不支持动态特性，采用兼容模式"),3),u._writeInt=setInterval(function(){u._writeBad()},10)):u._writeInt=setInterval(function(){u._writeBuffer()},100)}},_=b.BadAudioBuffer,h=function(){i||null!=_?setTimeout(p):function(){var a,u=b({play:!1,sampleRate:8e3,runningContext:o});u.__abTest=1,u.start(function(){(a=v({type:"unknown",sourceStream:u.getMediaStream(),runningContext:o,onProcess:function(e){for(var t=e[e.length-1],r=1,n=0;n<t.length;n++)if(0!=t[n]){r=0;break}r&&e.length<5||(a.close(),u.stop(),i&&(clearTimeout(i),i=0,b.BadAudioBuffer=_=r,p()))}})).open(function(){a.start()},function(e){u.stop(),f(e)})},f);for(var i=setTimeout(function(){i=0,u.stop(),a&&a.close(),f(B("cdOx::环境检测超时"))},1500),e=new Int16Array(8e3),t=0;t<8e3;t++)e[t]=~~(32767*Math.random()*2-32767);u.input(e)}()},m="AudioContext resume: ";v.ResumeCtx(o,function(e){return e&&S(m+"wait..."),!u.isStop},function(e){e&&S(m+o.state),h()},function(e){S(m+o.state+" "+B("S2Bu::可能无法播放：{1}",0,e),1),h()})}else f("")}else r(B.G("NonBrowser-1",[w]));else r(B("I4h4::{1}多次start",0,w),1)},_clear:function(){var e=this;e.isStop=1,clearInterval(e._writeInt),e.inputQueue=0,e._src&&((window.URL||webkitURL).revokeObjectURL(e._src),e._src=0),e._dest&&(v.StopS_(e._dest.stream),e._dest=0),!e.set.runningContext&&e._ctx&&v.CloseNewCtx(e._ctx),e._ctx=0;var t=e.bufferSource;t&&(t.disconnect(),t.stop()),e.bufferSource=0,e.audioBuffer=0},stop:function(){this._clear(),!this.__abTest&&S("stop"),this._playEnd(1)},pause:function(){S("pause"),this.isPause=1,this._updateTime(1)},resume:function(){var t=this,r="resume(wait ctx)";S("resume"),t.isPause=0,t._updateTime(1);var n=t._ctx;n&&v.ResumeCtx(n,function(e){return e&&S(r+"..."),!t.isStop&&!t.isPause},function(e){e&&S(r+n.state)},function(e){S(r+n.state+"[err]"+e,1)})},_playEnd:function(e){var t=this,r=t._PNs,n=t.set.onPlayEnd;!e&&t.isPause||!e&&t.isPlayEnd||(e||r&&500<Date.now()-r?(t._PNs=0,t.isPlayEnd=1,n&&n(),t._updateTime(1)):r||(t._PNs=Date.now()))},_playLive:function(){this.isPlayEnd=0,this._PNs=0},_updateTime:function(e){var t=this,r=t.bufferSampleRate||9e9,n=t.set.onUpdateTime;t.currentTime=Math.round(t._Tc/r*1e3),t.duration=Math.round(t._Td/r*1e3);var a=""+t.currentTime+t.duration;(e||t._UTs!=a)&&(t._UTs=a,n&&n())},input:function(e){var t=this,r=t.set,n=++t.inputN;if(!t.inputQueue)throw new Error(u());var a=r.decode;a?i(e,function(e){t.inputQueue&&((null==a.fadeInOut||a.fadeInOut)&&x(e.data,e.sampleRate),t._input2(n,e.data,e.sampleRate))},function(e){t._inputErr(e,n)}):t._input2(n,e,r.sampleRate)},_input2:function(r,e,n){var a=this,t=a.set;t.transform?t.transform(e,n,function(e,t){a.inputQueue&&(n=t||n,a._input3(r,e,n))},function(e){a._inputErr(e,r)}):a._input3(r,e,n)},_input3:function(e,t,r){var n=this;t&&t.subarray?r?n.bufferSampleRate&&n.bufferSampleRate!=r?n._inputErr(B("IHZd::input调用失败：data的sampleRate={1}和之前的={2}不同",0,r,n.bufferSampleRate),e):(n.bufferSampleRate||(n.bufferSampleRate=r),n.inputQueue[e]=t,n._dest&&n._inputProcess()):n._inputErr(B("N4ke::input调用失败：未提供sampleRate"),e):n._inputErr(B("ZfGG::input调用失败：非pcm[Int16,...]输入时，必须解码或者使用transform转换"),e)},_inputErr:function(e,t){this.inputQueue[t]=1,this.set.onInputError(e,t)},_inputProcess:function(){var e=this;if(e.bufferSampleRate){for(var t=e.inputQueue,r=e.inputQueueIdx+1;r<t.length;r++){var n=t[r];if(1!=n){if(!n)return;e.inputQueueIdx=r,t[r]=null;var a=e.pcmBuffer,u=a[0],i=a[1];if(u.length){if(i.length){var f=new Int16Array(u.length+i.length);f.set(u),f.set(i,u.length),a[0]=f}}else a[0]=i;a[1]=n,e._Td+=n.length,e._updateTime(),e._playLive()}else e.inputQueueIdx=r}b.BadAudioBuffer?e._writeBad():e.audioBuffer?e._writeBuffer():e._createBuffer(!0)}},_createBuffer:function(e){var t=this,r=t.set;if(e||t.audioBuffer){var n=t._ctx,a=t.bufferSampleRate,u=a*(r.bufferSecond||60),i=n.createBuffer(1,u,a),f=n.createBufferSource();f.channelCount=1,f.buffer=i,f.connect(t._dest),r.play&&f.connect(n.destination),f.onended=function(){f.disconnect(),f.stop(),t._createBuffer()},f.start(),t.bufferSource=f,t.audioBuffer=i,t.audioBufferIdx=0,t._createBufferTime=Date.now(),t._writeBuffer()}},_writeBuffer:function(){var e=this,t=e.set,r=e.audioBuffer,n=e.bufferSampleRate,a=e.audioBufferIdx;if(r){var u=Math.floor((Date.now()-e._createBufferTime)/1e3*n);e.audioBufferIdx+.005*n<u&&(e.audioBufferIdx=u);var i=Math.max(0,e.audioBufferIdx-u),f=r.length-e.audioBufferIdx;if(!((f=Math.min(f,~~(.8*n)-i))<1||e._subPause())){var o=e.pcmBuffer,s=o[0],c=o[1];if(s.length+c.length!=0){e._playLive();for(var d=0,l=1,p=t.realtime;p;){var _=i+s.length,h=(p.maxDelay||300)/1e3*n;if(_<h){var m=Math.floor(.15*n-_-c.length);0==a&&0<m&&(e.audioBufferIdx=Math.max(e.audioBufferIdx,m)),p=!1;break}if(p.discardAll){1.333*h<_&&(s=e._cutPcm0(Math.round(.666*h-i))),p=!1;break}s=e._cutPcm0(3*n-i),l=1.6,d=Math.min(f,Math.floor((s.length+c.length)/l));break}p||(d=Math.min(f,s.length+c.length)),d&&(e.audioBufferIdx=e._subWrite(r,d,e.audioBufferIdx,l))}else e._playEnd()}}},_writeBad:function(){var e=this,t=e.set,r=e.audioBuffer,n=e.bufferSampleRate,a=e._ctx;if(r){var u=r.length/n*1e3;if(Date.now()-e._createBufferTime<u-5)return}var i=~~(.8*n),f=t.PlayBufferDisable?0:n/1e3*300;if(!e._subPause()){var o=e.pcmBuffer,s=o[0],c=o[1],d=s.length+c.length;if(0==d||d<f)e._playEnd();else{e._playLive();for(var l=0,p=1,_=t.realtime;_;){var h=s.length,m=(_.maxDelay||300)/1e3*n;if(h<m){_=!1;break}if(_.discardAll){1.333*m<h&&(s=e._cutPcm0(Math.round(.666*m))),_=!1;break}s=e._cutPcm0(3*n),p=1.6,l=Math.min(i,Math.floor((s.length+c.length)/p));break}if(_||(l=Math.min(i,s.length+c.length)),l){r=a.createBuffer(1,l,n),e._subWrite(r,l,0,p),x(r.getChannelData(0),n);var v=a.createBufferSource();v.channelCount=1,v.buffer=r,v.connect(e._dest),t.play&&v.connect(a.destination),v.start(),e.bufferSource=v,e.audioBuffer=r,e._createBufferTime=Date.now()}}}},_cutPcm0:function(e){var t=this.pcmBuffer,r=t[0];return r.length>e&&(r=r.subarray(r.length-e),t[0]=r),r},_subPause:function(){return this.isPause?(this.set.realtime&&(this.pcmBuffer=[[],[]]),1):0},_subWrite:function(e,t,r,n){for(var a=this.pcmBuffer,u=a[0],i=a[1],f=new Int16Array(t),o=0,s=0,c=0;s<t&&c<u.length;)f[s++]=u[o],c+=n,o=Math.round(c);if(o>=u.length){for(u=new Int16Array(0),o=c=0;s<t&&c<i.length;)f[s++]=i[o],c+=n,o=Math.round(c);i=o>=i.length?new Int16Array(0):i.subarray(o),a[1]=i}else u=u.subarray(o);a[0]=u;for(var d=e.getChannelData(0),o=0;o<t;o++,r++)d[r]=f[o]/32767;return this._Tc+=t,this._updateTime(),r}};var u=function(){return B("TZPq::{1}未调用start方法",0,w)},x=b.FadeInOut=function(e,t){for(var r=t/1e3*1,n=0;n<r;n++)e[n]*=n/r;for(var a=e.length,n=~~(a-r);n<a;n++)e[n]*=(a-n)/r},i=b.DecodeAudio=function(e,i,t){var r=v.GetContext();r?e&&e instanceof ArrayBuffer?r.decodeAudioData(e,function(e){for(var t=e.getChannelData(0),r=e.sampleRate,n=new Int16Array(t.length),a=0;a<t.length;a++){var u=Math.max(-1,Math.min(1,t[a]));u=u<0?32768*u:32767*u,n[a]=u}i&&i({sampleRate:r,duration:Math.round(t.length/r*1e3),data:n})},function(e){t&&t(B("mOaT::音频解码失败：{1}",0,e&&e.message||"-"))}):t&&t(B("wE2k::音频解码数据必须是ArrayBuffer")):t&&t(B("iCFC::浏览器不支持音频解码"))},S=function(){var e=arguments;e[0]="["+w+"]"+e[0],v.CLog.apply(null,e)};v[w]=b}(r,0,n.$T,t)}();