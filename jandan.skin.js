// ==UserScript==
// @name         Jandan.skin
// @namespace    https://github.com/maijz128
// @version      0.1.0
// @description  皮肤
// @author       MaiJZ
// @match        *://*.jandan.net/*
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// @require      https://cdn.bootcss.com/clipboard.js/1.7.1/clipboard.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// ==/UserScript==


(function () {
    setTimeout(function(){
        main();
    },10);
})();

function main() {
    // console.log('hello world!')
    addStyle();
    addReportFlag();
}

function addStyle(){
    var style = '';
    var e = document.createElement("style"); 
    e.innerHTML = style; 
    document.head.appendChild(e);
}

function addReportFlag(){
    var el_a_list = $('.comment-report-c a');
    el_a_list.each(function(e){
        $(this).text('');
        $(this).append('<div class="flag-container flag"></div>');
    });

    // var el_a_list2 = $('a.tucao-report');
    // el_a_list2.each(function(e){
    //     $(this).text('');
    //     $(this).append('<div class="flag-container flag"></div>');
    // });
    
}




