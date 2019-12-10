$(document).ready(function() {
    console.log("coonect");

    $('#list-item').click(function() {


        $('li').css({
            'display': 'block',
            'padding': '8px 9px',
            'color': 'white'
        });

    });

    $('#Adminadd').click(function() {
        var username = $('#adminusername').val()
        var pass = $('#adminpassword').val()
        if (username === "admin" && pass === "admin") {
            $('.adminID').css('visibility', 'visible');
            $('.error').css('visibility', 'hidden');
            return false;
        } else {
            $('.adminID').css('visibility', 'hidden');
            $('.error').css('visibility', 'visible');
            return false;
        }
    });

    $('.serch').click(function() {
        var staffid = $('#staffid').val()
        if (staffid == 1234) {
            $('.staffinfo').css('visibility', 'visible');
            $('.error').css('visibility', 'hidden');
        } else {
            $('.error').css('visibility', 'visible');
            $('.staffinfo').css('visibility', 'hidden');
        }
    });


});

function SelectedTextValue(ele) {
    if (ele.selectedIndex == 0) {
        var selectedText = ele.options[ele.selectedIndex].innerHTML;
        var selectedValue = ele.value;
        document.getElementById("txtchang").value = "Envrilab";
    } else if (ele.selectedIndex == 1) {
        document.getElementById("txtchang").value = "B-Chemlab";
    } else if (ele.selectedIndex == 2) {
        document.getElementById("txtchang").value = "B-Microlab";
    } else if (ele.selectedIndex == 3) {
        document.getElementById("txtchang").value = "G-Aplab";
    } else if (ele.selectedIndex == 4) {
        document.getElementById("txtchang").value = "G-Chemlab";
    } else if (ele.selectedIndex == 5) {
        document.getElementById("txtchang").value = "G-Micraolab";
    } else if (ele.selectedIndex == 6) {
        document.getElementById("txtchang").value = "Skill-lab";
    } else if (ele.selectedIndex == 7) {
        document.getElementById("txtchang").value = "Assesslab";
    } else if (ele.selectedIndex == 8) {
        document.getElementById("txtchang").value = "B-Aplab";
    }
}



//