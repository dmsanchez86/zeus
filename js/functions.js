'use strict';

var App = {
    init: function(){
        // click to show modal contact
        $('.container_contact:not(.popup)').unbind('click').click(function(){
            $('#modalContact').openModal();
        });
        
        // click to hide modal contact
        $('.modal .close').unbind('click').click(function(){
            $('#modalContact').closeModal();
        });
        
        
        this.lazy();
        this.viewport();
        this.fancyscroll();
        this.logo();
        this.formContact();
    },
    viewport: function(){
        // initialization viewport
        $('section.blue .description').viewportChecker({
            classToAdd: 'animated fadeInLeft',
            offset: 100
        });
        
        $('section .description').viewportChecker({
            classToAdd: 'animated fadeInRight',
            offset: 100
        });
        
        $('.networkings a i').viewportChecker({
            classToAdd: 'animated tada',
            offset: 100
        });
    },
    lazy: function(){
        // initialization lazy load
        $("img.lazy").lazyload({
            effect: "fadeIn",
            threshold : 400
        });
    },
    logo: function(){
        // add load class to logo when the page is ready
        setTimeout(function(){
            $('.logo,body').addClass('load');
        },1000);
        
        // event to reload animation logo
        $('.logo').unbind('dblclick').dblclick(function(){
            $(this).removeClass('load');
            setTimeout(function(){
                $('.logo').addClass('load');
            },50);
        });
    },
    fancyscroll: function(){
        $(window).fancy_scroll({    
            animation: "bounce"
        });
    },
    formContact: function(){
        $('#formContact').unbind('submit').submit(function(e){
            e.preventDefault();
            
            $.ajax({
                url: 'sendEmail.php',
                type: 'POST',
                data: {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    telephone: $('#telephone').val(),
                    subject: $('#subject').val(),
                    message: $('#message').val()
                },
                success: function(response){
                    console.log(response);
                }
            });
        });
    }
}

$().ready(function(){
    App.init();
});