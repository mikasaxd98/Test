$( document ).ready(function() {

    function getDate(selector) {
        var today = new Date();
        var day = today.getDay();
        var month = today.getMonth();
        var year = today.getUTCFullYear();
        var newDate = day < 10 ? "0" + day : day;

        return $(selector).val(newDate + "-" + month + "-" + year);
    }


    getDate("#birthday-calendar");
    getDate("#added-calendar");

    $(function () {

        $("#birthday-calendar").datepicker({

            'format': 'dd-mm-yyyy',
            'autoclose': true,

        })
    });

    $("#added-calendar").datepicker({

        'format': 'dd-mm-yyyy',
        'autoclose': true
    })

    $("#form0").validate({

        errorElement: "div",
        rules: {
            Phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            UserId: {
                minlength: 3,
                maxlength: 3,
                required: true,
                number: true,
            },
            NameSurName: {
                required: true
            },
            Superviser: {

                required: true
            },
            Department: {
                required: true
            },
            Status: {
                required: true
            }

        }
    });
    
    $(".btn-close").on('click',function(){

        $('form').hide();
    })

    $(".form").on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: '/ajax.php',
            method: 'post',
            data: new FormData(this),
            success: function (data) {
                alert('ok')
            }
        });
    });
})