ACMS.Config.Edit.autoresizeMin=30;ACMS.Config.Edit.autoresizeMax=640;
ACMS.Dispatch.Edit._item=function(item,$unit){var Edit=this;$(".removethis",item).click(function(){if(confirm("\u3053\u306e\u30e6\u30cb\u30c3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))Edit._remove(item,$unit)});if(-1===navigator.userAgent.indexOf("MSIE 6"))$(':input[name="sort[]"]',item).change(function(){Edit._change(this,$unit)});Edit._media(item);$(".togglebody",item).click(function(event){var $itemBody=$(ACMS.Config.Edit.itemBodyMark,item);
var nextStatus=$itemBody.is(":hidden")?"Close":"Open";if(event.shiftKey)$(ACMS.Config.Edit.itemMark,$unit).each(function(){var $icon=$(".togglebody > i",this);var slide=nextStatus=="Close"?"slideDown":"slideUp";$(ACMS.Config.Edit.itemBodyMark,this)[slide](function(){if($icon.hasClass("acms-icon-open")){$icon.removeClass("acms-icon-open");$icon.addClass("acms-icon-close")}else{$icon.removeClass("acms-icon-close");$icon.addClass("acms-icon-open")}})});else{var $icon=$("i",this);$itemBody.slideToggle("fast",
function(){if($icon.hasClass("acms-icon-open")){$icon.removeClass("acms-icon-open");$icon.addClass("acms-icon-close")}else{$icon.removeClass("acms-icon-close");$icon.addClass("acms-icon-open")}})}});$(ACMS.Config.Edit.itemHeadMark,item).dblclick(function(){var $tgt=$unit.$target;$tgt.hide().detach();ACMS.Library.scrollToElm(item,{k:0.3,m:30});$(item).after($tgt);$tgt.fadeIn("fast")});$(".detail-column-head",item).each(function(){var elm=this;$("a.toggle",elm).click(function(){$(elm).nextAll("tr").toggle();
return false}).click()});if($(':input[name^="break_label_"]',item).size()){$(':input[name="align[]"]',item).css("visibility","hidden");$(".js-align_label",item).css("visibility","hidden")}var browser=ACMS.Dispatch.Utility.browser();if(browser.ltIE8)$('textarea[name^="text_text_"]',item).each(function(){var $self=$(this);$self.width($self.width())});$('textarea[name^="text_text_"]',item).keyup(function(){var $self=$(this),$item=$(item),height;$item.css("height",$item.height()+"px");var browser=ACMS.Dispatch.Utility.browser();
if(!(browser.ltIE6||browser.ltIE7||browser.ltIE8))$self.height(ACMS.Config.Edit.autoresizeMin);$self.attr("scrollHeight");height=$self.get(0).scrollHeight;if(ACMS.Config.Edit.autoresizeMax<height){$self.height(ACMS.Config.Edit.autoresizeMax);$self.css("overflow","auto")}else{$self.height(height);$self.css("overflow","hidden")}$item.css("height","auto")}).keyup();$('textarea[name^="text_text_"]',item).each(function(){Edit._emojiedit(this,item)});$(':input[name^="text_tag_"]',item).change(function(){var $textarea=
$('textarea[name^="text_text_"]',item);var $type=$(this).val();if($textarea.length>1){$textarea.focus(function(){if("wysiwyg"==$type){removeFocus();ACMS.Dispatch.emoditor($(this));$(".js-tag_insertion",item).hide()}});if("wysiwyg"!=$type){removeFocus();$textarea.unbind("focus")}}else if("wysiwyg"==$type){ACMS.Dispatch.emoditor($textarea);$(".js-tag_insertion",item).hide()}else if($textarea.data("emoditor")){$textarea.data("emoditor").destroy();$textarea.removeData("emoditor");$(".js-tag_insertion",
item).show()}function removeFocus(){$textarea.each(function(index,el){$emoditor=$(el);if($emoditor.data("emoditor")){$emoditor.data("emoditor").destroy();$emoditor.removeData("emoditor");$(".js-tag_insertion",item).show()}})}}).change();if($("img.column-map",item).size()){var region="";if(ACMS.Config.s2dRegion)region="&region="+ACMS.Config.s2dRegion;ACMS.Library.googleLoadProxy("maps","3",{callback:function(){Edit.map(item)},other_params:"sensor="+ACMS.Config.Gmap.sensor+region});ACMS.Library.yahooLoadProxy({callback:function(){Edit.yolp(item)}})}$(':input[name="align[]"]',
item).change(function(){var $closest=$(this).closest(".entryFormColumnItem");if(this.value==="hidden")$closest.addClass("entryFormColumnItem-hidden");else $closest.removeClass("entryFormColumnItem-hidden")}).change()};