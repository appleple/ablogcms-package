ACMS.Config.Edit.categoryDialogTitle="\u30ab\u30c6\u30b4\u30ea\u30fc\u306e\u8ffd\u52a0";
ACMS.Dispatch.Edit._category=function(select){var url=ACMS.Library.acmsLink({tpl:"ajax/edit/category-add-form.html",Query:{hash:Math.random()}},true);$.get(url,function(html){var $form=$($.parseHTML(html));$form.dialog({title:ACMS.Config.Edit.categoryDialogTitle,modal:true,draggable:false,resizable:false,close:function(){$form.dialog("destroy");$form.remove()},buttons:{"\u8ffd\u52a0":function(){$form.dialog("disable");var url=ACMS.Library.acmsLink({tpl:"ajax/edit/category-add-response.json",Query:{hash:Math.random()}},
true);var data=ACMS.Library.getPostData($form);$.ajax({url:url,type:"post",dataType:"json",data:data,success:function(data){$("#js-category_add_msg",$form).hide();$.each(["validator-name-required","validator-code-required","validator-code-double","validator-code-reserved","validator-scope-required"],function(){$('label[for="'+this+'"]',$form).attr("class","validator-result-")});$form.dialog("enable");if(!data.isValid){$("#js-category_add_msg",$form).show();$('label[for="validator-name-required"]').attr("class",
"validator-result-"+data.nameRequired);$('label[for="validator-code-required"]').attr("class","validator-result-"+data.codeRequired);$('label[for="validator-code-double"]').attr("class","validator-result-"+data.codeDouble);$('label[for="validator-code-reserved"]').attr("class","validator-result-"+data.codeReserved);$('label[for="validator-scope-required"]').attr("class","validator-result-"+data.scopeRequired);if(data.nameRequired==""&&data.codeRequired==""&&data.codeDouble==""&&data.codeReserved==
""&&data.scopeRequired=="")$('label[for="validator-scope-tree"]').attr("class","validator-result-0")}else{$(select).append($("<option></option>").val(data.id).text(data.name)).val(data.id);$form.dialog("close")}}})}}});$form.dialog("open")})};