
    $(function () {
        $('#qrcodeTable').qrcode({
            render: "table",
            text: "http://qingyimeng.com",
            width: "265",
            height: "265"
        });
    });
    function createqrcode() {
        $("#qrcodeTable").html("");
        $('#qrcodeTable').qrcode({
            render: "table",
            text: $("#txt_barcod").val(),
            width: "265",
            height: "265"
        });
    }