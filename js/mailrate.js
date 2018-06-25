$(function () {
    //Textare auto growth
    autosize($('textarea.auto-growth'));

    //Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm',
        clearButton: true,
        weekStart: 1
    });

    $('.datepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        clearButton: true,
        date: false
    });

    $('.insurance-checkbox').change(function () {
        if (this.checked) {
            showPromptMessage();
        }
    });


    $('.price-breakup-link').click(function () {
        showHtmlMessage();
    });


});


function showPromptMessage() {
    swal({
        title: "Insurance Calculator!",
        text: "Please enter the item value:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Item Value"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("Please enter the item value!"); return false
        }
        swal("Insurance Charges!", "Insurance for AED " + inputValue + " is: AED 10"  , "success");
    });
}


function showHtmlMessage() {
    swal({
        title: "PRICE <small>BREAKUP</small>!",
        text: $("#price-breakup").html(),
        html: true
    });
}