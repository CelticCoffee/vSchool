$(document).ready(function() {

	// popovers
	var userpassContent = "Specify username/password separated by a colon and Base64 encoded for CardConnect API.  For ex.  testing:testing123 is dGVzdGluZzp0ZXN0aW5nMTIz.";
	var cardTypesContent = "Specify the card types allowed.  The default is all.  "
							+ "To enable all send the following value: AMEX|DISC|MC|VISA or a combination of depending on what you want";
	$("#ccUserpass").popover({ trigger: "click", content: userpassContent, placement: "bottom" });
	$("#ccCardTypes").popover({ trigger: "click", content: cardTypesContent, placement: "bottom" });

	// tooltips
	var asyncValidContent = "If selected, inputs will be validated onBlur instead of onSubmit of the form.";
	var displayCvvContent = "If selected, the CVV code will be displayed as input.";
	var displayBAContent = "If selected, the billing address will be displayed as input.";
	var authCaptureContent = "If selected, an authorization capture will take place instead of just an authorization.";
	var tokenizeContent = "If selected, the credit card will be tokenized and returned to the caller.";
	var cancelContent = "If selected, a cancel button will be displayed within the hosted payment page.";
	$("#ccAsync").tooltip({ trigger: "hover", title: asyncValidContent, placement: "left" });
	$("#ccDisplayCvv").tooltip({ trigger: "hover", title: displayCvvContent, placement: "left" });
	$("#ccDisplayAddress").tooltip({ trigger: "hover", title: displayBAContent, placement: "left" });
	$("#ccCapture").tooltip({ trigger: "hover", title: authCaptureContent, placement: "left" });
	$("#ccTokenize").tooltip({ trigger: "hover", title: tokenizeContent, placement: "left" });
	$("#ccCancel").tooltip({ trigger: "hover", title: cancelContent, placement: "left" });

	$("#checkoutIframe").click(function(e) {
		
		$("#checkout").attr("target", "hppframe");
		e.preventDefault();
		hideShow();
		$("#checkout").submit();
		
	});
	
	$("#checkoutStandalone").click(function(e) {
		e.preventDefault();
		$("#checkout").removeAttr("target");
		$("#checkout").submit();
	});
	
	$("#ccAsyncChk").click(function(e) {
		setHiddenField($("#ccAsyncChk"), $("#ccAsync"))
	});
	
	$("#ccDisplayCvvChk").click(function(e) {
		setHiddenField($("#ccDisplayCvvChk"), $("#ccDisplayCvv"))
	});
	
	$("#ccDisplayAddressChk").click(function(e) {
		setHiddenField($("#ccDisplayAddressChk"), $("#ccDisplayAddress"))
	});
	
	$("#ccCaptureChk").click(function(e) {
		setHiddenField($("#ccCaptureChk"), $("#ccCapture"))
	});
	
	$("#ccTokenizeChk").click(function(e) {
		setHiddenField($("#ccTokenizeChk"), $("#ccTokenize"))
	});
	
	$("#ccCancelChk").click(function(e) {
		setHiddenField($("#ccCancelChk"), $("#ccCancel"))
	});
	
	$("#reset").click(function() {
		hideShow();
	});
	
	$("#btnAdd").bind("click", addCustomParam);
	
});

function setHiddenField(checkbox, hidden) {
	if (checkbox.prop('checked') == true) {
		hidden.val("1");
	} else {
		hidden.val("0");
	}
}

function hideShow() {
	$("#formDiv").toggleClass("hide");
	$("#iframeDiv").toggleClass("hide");
}

function addCustomParam(){
	var customParamId = $("#customerParameter").val() + "tr";
	var hiddenId = $("#customerParameter").val();
	var customValue = $("#customValue").val();
    $("#customData tbody").append(
        "<tr>"+
        "<td>" + $("#customerParameter").val() + "</td>" +
        "<td>" + $("#customValue").val() + "</td>" +
        '<td><span id="' + customParamId + '" ' + 'class="glyphicon glyphicon-trash" style="cursor: pointer;"></span></td>' +
        "</tr>");
    
    	$("#customerParameter").val("");
    	$("#customValue").val("");
    	
        $("#" + customParamId).bind("click", deleteCustomParam);
        
        $('<input>').attr({
            type: 'hidden',
            id: hiddenId,
            name: hiddenId,
            value: customValue
        }).appendTo('#checkout');
};

function deleteCustomParam(){
    var par = $(this).parent().parent(); //tr
    par.remove();
    var hiddenIdSpan = $(this).attr('id');
    var hiddenId = hiddenIdSpan.substring(0, hiddenIdSpan.length-2);
    $("#" + hiddenId).remove();
};
