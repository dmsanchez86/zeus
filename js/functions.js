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
            effect: "fadeIn"
        });
    }
}

$().ready(function(){
    App.init();
});