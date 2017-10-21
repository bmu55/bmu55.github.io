function fnShowRow(i) {
    var txtHTML = $('#main-con').html();
    var txtAdd = $('.template').html();
    txtAdd = txtAdd.replace(/=@=/g,i);
    $('#main-con').html(txtHTML+txtAdd);
}

function fnAdd() {
    arr.push(false);
    fnShowRow(arr.length-1);
}

function fnDel() {
    if (arr.length <2 ) return;
    var str='<!--end section_' + (arr.length-2) + '-->';
    var txtHtml = $('#main-con').html();
    var pos = txtHtml.indexOf(str);
    if (pos>0) $('#main-con').html(txtHtml.substring(0,pos+str.length));
    arr.pop();
}

function fnSetParcel(i) {
    arr[i]=true;
    $("input[name='trigger_" + i + "'").val("true");
    $("#pallet_"+i).hide();
    $("#parcel_"+i).show();
}

function fnSetPallet(i) {
    arr[i]=false;
    $("input[name='trigger_" + i + "'").val("false");
    $("#pallet_"+i).show();
    $("#parcel_"+i).hide();
}

function SendData() {
    console.log("start print");
    $("form input,select").not('[type="submit"]').each(function() {
        console.log($(this).attr('name') + ' = ' + $(this).val());
    });
}
