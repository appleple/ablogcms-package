ACMS.Dispatch.highslide=function(elm){(function(conf){$(elm).click(function(){return hs.expand(elm,conf)})})(ACMS.Config.hsConfig)};
ACMS.Dispatch._highslideInit=function(){loadClosureFactory.css(ACMS.Config.jsRoot+"library/highslide/highslide.css");var browser=ACMS.Dispatch.Utility.browser();if(browser.ltIE6)loadClosureFactory.css(ACMS.Config.jsRoot+"library/highslide/highslide-ie6.css");hs.showCredits=false;$.extend(hs.lang,ACMS.Config.hsLang);hs.Expander.prototype.onBeforeGetCaption=function(sender){$c=$("p.caption",sender.a.parentNode);sender.caption=$c.clone(true).removeClass("caption").addClass("highslide-caption")[0];$c.css("visibility",
"hidden")};hs.Expander.prototype.onAfterClose=function(sender){$c=$("p.caption",sender.a.parentNode);sender.caption=null;$c.css("visibility","visible")};for(var i=0;i<hs.onReady.length;i++)hs.onReady[i]()};
