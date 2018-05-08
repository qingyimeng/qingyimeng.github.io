	$.fn.formValid = function () {
		return $(this).valid({
			errorPlacement: function (error, element) {
				element.parents('.formValue').addClass('has-error');
				element.parents('.has-error').find('i.error').remove();
				element.parents('.has-error').append('<i class="form-control-feedback fa fa-exclamation-circle error" data-placement="left" data-toggle="tooltip" title="' + error + '"></i>');
				$("[data-toggle='tooltip']").tooltip();
				if (element.parents('.input-group').hasClass('input-group')) {
					element.parents('.has-error').find('i.error').css('right', '33px')
				}
			},
			success: function (element) {
				element.parents('.has-error').find('i.error').remove();
				element.parent().removeClass('has-error');
			}
		});
	}
    $(function () {
        $('#qrcodeTable').qrcode({
            render: "table",
            text: "http://qingyimeng.com",
            width: "265",
            height: "265"
        });
    });
    function createqrcode() {
        if (!$('#form1').formValid()) {
            return false;
        }
        $("#qrcodeTable").html("");
        $('#qrcodeTable').qrcode({
            render: "table",
            text: $("#txt_barcod").val(),
            width: "265",
            height: "265"
        });
    }