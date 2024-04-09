/*
Recorder ../assets/page-i18n/index_html/en-US.js
https://github.com/xiangyuecn/Recorder

Usage: Recorder.i18n.lang="en-US" or "en"

Desc: English, 英语。The translation of the /index.html page, this translation mainly comes from: google translation + Baidu translation, translated from Chinese to English. 页面/index.html的翻译，此翻译主要来自：google翻译+百度翻译，由中文翻译成英文。

注意：请勿修改//@@打头的文本行；以下代码结构由/src/package-i18n.js自动生成，只允许在字符串中填写翻译后的文本，请勿改变代码结构；翻译的文本如果需要明确的空值，请填写"=Empty"；文本中的变量用{n}表示（n代表第几个变量），所有变量必须都出现至少一次，如果不要某变量用{n!}表示

Note: Do not modify the text lines starting with //@@; The following code structure is automatically generated by /src/package-i18n.js, only the translated text is allowed to be filled in the string, please do not change the code structure; If the translated text requires an explicit empty value, please fill in "=Empty"; Variables in the text are represented by {n} (n represents the number of variables), all variables must appear at least once, if a variable is not required, it is represented by {n!}
*/
(function(factory){
	var browser=typeof window=="object" && !!window.document;
	var win=browser?window:Object; //非浏览器环境，Recorder挂载在Object下面
	factory(win.Recorder,browser);
}(function(Recorder,isBrowser){
"use strict";
var i18n=Recorder.i18n;

//@@User Code-1 Begin 手写代码放这里 Put the handwritten code here @@

//@@User Code-1 End @@

//@@Exec i18n.lang="en-US";
Recorder.CLog('Import Page[index_html] lang="en-US"');

//@@Exec i18n.alias["en-US"]="en";

var putSet={lang:"en"};

//@@Exec i18n.data["rtl$en"]=false;
i18n.data["desc-page-index_html$en"]="English, 英语。The translation of the /index.html page, this translation mainly comes from: google translation + Baidu translation, translated from Chinese to English. 页面/index.html的翻译，此翻译主要来自：google翻译+百度翻译，由中文翻译成英文。";
//@@Exec i18n.GenerateDisplayEnglish=false;



//*************** Begin srcFile=../index.html ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="Recorder H5: 用于html5网页中的前端录音解决方案，此录音插件支持mp3 wav pcm g711a g711u amr ogg webm格式，支持实时上传 语音识别 音频可视化 实时处理，可在PC端 移动端 Android iOS 原生App中跨平台使用"
//@@Put0
 "HQYi:"+ //no args
       "Recorder H5: For front-end recording solutions in html5 web pages, this recording plug-in supports mp3 wav pcm g711a g711u amr ogg webm format; supports real-time upload, speech recognition, audio visualization, and real-time processing; it can be used on PC, mobile, and Android , iOS, native App cross-platform use"

//@@zh="Recorder H5使用简单，功能丰富，支持PC、Android、iOS 14.3+"
,"K23n:"+ //no args
       "Recorder H5 is easy to use and rich in functions, supporting PC, Android, iOS 14.3+"

//@@zh="支持：浏览器WebView（H5）、各种使用js来构建的程序（App、小程序、UniApp、Electron、NodeJs）"
,"50II:"+ //no args
       "Support: browser WebView (H5), various programs built using js (App, miniProgram, UniApp, Electron, NodeJs)"

//@@zh="源码仓库 :"
,"3LzK:"+ //no args
       "Open Source :"

//@@zh="更多Demo :"
,"IzbQ:"+ //no args
       "More Demos :"

//@@zh="Demo列表(可编辑)"
,"Oy5V:"+ //no args
       "Demo List (editable)"

//@@zh="(Copy即用，更适合入门学习)"
,"XTmp:"+ //no args
       "(Simple and easy to learn)"

//@@zh="老版本 :"
,"Ajm0:"+ //no args
       "Old Version :"

//@@zh="切换到老版本测试"
,"dGDv:"+ //no args
       "Switch to old version"

//@@zh="类型 :"
,"Fwsy:"+ //no args
       "Type :"

//@@zh="请求压缩版（*.min.js、dist/*）"
,"b9LX:"+ //no args
       "Request distribution files (*.min.js、dist/*)"

//@@zh="提示 :"
,"ArEi:"+ //no args
       "Hint :"

//@@zh="比特率 :"
,"hSjb:"+ //no args
       "bitRate :"

//@@zh="kbps，越大音质越好"
,"oNuF:"+ //no args
       "kbps, The larger the value, the better the sound quality"

//@@zh="采样率 :"
,"2oPC:"+ //no args
       "sampleRate :"

//@@zh="hz，越大细节越丰富"
,"ldVn:"+ //no args
       "hz, The larger the value, the richer the details"

//@@zh="打开录音,请求权限"
,"fFtC:"+ //no args
       "Open recording, request permission"

//@@zh="关闭录音,释放资源"
,"p3Kq:"+ //no args
       "Close recording, release resources"

//@@zh="录制"
,"FIoV:"+ //no args
       "Start recording"

//@@zh="停止"
,"5bwK:"+ //no args
       "Stop recording"

//@@zh="暂停"
,"abgd:"+ //no args
       "Pause"

//@@zh="继续"
,"SWBS:"+ //no args
       "Resume"

//@@zh="播放"
,"WNdh:"+ //no args
       "Play"

//@@zh="上传"
,"xDbj:"+ //no args
       "Upload"

//@@zh="本地下载"
,"shLM:"+ //no args
       "Local download"

//@@zh="批量编码"
,"uuZ6:"+ //no args
       "Batch encoding"

//@@zh="kbps 测试音质用的，除比特率外其他参数可调整"
,"dLMM:"+ //no args
       "kbps, for testing sound quality, other parameters except bit rate can be adjusted"

//@@zh="开始录制后定时"
,"hoh3:"+ //no args
       "Automatically stop recording at "

//@@zh="ms自动停止录音，定时录音"
,"CX5p:"+ //no args
       "ms after start recording, timed recording"

//@@zh="接管编码器输出（takeoffEncodeChunk），切换后新打开录音生效"
,"AWXs:"+ //no args
       "Take over the encoder output (takeoffEncodeChunk), and the newly opened recording takes effect after switching"

//@@zh="模拟实时编码传输（H5版语音通话聊天），发送间隔"
,"SUfw:"+ //no args
       "(Chinese) Simulate real-time encoding transmission (H5 version voice call chat), sending interval"

//@@zh="实时语音识别、音频文件转文字，ASR"
,"lvN7:"+ //no args
       "(Chinese) Real-time speech recognition, audio file to text, ASR"

//@@zh="切换麦克风 :"
,"QDzU:"+ //no args
       "Switch microphone :"

//@@zh="从未请求过录音权限时，可能无法正常拉取设备列表，打开一次录音后可尝试"
,"hYD7:"+ //no args
       "When the recording permission has never been requested, the device list may not be pulled normally, you can try after opening the recording once"

//@@zh="重新拉取设备"
,"gNwv:"+ //no args
       "Re-pull the device"

//@@zh="不设置"
,"3K14:"+ //no args
       "Not Set"

//@@zh="降噪（ANS）配置开关"
,"Q0lg:"+ //no args
       "Noise Cancellation (ANS) configuration switch"

//@@zh="不设置"
,"d6UL:"+ //no args
       "Not Set"

//@@zh="回声消除（AEC）配置开关"
,"ujUi:"+ //no args
       "Echo Cancellation (AEC) configuration switch"

//@@zh="不设置"
,"K3dr:"+ //no args
       "Not Set"

//@@zh="自动增益（AGC）配置开关"
,"gjGg:"+ //no args
       "Auto Gain Control (AGC) configuration switch"

//@@zh="以上参数设置后需重新打开录音"
,"fP77:"+ //no args
       "After setting the above parameters, you need to reopen the recording"

//@@zh="；均为set中的audioTrackSet高级配置，会直接传递给浏览器的getUserMedia方法，不同浏览器的支持程度不同，并不一定会生效；这些参数不设置时浏览器给的默认状态是打开还是关闭将不确定；"
,"7ots:"+ //no args
       "; Both are advanced configurations of audioTrackSet in the set, which will be directly passed to the getUserMedia method of the browser. Different browsers have different support levels and may not take effect; when these parameters are not set, the default state given by the browser will be open or closed uncertain; "

//@@zh="移动端打开降噪、回声消除可能会表现的很怪异（包括系统播放音量变小），但iOS上如果关闭又可能导致录音没有声音，如需更改配置请Android和iOS分别配置，并测试好"
,"40Wa:"+ //no args
       "Turning on the noiseSuppression and echoCancellation on the mobile terminal may behave strangely (including the system playback volume becomes lower), but if it is turned off on iOS, the recording may have no sound. If you need to change the configuration, please configure Android and iOS separately, and test it"

//@@zh="启用MediaRecorder :"
,"HmBe:"+ //no args
       "Enable MediaRecorder :"

//@@zh="启用"
,"WJse:"+ //no args
       "Enable"

//@@zh="设置后需重新打开录音"
,"DIXY:"+ //no args
       "After setting, you need to reopen the recording"

//@@zh="音频采集连接方式：启用时尝试使用MediaRecorder.WebM.PCM，默认启用，未启用或者不支持时使用AudioWorklet或ScriptProcessor；通过设置Recorder.ConnectEnableWebM=false禁用。"
,"w1aV:"+ //no args
       "Audio capture connect method: try to use MediaRecorder.WebM.PCM when enabled, enabled by default, use AudioWorklet or ScriptProcessor when not enabled or not supported; disable by setting Recorder.ConnectEnableWebM=false. "

//@@zh="使用MediaRecorder采集到的音频数据比其他方式更好，几乎不存在丢帧现象，所以音质明显会好很多，建议保持开启；"
,"sdaw:"+ //no args
       "The audio data capture by using MediaRecorder is better than other methods, and there is almost no frame loss phenomenon, so the sound quality will be much better, it is recommended to keep it turned on; "

//@@zh="有些浏览器不支持录制PCM编码的WebM，如FireFox、低版本的Chrome，将依旧使用AudioWorklet或ScriptProcessor来连接采集。"
,"rAmm:"+ //no args
       "Some browsers do not support recording PCM-encoded WebM, such as FireFox and lower versions of Chrome, they will still use AudioWorklet or ScriptProcessor to connect and capture. "

//@@zh="启用AudioWorklet :"
,"C0vI:"+ //no args
       "Enable AudioWorklet :"

//@@zh="启用"
,"AW2s:"+ //no args
       "Enable"

//@@zh="设置后需重新打开录音，ConnectEnableWebM如果启用并且有效时，本参数将不起作用"
,"5Ve2:"+ //no args
       "After setting, you need to reopen the recording. If ConnectEnableWebM is enabled and valid, this parameter will not work"

//@@zh="音频采集连接方式：启用时尝试使用AudioWorklet，默认禁用，未启用或者不支持时使用ScriptProcessor；通过设置Recorder.ConnectEnableWorklet=true启用。"
,"o3Pt:"+ //no args
       "Audio capture connect method: try to use AudioWorklet when enabled, disabled by default, use ScriptProcessor when not enabled or not supported; enable by setting Recorder.ConnectEnableWorklet=true. "

//@@zh="已知：AudioWorklet在一定条件下会导致某些浏览器崩溃"
,"R0N9:"+ //no args
       "Known: AudioWorklet will cause some browsers to crash under certain conditions"

//@@zh="测试"
,"GQ6V:"+ //no args
       "Test"

//@@zh="(坑已填好)。"
,"8Nn9:"+ //no args
       "(The pit has been filled). "

//@@zh="如需录音功能定制开发，网站、App、小程序、前端后端开发等需求，请加QQ群：①群 781036591、②群 748359095、③群 450721519，口令recorder，联系群主（即作者），谢谢~"
,"ERHy:"+ //no args
       "If you need custom development of recording functions, websites, apps, miniProgram, front-end and back-end development, etc., please join the Tencent QQ group: ①group 781036591、②group 748359095、③group 450721519, password recorder, contact the group owner (ie the author), thank you~"

//@@zh="变速变调 :"
,"HW4d:"+ //no args
       "Variable speed and pitch :"

//@@zh="重置变速变调"
,"4yy4:"+ //no args
       "Reset variable"

//@@zh="实时变速变调控制选项（Sonic 插件），可以边录边修改，同一时间应该只控制一个，否则叠加作用；请填写0.1-2.0的数字，1.0为不调整，当然超过2.0也是可以的（需手动输入）"
,"BJNh:"+ //no args
       "Real-time variable speed and pitch control option (Sonic plug-in), which can be modified while recording. Only one should be controlled at the same time, otherwise the superimposed effect; please fill in the number of 0.1-2.0, 1.0 means no adjustment, of course, it is also possible to exceed 2.0 (manual input is required) "

//@@zh="男声"
,"1KYh:"+ //no args
       "Male"

//@@zh="女声，变调不变速（会说话的汤姆猫）"
,"p8QU:"+ //no args
       "Female, Change the pitch without changing the speed (Talking Tom Cat)"

//@@zh="慢放"
,"67pP:"+ //no args
       "Slow"

//@@zh="快放，变速不变调（快放慢放）"
,"MkST:"+ //no args
       "Fast, Variable speed without changing the pitch (fast slow down)"

//@@zh="缓重"
,"s3VS:"+ //no args
       "Heavy"

//@@zh="尖锐，变速变调"
,"ey5s:"+ //no args
       "Sharp, Variable speed and pitch"

//@@zh="调低"
,"Zm38:"+ //no args
       "Turn Down"

//@@zh="调高，调整音量"
,"K4GQ:"+ //no args
       "Turn Up, adjust the volume"

//@@zh="处理缓冲:"
,"ErMk:"+ //no args
       "Process Buffer:"

//@@zh="，控制缓冲大小减少转换引入的杂音，0不缓冲"
,"YU35:"+ //no args
       ", control the buffer size to reduce the noise introduced by the conversion, 0 does not buffer"

//@@zh="播放反馈:"
,"zgh0:"+ //no args
       "Play Feedback:"

//@@zh="不播放"
,"wBFG:"+ //no args
       "Don't Play"

//@@zh="实时播放反馈"
,"a85k:"+ //no args
       "Real-time playback feedback"

//@@zh="重新转换当前录音"
,"7RJF:"+ //no args
       "Reconvert the current recording"

//@@zh="挡住！防止滑块被误触"
,"GUOu:"+ //no args
       "Cover up! Prevent the slider from being accidentally touched"

//@@zh="打开编辑"
,"bpmu:"+ //no args
       "Open Edit"

//@@zh="丢失补偿 :"
,"OOHq:"+ //no args
       "Lost Compensation :"

//@@zh="禁用设备卡顿时音频输入丢失补偿功能（通过别的程序大量占用CPU来模拟设备卡顿）；"
,"Ft0s:"+ //no args
       "Disable the audio input loss compensation function when the device freezes (simulate device freezes by using a large amount of CPU by other programs); "

//@@zh="设置后需重新打开录音"
,"EE7G:"+ //no args
       "After setting, you need to reopen the recording"

//@@zh="；为set中disableEnvInFix配置值"
,"LqWd:"+ //no args
       "; Configure value for disableEnvInFix in set."

//@@zh="如果没有进行补偿，录音时设备偶尔出现很卡的情况下（CPU被其他程序大量占用），浏览器采集到的音频是断断续续的，导致10秒的录音可能就只返回了5秒的数据量，这个时候最终编码得到的音频时长明显变短，播放时的效果就像快放一样。未禁用时会在卡顿时自动补偿静默音频，消除了快放效果，但由于丢失的音频已被静默数据代替，听起来就是数据本身的断断续续的效果。在设备不卡时录音没有此问题。"
,"mpX0:"+ //no args
       "If there is no compensation, when the device occasionally freezes during recording (the CPU is heavily occupied by other programs), the audio collected by the browser is intermittent, resulting in a 10-second recording that may only return 5 seconds of data. At this time, the duration of the final encoded audio is significantly shorter, and the effect is like fast playback during playback. When it is not disabled, it will automatically compensate the silent audio when it freezes, eliminating the fast forward effect, but since the lost audio has been replaced by silent data, it sounds like the intermittent effect of the data itself. Recording does not have this problem when the device is not stuck. "

//@@zh="调用Recorder.Destroy()"
,"qTKw:"+ //no args
       "Call Recorder.Destroy()"

//@@zh="Destroy会关闭所有的全局资源，包括AudioContext，当录音出现问题时，可尝试Destroy一下重试"
,"4xCn:"+ //no args
       "Destroy will close all global resources, including AudioContext, when there is a problem with recording, try Destroy and try again."

//@@zh="阻止自动锁屏 :"
,"fbxW:"+ //no args
       "Prevent automatic screen lock :"

//@@zh="调用navigator.wakeLock 或 静音循环播放视频"
,"y0Vx:"+ //no args
       "Call navigator.wakeLock or mute to loop video"

//@@zh="手机锁屏后是否能录音不可控，直接简单粗暴的调用wakeLock接口 或 静音+循环播放视频来阻止锁屏，就是有点费电"
,"5Fgu:"+ //no args
       "It is uncontrollable whether the recording can be performed after the mobile phone is locked. Simply call the wakeLock interface or mute + loop the video to prevent the lock screen, which is a bit of a waste of electricity."

//@@zh="暴力测试 :"
,"JbX0:"+ //no args
       "Brute force test :"

//@@zh="开始注入"
,"KPAW:"+ //no args
       "Start injecting"

//@@zh="小时的录音数据，测试长时间录音编码和内存泄露"
,"ioLq:"+ //no args
       "hours of recording data, testing long-term recording encoding and memory leaks"

//@@zh="暴力测试 :"
,"4pBN:"+ //no args
       "Brute force test :"

//@@zh="同时打开5个录音（并发调用open）"
,"KwYR:"+ //no args
       "Open 5 recordings at the same time (call open concurrently)"

//@@zh="，每个会录5秒，打开浏览器控制台查看日志"
,"X9aU:"+ //no args
       ", each will be recorded for 5 seconds, open the browser console to view the log."

//@@zh="DTMF电话按键信号 :"
,"SNMe:"+ //no args
       "DTMF phone key signal :"

//@@zh="DTMF解码、编码插件，可以方便的处理电话拨号按键信号，用于：电话录音软解，软电话实时提取DTMF按键信号、实时发送DTMF按键信号等。下面拨号盘可在录音时往录音文件中添加按键信息："
,"nVlV:"+ //no args
       "DTMF decoding and encoding plug-ins can easily process telephone dialing key signals, used for: soft phone recording soft solution, soft phone real-time extraction of DTMF key signals, real-time sending of DTMF key signals, etc. The following dial pad can add key information to the recording file during recording: "

//@@zh="识别当前录音中的DTMF按键信息"
,"HsEb:"+ //no args
       "Identify the DTMF key information in the current recording"

//@@zh="发送*#1234567890#*"
,"nWea:"+ //no args
       "Send *#1234567890#*"

//@@zh="测试App :"
,"CEEq:"+ //no args
       "Test App :"

//@@zh="下载源码"
,"w49F:"+ //no args
       "Download source code"

//@@zh="自行编译"
,"7kBy:"+ //no args
       "self compile"

//@@zh="下载APK"
,"o9ad:"+ //no args
       "Download APK"

//@@zh="40kb，删除.zip后缀，"
,"EUXZ:"+ //no args
       "40kb, remove the .zip suffix, "

//@@zh="源码"
,"kiFv:"+ //no args
       "Source code"

//@@zh="iframe兼容性 :"
,"z5Tl:"+ //no args
       "iframe compatibility :"

//@@zh="把页面放到IFrame里面测试权限请求"
,"pALQ:"+ //no args
       "Put the page in an IFrame to test the permission request"

//@@zh="测试在iframe里面请求录音权限的兼容性。最佳实践应该是让window.top(不适用于跨域)去加载Recorder，iframe里面使用top.Recorder；此测试未遵照此最佳实践，以模拟跨域iframe和同域下的复杂真实情况，H5录音在跨域时未设置相应策略权限永远是拒绝的"
,"B227:"+ //no args
       "Test the compatibility of requesting recording permission in iframe. The best practice should be to let window.top (not applicable to cross-domain) load the Recorder, and use top.Recorder in the iframe; this test does not follow this best practice to simulate the complex real situation of cross-domain iframe and the same domain, H5 recording is always denied if the corresponding policy permission is not set when cross-domain."

//@@zh="音乐播放测试 :"
,"gqjM:"+ //no args
       "Music playback test :"

//@@zh="Audio对录音的影响测试"
,"XHIP:"+ //no args
       "Audio's influence test on recording"

//@@zh="；低版本iOS Safari如果未开始过录音并且播放了音乐，然后后续录音可能会有问题；再现方法"
,"LfbN:"+ //no args
       "; If the lower version of iOS Safari has not started recording and played music, then there may be problems with subsequent recordings; reproduction method"

//@@zh="刷新页面后首先先播放音乐，然后开始测试录音，会发现波形显示掉帧或者保持直线。另测试浏览器对音频的支持情况。"
,"T3B7:"+ //no args
       "After refreshing the page, first play the music first, and then start the test recording, and you will find that the waveform shows frame drop or keeps a straight line. Also test the browser's support for audio. "

//@@zh="视频播放测试 :"
,"HH7Z:"+ //no args
       "Video playback test :"

//@@zh="播放mp4"
,"9q2V:"+ //no args
       "Play mp4"

//@@zh="Video对录音的影响测试"
,"WQXo:"+ //no args
       "Test of the influence of Video on recording"

//@@zh="；iOS Safari可能出现先播放视频，然后再开始录音，会自动播放视频的声音，但并未再现。"
,"skOH:"+ //no args
       "; iOS Safari may appear to play the video first, and then start recording, and the sound of the video will be played automatically, but it is not reproduced. "

//@@zh="显示video"
,"M5YG:"+ //no args
       "Display Video"

//@@zh="隐藏video"
,"uagh:"+ //no args
       "Hide Video"

//@@zh="移除video"
,"W1Vo:"+ //no args
       "Remove Video"

//@@zh="循环播放"
,"LrV6:"+ //no args
       "Loop Playback"

//@@zh="静音循环播放"
,"6IaJ:"+ //no args
       "Mute Loop"

//@@zh="浏览器环境情况 :"
,"0Wqg:"+ //no args
       "Browser environment :"

//@@zh="Recorder库修改时间（有可能修改了忘改）："
,"qfGt:"+ //no args
       "Modification time of the Recorder library (it may be modified and forgotten): "

//@@zh="本页面修改时间（有可能修改了忘改）："
,"VXCO:"+ //no args
       "Modification time of this page (it may be modified and forgotten): "

//@@zh="问题自检 :"
,"z6w4:"+ //no args
       "Problem self-test :"

//@@zh="录音时注意观察灰色区域是否有绿色音量跳动，没有绿色跳动说明Recorder没有获取到声音数据。如果测试发现mp3没有声音，可以试一下wav格式，如果wav格式有声音，说明内置lamejs mp3编码器有问题。如果都没有，下载下来播放看看有没有。下载下来也没有声音可以反馈一下。"
,"6TKY:"+ //no args
       "When recording, pay attention to whether there is a green volume jump in the gray area. If there is no green jump, it means that the Recorder has not obtained the sound data. If the test finds that the mp3 has no sound, you can try the wav format. If there is sound in the wav format, it means that there is a problem with the built-in lamejs mp3 encoder. If not, download and play to see if there is any. There is no sound after downloading and you can give feedback."

//@@zh="如果浏览器不能正常录音，并且不确定是不是这个库的问题，可以到"
,"SaFm:"+ //no args
       "If the browser cannot record normally, and you are not sure whether it is a problem with this library, you can go to: "

//@@zh="试一下。"
,"Ma2G:"+ //no args
       "try it."

//@@zh="不能获得错误堆栈"
,"T13G:"+ //no args
       "can't get error stack"

//@@zh="已禁用设备卡顿时音频输入丢失补偿，可以通过别的程序大量占用CPU来模拟设备卡顿，然后录音听听未补偿时的播放效果，然后再试试不禁用的效果"
,"Ysbv:"+ //no args
       "The audio input loss compensation when the device freezes has been disabled. You can use other programs to take up a lot of CPU to simulate the device freezes, and then record and listen to the playback effect when it is not compensated, and then try the effect without disabling it"

//@@zh="已禁用MediaRecorder.WebM.PCM"
,"kmRS:"+ //no args
       "Disabled MediaRecorder.WebM.PCM"

//@@zh="已启用AudioWorklet"
,"Tddh:"+ //no args
       "AudioWorklet enabled"

//@@zh="（同时启用了MediaRecorder，AudioWorklet只会在MediaRecorder未生效时采用）"
,"0ZRO:"+ //no args
       " (MediaRecorder is enabled at the same time, AudioWorklet will only be used when MediaRecorder is not in effect) "

//@@zh="已启用audioTrackSet配置："
,"W5cU:"+ //no args
       "AudioTrackSet configuration enabled: "

//@@zh="1秒的wav文件大小(字节)估算公式：采样率 × 位数 ÷ 8，当前："
,"IYAd:"+ //no args
       "The formula for estimating the wav file size (bytes) in 1 second is: sampleRate × number of bits ÷ 8, currently: "

//@@zh="1秒的mp3文件大小(字节)估算公式：比特率 × 1000 ÷ 8，当前："
,"tMnU:"+ //no args
       "The formula for estimating the mp3 file size (bytes) in 1 second is: bitRate × 1000 ÷ 8, currently: "

//@@zh="已打开:"
,"VJya:"+ //no args
       "Opened:"

//@@zh="打开失败："
,"YY7k:"+ //no args
       "Open failed: "

//@@zh="已执行Recorder.Destroy()"
,"VPJO:"+ //no args
       "Recorder.Destroy() executed"

//@@zh="不设置"
,"6BfR:"+ //no args
       "Not Set"

//@@zh="无名称，可能是因为从来没有打开过录音"
,"lDoQ:"+ //no args
       "No name, probably because the recording was never opened"

//@@zh="已重新拉取到{1}个设备，可切换要使用的麦克风"
,"vM9Z:"+ //args: {1}
       "Re-pull to {1} devices, switch which microphone to use"

//@@zh="拉取失败："
,"4EHk:"+ //no args
       "Pull failed:"

//@@zh="此浏览器不支持拉取设备列表"
,"2KHv:"+ //no args
       "This browser does not support pulling device lists"

//@@zh="已关闭"
,"q5nu:"+ //no args
       "Closed"

//@@zh="未打开录音"
,"10CI:"+ //no args
       "Recording not open"

//@@zh="定时不能小于100ms"
,"JsIA:"+ //no args
       "Timing cannot be less than 100ms"

//@@zh="定时时间到，开始自动调用停止..."
,"BQXI:"+ //no args
       "When the time is up, start to call automatically to stop..."

//@@zh="[定时{1}ms]"
,"UJ0C:"+ //args: {1}
       "[timing {1}ms] "

//@@zh="录制中："
,"GF0Y:"+ //no args
       "Recording: "

//@@zh="未打开录音"
,"jpoV:"+ //no args
       "Recording not open"

//@@zh="已取消定时停止"
,"7Xno:"+ //no args
       "Timed stop canceled"

//@@zh="已暂停"
,"DPvI:"+ //no args
       "Paused"

//@@zh="继续录音中..."
,"4P6z:"+ //no args
       "Resuming recording..."

//@@zh="启用takeoffEncodeChunk后stop返回的blob长度为0不提供音频数据"
,"Wjge:"+ //no args
       "After enabling takeoffEncodeChunk, the length of the blob returned by stop is 0 and no audio data is provided"

//@@zh="takeoffEncodeChunk接收到{1}片音频片段，正在合并成一个音频文件..."
,"j4R1:"+ //args: {1}
       "takeoffEncodeChunk received {1} audio chunks, merging into one audio file..."

//@@zh="合并"
,"QdKZ:"+ //no args
       "merge"

//@@zh="正在编码{1}..."
,"exSK:"+ //args: {1}
       "Encoding {1}..."

//@@zh="已录制"
,"V8He:"+ //no args
       "Recorded"

//@@zh="失败："
,"ENLS:"+ //no args
       "Fail: "

//@@zh="未打开录音"
,"rb0B:"+ //no args
       "Recording not open"

//@@zh="花{1}ms编码{2}B"
,"37rX:"+ //args: {1}-{2}
       ", it took {1}ms to encode {2}B, "

//@@zh="下载"
,"abXa:"+ //no args
       "Download"

//@@zh="播放"
,"GhtN:"+ //no args
       "Play"

//@@zh="需先录个音"
,"bh1I:"+ //no args
       "Need to record first"

//@@zh="码率列表有误，需要? to ? step ?结构"
,"hrO5:"+ //no args
       "The bitRate list is wrong, the ? to ? step ? structure is required"

//@@zh="开始批量编码，请勿进行其他操作~"
,"iPKE:"+ //no args
       "Start batch encoding, do not perform other operations~"

//@@zh="批量编码完成"
,"IIQy:"+ //no args
       "Batch encoding complete"

//@@zh="播放失败"
,"wcUU:"+ //no args
       "Play failed"

//@@zh="正在转码成wav..."
,"PxSY:"+ //no args
       "transcoding to wav..."

//@@zh="已转码成wav播放"
,"QCXF:"+ //no args
       "Transcoded into wav playback"

//@@zh="转码成wav失败："
,"ywQN:"+ //no args
       "Transcoding to wav failed: "

//@@zh="请先录音，然后停止后再播放"
,"zGph:"+ //no args
       "Please record first, then stop and play"

//@@zh="请先录音，然后停止后再上传"
,"8e05:"+ //no args
       "Please record first, then stop before uploading"

//@@zh="上传成功"
,"2C4x:"+ //no args
       "Successfully upload"

//@@zh="没有完成上传，演示上传地址无需关注上传结果，只要浏览器控制台内Network面板内看到的请求数据结构是预期的就ok了。"
,"k6Kb:"+ //no args
       "If the upload is not completed, the demo upload address does not need to pay attention to the upload result. As long as the request data structure seen in the Network panel in the browser console is expected, it is ok."

//@@zh="上传失败"
,"ReX6:"+ //no args
       "Upload failed"

//@@zh="开始上传到{1}，请稍候... （你可以先到源码 /assets/node-localServer 目录内执行 npm run start 来运行本地测试服务器）"
,"LzIA:"+ //args: {1}
       "Starting upload to {1}, requesting later... (You can first go to the source code /assets/node-localServer directory and execute npm run start to run the local test server)"

//@@zh="上传方式一【Base64】"
,"SsdM:"+ //no args
       "Upload method 1 [Base64] "

//@@zh="上传方式二【FormData】"
,"Oy4A:"+ //no args
       "Upload method 2 [FormData] "

//@@zh="请先录音，然后停止后再下载"
,"D3Vn:"+ //no args
       "Please record first, then stop before downloading"

//@@zh="点击{1}"
,"T6XS:"+ //args: {1}
       "Click {1}"

//@@zh="下载，或复制文本"
,"o5j6:"+ //no args
       "to download, or copy the text"

//@@zh="生成Base64文本"
,"IdYf:"+ //no args
       "Generate Base64 text"

//@@zh="下载 "
,"mB6v:"+ //no args
       "download "

//@@zh="因移动端绝大部分国产浏览器未适配Blob Url的下载，所以本demo代码在移动端未调用downA.click()。请尝试点击日志中显示的下载链接下载，无法下载就复制Base64"
,"0RBw:"+ //no args
       "Because the mobile browser may not be suitable for downloading Blob Url, this demo code does not call downA.click() on the mobile terminal. Please try to click the download link displayed in the log to download, if you cannot download, copy Base64"

//@@zh="浏览器不支持音频解码"
,"b6jA:"+ //no args
       "Browser does not support audio decoding"

//@@zh="{1}解码失败:"
,"Ks7F:"+ //args: {1}
       "{1} decoding failed: "

//@@zh="动态波形"
,"PAx1:"+ //no args
       "Dynamic Waveform"

//@@zh="音频可视化波形"
,"xatF:"+ //no args
       "Visualization Waveform"

//@@zh="音频可视化频率直方图"
,"hKcX:"+ //no args
       "Visualize Spectrum"

//@@zh="变速变调"
,"sqeb:"+ //no args
       "Variable speed and pitch"

//@@zh="（电话拨号按键信号）解码、编码"
,"xnKw:"+ //no args
       "(telephone dial key signal) decoding and encoding"

//@@zh="已切换波形显示为："
,"tIR3:"+ //no args
       "The switched waveforms are displayed as: "

//@@zh="当前网页不是安全环境（HTTPS），将无法获取录音权限，"
,"LLe9:"+ //no args
       "The current web page is not in a secure context (HTTPS), and the recording permission cannot be obtained, "

//@@zh="当前网页处在安全环境中"
,"atIl:"+ //no args
       "The current webpage is in a secure context"

//@@zh="https、file:///等"
,"u4vS:"+ //no args
       "https, file:///, etc."

//@@zh="点击打开录音开始哦，此浏览器{1}"
,"ntrR:"+ //args: {1}
       "Click to open the recording to start, this browser {1}"

//@@zh="支持录音"
,"3bjv:"+ //no args
       "support recording"

//@@zh="不支持录音"
,"HhOY:"+ //no args
       "does not support recording"

//@@zh="、"
,"jE1H:"+ //no args
       ", "

//@@zh="已启用Extensions："
,"yBBq:"+ //no args
       "Extensions enabled: "

//@@zh="注意：由于AudioWorklet内部"
,"f6Zn:"+ //no args
       "Note: Since the AudioWorklet internal"

//@@zh="1秒会产生375次回调"
,"KVKy:"+ //no args
       "375 callbacks will be generated in 1 second"

//@@zh="，在移动端可能会有性能问题导致浏览器回调丢失，进而导致录音数据、时长变短，PC端似乎无此影响，可通过定时1分钟录音来检测影响（如果短了1秒以上即为有问题）；在无明显优势好处的前提下，暂不建议启用。"
,"rLVJ:"+ //no args
       ", there may be performance problems on the mobile end, which may cause the browser callback to be lost, which will result in shorter recording data and duration. The PC end does not seem to have this effect, and the impact can be detected by timing the recording for 1 minute (if it is shorter than 1 second, it means problems); on the premise of no obvious advantages and benefits, it is not recommended to enable it. "

//@@zh="当前页面处在在iframe中，但故意未进行任何处理，"
,"bOsV:"+ //no args
       "The current page is in an iframe, but no processing is done on purpose, "

//@@zh="当前是同域"
,"0rFB:"+ //no args
       "Currently in the same domain"

//@@zh="并且已发生跨域，未设置相应策略权限永远是拒绝的"
,"aJ0a:"+ //no args
       "And cross-domain has occurred, and the corresponding policy permission is not set and the permission will always be denied"

//@@zh="第{1}个"
,"NEZT:"+ //args: {1}
       "{1}th"

//@@zh="需开始录音"
,"wHHR:"+ //no args
       "Need to start recording"

//@@zh="需勾选takeoffEncodeChunk"
,"0GX4:"+ //no args
       "TakeoffEncodeChunk needs to be checked"

//@@zh="已注入{1}小时{2}分钟数据，输入pcm: {3} MB，输出音频: {4} MB（已清除不占用内存）。设置共注入{5}小时数据，注入耗时：{6}"
,"Emz4:"+ //args: {1}-{6}
       "{1} hours {2} minutes of data have been injected, input pcm: {3} MB, output audio: {4} MB (cleared and does not occupy memory). A total of {5} hours of data are set to be injected, and the injection time is: {6}"

//@@zh="已通过 循环+静音 播放视频来阻止自动锁屏"
,"K0Jo:"+ //no args
       "Prevented auto-lock screen by playing video in loop+mute"

//@@zh="已通过wakeLock阻止自动锁屏"
,"RGYV:"+ //no args
       "Automatic screen lock blocked by wakeLock"

//@@zh="恢复锁屏"
,"zCjJ:"+ //no args
       "restore lock screen"

//@@zh="已恢复自动锁屏"
,"tMgx:"+ //no args
       "Automatic screen lock restored"

//@@zh="wakeLock错误："
,"KCZr:"+ //no args
       "wakeLock error: "

//@@zh="正在加载{1} ..."
,"33ji:"+ //args: {1}
       "Loading {1} ..."

//@@zh="正在加载{1} ..."
,"7bbv:"+ //args: {1}
       "Loading {1} ..."

//@@zh="请先录音"
,"AYTX:"+ //no args
       "please record first"

//@@zh="目前只支持mp3格式的录音重新转换，因为其他格式buffers可能已被污染转换过"
,"FXjK:"+ //no args
       "Currently only supports re-conversion of recordings in mp3 format, because buffers in other formats may have been polluted and converted"

//@@zh="已转换"
,"dtC1:"+ //no args
       "converted"

//@@zh="不存在变速变调设置，或不能开启转换"
,"Hdpx:"+ //no args
       "There is no variable speed and pitch setting, or the conversion cannot be turned on"

//@@zh="已停用变速变调"
,"AkRn:"+ //no args
       "Variable speed and pitch disabled"

//@@zh="不能开启Sonic.Async，浏览器不支持WebWorker操作，降级不变速变调"
,"fUYK:"+ //no args
       "Sonic.Async cannot be enabled, the browser does not support WebWorker operations, and the downgrade does not change the speed and pitch"

//@@zh="已修改变速变调："
,"OYzl:"+ //no args
       "Modified variable speed and pitch: "

//@@zh="已开启变速变调："
,"fqDa:"+ //no args
       "With variable speed and pitch turned on: "

//@@zh="sonic -> DemoFragment.PlayBuffer错误，无法实时播放反馈"
,"Xxw4:"+ //no args
       "sonic -> DemoFragment.PlayBuffer error, unable to play feedback in real time"

//@@zh="请先录音"
,"i4N2:"+ //no args
       "Please record first"

//@@zh="开始识别DTMF..."
,"B3NQ:"+ //no args
       "Start recognizing DTMF..."

//@@zh="发现按键[{1}]，位于{2}ms处"
,"FJZq:"+ //args: {1}-{2}
       "Keypress found [{1}] at {2}ms"

//@@zh="识别完毕，发现按键："
,"dYNC:"+ //no args
       "After the recognition is complete, the button is found: "

//@@zh="识别完毕，未发现按键信息"
,"Mb8l:"+ //no args
       "The identification is complete, but no key information is found"

//@@zh="发现按键[{1}]，位于{2}ms处"
,"NvUF:"+ //args: {1}-{2}
       "Keypress found [{1}] at {2}ms"

//@@zh="没有开始录音，按键会存储到下次录音"
,"V5cg:"+ //no args
       "If the recording is not started, the key will be stored until the next recording"

//@@zh="这个编码器无提示信息"
,"X1tM:"+ //no args
       "This encoder has no prompt information"

//@@zh="{1}编码器稳定版，"
,"N5Ed:"+ //args: {1}
       "{1} encoder stable version, "

//@@zh="{1}编码器beta版，"
,"aQBD:"+ //args: {1}
       "{1} encoder beta version, "

//@@zh="{1}转码超快"
,"O9Zr:"+ //args: {1}
       "{1} encoding is super fast"

//@@zh="支持边录边转码(Worker)"
,"Ucx3:"+ //no args
       "Support encoding while recording (Worker)"

//@@zh="仅支持标准UI线程转码"
,"YJPi:"+ //no args
       "Only standard UI thread encoding is supported"

//@@zh="使用{1}录音需要加载的js："
,"DFs2:"+ //args: {1}
       "The js that needs to be loaded when using {1} recording: "

//@@zh="【压缩版】："
,"YThG:"+ //no args
       "[Distribution File]: "

//@@zh="【源文件】："
,"EYBu:"+ //no args
       "[Source File]: "

//@@zh="{1}已加载，可以录音了"
,"seoC:"+ //args: {1}
       "{1} is loaded and ready to record"

//@@zh="{1}编码器压缩版"
,"5czG:"+ //args: {1}
       "{1} encoder distribution version"

//@@zh="{1}编码器源码版"
,"6Cyh:"+ //args: {1}
       "{1} encoder source version"

//@@zh="正在加载{1}"
,"JT36:"+ //args: {1}
       "Loading {1}"

//@@zh="，请勿操作..."
,"KvWE:"+ //no args
       ", do not operate..."

//@@zh="js加载失败:"
,"b6iP:"+ //no args
       "js failed to load: "

]);
//*************** End srcFile=../index.html ***************

//@@User Code-2 Begin 手写代码放这里 Put the handwritten code here @@

//@@User Code-2 End @@

}));