function fnShowRow(i) {
    var txtHTML = $('#main-con').html();
    var txtAdd = $('.template').html();
    txtAdd = txtAdd.replace(/=@=/g,i);
    $('#main-con').html(txtHTML+txtAdd);
}

function fnAdd() {
    fnShowRow(idx);
    idx++
}

function fnDel() {
    if (idx <2 ) return;
    var str='<!--end section_' + (idx-2) + '-->';
    var txtHtml = $('#main-con').html();
    var pos = txtHtml.indexOf(str);
    if (pos>0) $('#main-con').html(txtHtml.substring(0,pos+str.length));
    idx--;
}

function fnSetParcel(i) {
    $("input[name='trigger_" + i + "'").val("Parcel");
    $("#pallet_"+i).hide();
    $("#parcel_"+i).show();
}

function fnSetPallet(i) {
    $("input[name='trigger_" + i + "'").val("Pallet");
    $("#pallet_"+i).show();
    $("#parcel_"+i).hide();
}

function SendData() {
    console.log("start print");
    $("form input,select").not('[type="submit"]').each(function() {
        console.log($(this).attr('name') + ' = ' + $(this).val());
    });
}
