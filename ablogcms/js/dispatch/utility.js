ACMS.Dispatch.Utility=function(context){var Config=ACMS.Config;if(Config.unitFixAlign!="off"){$("div[class^=column-image], div[class^=column-file], div[class^=column-eximage]",context).each(function(){var $img=$("img",this);var width=$img.width();var offset=$img.outerWidth()-width;var style=$(this).attr("style");if(ACMS.Dispatch.Utility.browser().ltIE9)width=parseInt($img.attr("width"));if(width&&style===void 0&&!$(this).hasClass("js_notStyle"))$(this).width(width+offset);if(!$(".caption",this).size())$(this).addClass("nocaption")});
$("[class^=column-youtube-], [class^=column-video-]",context).each(function(){var $video=$("iframe",this);var width=$video.attr("width");var style=$(this).attr("style");if(width&&style===void 0&&!$(this).hasClass("js_notStyle"))$(this).width(width)});$("[class^=column-map], [class^=column-yolp]",context).each(function(){var region="";if(ACMS.Config.s2dRegion)region="&region="+ACMS.Config.s2dRegion;ACMS.Library.googleLoadProxy("maps","3",{callback:function(){var style=$(this).attr("style");if(style===
void 0&&!$(this).hasClass("js_notStyle"))$(this).width($(":first-child",this).width())},other_params:"sensor="+ACMS.Config.Gmap.sensor+region})});if(ACMS.Dispatch.Utility.browser_ie6()&&!$.boxModel){$(".column-image-center, .column-file-center, .column-youtube-center, .column-eximage-center, .column-media-center",context).css("width","100%");$(".column-map-center",context).wrap('<div style="text-align:center; width:100%"></div>')}}if(Config.keyword&&!Config.admin)$.each(Config.keyword.split(" "),
function(j){var word=this;$(Config.searchKeywordHighlightMark,context).find("*").addBack().contents().filter(function(){if(this.nodeType===3){var elm=this;var tokens=elm.nodeValue.split(word);if(1==tokens.length)return true;for(var i=0;i<tokens.length;i++){if(!!i){$word=$(document.createTextNode(word));$(elm).before($word);$word.wrap('<span class="'+Config.searchKeywordMatchClass+(parseInt(j,10)+1)+'"></span>')}$(elm).before(tokens[i])}$(elm).remove()}})});$("[class*="+Config.toggleHeadClassSuffix+
"]",context).css("cursor","pointer").click(function(){if(!(new RegExp("([^\\s]*)"+Config.toggleHeadClassSuffix)).test(this.className))return false;var mark=RegExp.$1;$target=$("."+mark+Config.toggleBodyClassSuffix);if(!$target.size())return false;$target.slideToggle();return false});$('[class*="'+Config.toggleBodyClassSuffix+'"]',context).hide();$("[class*="+Config.fadeHeadClassSuffix+"]",context).css("cursor","pointer").click(function(){if(!(new RegExp("([^\\s]*)"+Config.fadeHeadClassSuffix)).test(this.className))return false;
var mark=RegExp.$1;$target=$("."+mark+Config.fadeBodyClassSuffix);if(!$target.size())return false;"none"==$target.css("display")?$target.fadeIn():$target.fadeOut();return false});$('[class*="'+Config.fadeBodyClassSuffix+'"]',context).hide();var $link=$(Config.styleSwitchStyleMark,context);if($link.size()){var styleName=$.cookie("styleName");if(styleName)ACMS.Library.switchStyle(styleName,$link)}$(Config.styleSwitchMark,context).click(function(){ACMS.Library.switchStyle(this.rel,$(Config.styleSwitchStyleMark));
return false});$(Config.inputEvalValueMark,context).each(function(){$(this).val(eval($(this).val()))});$(Config.commentCookieMark,context).each(function(){if(!$.cookie("acms_comment_name"))return true;$("input:text[name=name]",this).val($.cookie("acms_comment_name"));$("input:text[name=mail]",this).val($.cookie("acms_comment_mail"));$("input:text[name=url]",this).val($.cookie("acms_comment_url"));$("input:password[name=pass]",this).val($.cookie("acms_comment_pass"));$("input:checkbox[name=persistent]",
this).attr("checked","checked")});$(Config.commentCookieUserMark,context).each(function(){if(!$.cookie("acms_user_name"))return true;var name=$.cookie("acms_user_name");var mail=$.cookie("acms_user_mail");var url=$.cookie("acms_user_url");if(!name)name="";if(!mail)mail="";if(!url)url="";$("input:text[name=name]",this).replaceWith("<strong>"+name+'</strong><input type="hidden" name="name" value="'+name+'" />');$("input:text[name=mail]",this).replaceWith("<strong>"+mail+'</strong><input type="hidden" name="mail" value="'+
mail+'" />');$("input:text[name=url]",this).replaceWith("<strong>"+url+'</strong><input type="hidden" name="url" value="'+url+'" />')});$(Config.readyFocusMark,context).focus();var $elm=$(Config.readyScrollMark,context);if($elm.size())ACMS.Library.scrollToElm($elm);$(Config.copyrightMark,context).click(function(){return hs.htmlExpand(this,{objectType:"iframe",wrapperClassName:"draggable-header",headingText:this.title,align:"center",width:$(window).width()*0.5,height:$(window).height()*0.5,dimmingOpacity:0.75,
dimmingDuration:25})});function msie_under8(){var _ua=ua();if(_ua.ltIE8||_ua.ltIE7||_ua.ltIE6)return true;else return false}};
ACMS.Dispatch.Utility.browser=function(){var _ua=function(){var browser=ACMS.Dispatch.Utility.getBrowser();var IE6,IE7,IE8,IE9=false;if(browser=="ie9")IE9=true;else if(browser=="ie8"){IE9=true;IE8=true}else if(browser=="ie7"){IE9=true;IE8=true;IE7=true}else if(browser=="ie6"){IE9=true;IE8=true;IE7=true;IE6=true}return{ltIE6:IE6,ltIE7:IE7,ltIE8:IE8,ltIE9:IE9,mobile:/^(.+iPhone.+AppleWebKit.+Mobile.+|^.+Android.+AppleWebKit.+Mobile.+)$/i.test(navigator.userAgent.toLowerCase()),tablet:/^(.+iPad;.+AppleWebKit.+Mobile.+|.+Android.+AppleWebKit.+)$/i.test(navigator.userAgent.toLowerCase())}}();
return _ua};ACMS.Dispatch.Utility.browser_ie6=function(){var _ua=ACMS.Dispatch.Utility.browser();if(_ua.ltIE6)return true;else return false};
ACMS.Dispatch.Utility.getBrowser=function(){var ua=window.navigator.userAgent.toLowerCase();var ver=window.navigator.appVersion.toLowerCase();var name="unknown";if(ua.indexOf("chrome")!=-1)name="chrome";else if(ua.indexOf("safari")!=-1)name="safari";else if(ua.indexOf("opera")!=-1)name="opera";else if(ua.indexOf("firefox")!=-1)name="firefox";else if(ua.indexOf("trident/7")!=-1)name="ie11";else if(ua.indexOf("msie")!=-1)if(ver.indexOf("msie 6.")!=-1)name="ie6";else if(ver.indexOf("msie 7.")!=-1)name=
"ie7";else if(ver.indexOf("msie 8.")!=-1)name="ie8";else if(ver.indexOf("msie 9.")!=-1)name="ie9";else if(ver.indexOf("msie 10.")!=-1)name="ie10";else name="ie";return name};
