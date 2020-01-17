function checkDate() {
    if ($("#checkIn").val() == '' || $("#checkOut").val() == '') {
        $("#checkDate").html("");
        return;
    }
    var checkIn = new Date($("#checkIn").val()); //設定 checkIn 的變數內有一個函式
    var checkOut = new Date($("#checkOut").val());//設定 checkOut 的變數內有一個函式
    var days = checkOut.getDate() - checkIn.getDate(); //白天 checkOut - checkIn 的 value
    var night = days - 1;
    $("#checkDate").html(days + "天" + night + "夜");　//最後顯示日期
    var price = 1380;
    $(".billPrice").html("$" + days * price);
}
//控制輸入日期後所顯示的時間


function booking() {
    $.colorbox({
        inline: true,
        width: "90%",
        href: "#booking",
        close: ""
        //控制第二個 container 彈窗顯示
    });
}

function cancel() {
    $.colorbox.close();

    // cancel 按鈕
}


//訂購頁面
function send() {
    if ($("#checkIn").val() == '') {
        alert("請選擇訂房日期");
        return;
    }
    if ($("#checkOut").val() == '') {
        alert("請選擇退房日期");
        return;
    }
    window.location.href = "hotel_order_success.html"
}
//按鈕點擊後跳到訂購成功頁面

function goBack() {
    window.location.href = "hotel_index.html"
}
//訂購完成後打叉回到首頁
