;(function ($) {
    $('html').ready(function () {
        $('.section_1-cont')
            .fadeIn(600);
        $('.reg_link')
            .css(
                'outline','none'
            )

    });
    $('.input_inner').focus(function () {
        $(this).css('transform', 'scale(0.95');
    }).blur(function () {
        $(this).css('transform', 'scale(1');
    });
    var login = $('.login'),
        pas1 = $('.pass1'),
        pas2 = $('.pass2'),
        eMail = $('.email'),
        passes = $('.password'),
        locVar = '',
        logVal = '',
        pasVal = '',
        mailVal = '',
        warning = $('.warn_block'),
        textWarn = '';
    function warnAnim (){
        warning.text(textWarn).fadeIn(500).delay(1000).fadeOut(500)
    }



    function trueStyle() {
        $(locVar).css({
            'background-color': 'rgba(137, 255, 164, 0.36)',
            // 'border-bottom':'2px solid rgba(137, 255, 164, 0.36)',
            'border': '1px outset rgba(137, 255, 164, 0.36)'

        }).removeClass('false');
    }

    function falseStyle() {
        $(locVar).css({
            'background-color': 'rgba(255, 0, 0, 0.2)',
            'border': 'none'

        }).addClass('false');
    }


    login.blur(function () {
        var log = $(this).val();
        console.log(log);
        if (log.length < 3) {
            console.log(log.length);
            locVar = this;
            falseStyle();
            logVal = false;
            textWarn = 'Логин слишком короткий!';
            warnAnim()
        } else {
            logVal = true;
            locVar = this;
            trueStyle();
        }
        console.log(logVal);
    });

    pas2.blur(function pasValid() {
        console.log(pas2.val() + pas1.val());
        if ($(this).val() !== pas1.val()) {
            console.log($(this).val() + '  ' + pas1.val());
            pasVal = false;
            locVar = passes;
            falseStyle();
            textWarn = 'Пароли не совпадают!';
            warnAnim()

        }
        else {
            pasVal = true;
            locVar = passes;
            trueStyle();
        }
        if ($(this).val().length <= 7 || pas1.val().length <= 7) {
            pasVal = false;
            falseStyle();
            textWarn = 'Пароль слишком короткий!';
            warnAnim()
        }


        console.log(pasVal);
    });
    pas1.blur(function () {
            var pasValue = pas2.val();
            if (pasValue.length > 0) {
                if (pas1.val() !== pas2.val()) {
                    pasVal = false;
                    locVar = passes;
                    falseStyle();
                    textWarn = 'Пароли не совпадают!';
                    warnAnim()
                } else {
                    pasVal = true;
                    locVar = passes;
                    trueStyle();
                }
            }
            if (pas1.val() <= 7) {
                textWarn = 'Пароль слишком короткий!';
                warnAnim();
                falseStyle();

            } else {

            }
        }
    );

    eMail.on('blur', function () {
        var email = $(this).val(),
            dot = '..';
        if ((dot.length > 0) && email.length > 4
            && ((email.search('\\w+' + '@' + '\\w+' + '\[.]' + '\\w+') !== -1) && (email.search('@') !== -1  ))) {
            console.log('valid');
            mailVal = true;
            locVar = this;
            trueStyle();

        } else {
            mailVal = false;
            locVar = this;
            falseStyle();
            textWarn = 'Данные не верны!';
            warnAnim()


        }
        console.log(mailVal);
        console.log(eMail.val().length);
    });


    $('.form_reg button[type=submit]').click(function () {
        console.log('log = ' + logVal + ',', 'pass = ' + pasVal + ',', 'mail = ' + mailVal);
        if (pas1.val() !== pas2.val()) {
            textWarn = 'Пароли не совпадают!';
            warnAnim()

        }
        if ((logVal && pasVal && mailVal) === false) {
            console.log('log = ' + logVal, 'pass = ' + pasVal, 'mail = ' + mailVal);
            textWarn = 'Данные не верны!';
            warnAnim()
    }
        if ((logVal && pasVal && mailVal) === true) {
            $('.section_1-cont')
                .fadeOut(600)
        }
    });
    $('.form_auto button[type=submit]').click(function () {

    });
    $('.form_auto .reg_link').click(function () {
        location.href='reg.html'
    })
})(jQuery);
