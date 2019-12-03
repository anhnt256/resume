$(document).ready(function () {
    $('#send_message').click(function (e) {
        e.preventDefault();
        var error = false;
        var ccr_name = $('#full-name').val();
        var ccr_email = $('#contact-email').val();
        var ccr_phone = $('#contact-phone').val();
        var ccr_capcha = $('#contact-capcha').val();
        var ccr_message = $('#your-message').val();
        if (ccr_name.length == 0) { var error = true; $('#name_error').fadeIn(500); } else { $('#name_error').fadeOut(500); }
        if (ccr_email.length == 0 || ccr_email.indexOf('@') == '-1') { var error = true; $('#email_error').fadeIn(500); } else { $('#email_error').fadeOut(500); }
        if (ccr_capcha.length == 0) { var error = true; $('#capcha_error').fadeIn(500); } else { $('#capcha_error').fadeOut(500); }
        if (ccr_phone.length == 0) { var error = true; $('#number_error').fadeIn(500); } else { $('#number_error').fadeOut(500); }
        if (ccr_message.length == 0) { var error = true; $('#message_error').fadeIn(500); } else { $('#message_error').fadeOut(500); }
        if (error == false) {
            SentMail();
        }
    });
});