// ==UserScript==
// @name         Dev-Tampermonkey
// @namespace    https://github.com/maijz128
// @version      0.1.0
// @description  开发用脚本
// @author       MaiJZ
// @match        *://*.jandan.net/*
// @require      https://greasyfork.org/scripts/370589/code/FileObserver2.js?version=615301
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// ==/UserScript==

/**
 * 说明：  FileObserver2.js 功能： 自动刷新脚本，配合本地FileObserver.jar使用
 *        用@require 引用本地正在开发的脚本
 */


(function () {
    if(typeof(FileObserver2) === 'undefined'){
        appendScriptLink('https://greasyfork.org/scripts/370589/code/FileObserver2.js?version=615301');
    }
    setTimeout(function () {
        var server = '';
        var checkInterval = 60000;
        window.__FileObserver2 = new FileObserver2(server, checkInterval);
    }, 1000);

    importLocalFile();
})();

function importLocalFile(){
    var SERVER_HOST = 'http://localhost:8294/file';
    var importer = new Importer(SERVER_HOST);

    importer.import('/jandan.skin.js');

    importer.import('/themes/pornhub.css');
}

function importResource(src){
    if(src.endsWith('.js')){
        var s = document.createElement('script'); s.src = src; s.type="text/javascript"; document.head.appendChild(s);
    }else if(src.endsWith('.css')){
        var c = document.createElement("link"); c.rel="stylesheet"; c.type="text/css"; c.href = src; document.head.appendChild(c);
    }
}

function combine(path1, path2) {
    path1 = path1.replace('\\', '/');
    path2 = path2.replace('\\', '/');
    if (path1.endsWith('/')) {
        path1 = path1.slice(0, path1.length - 1);
    }
    if (path2.startsWith('/')) {
        path2 = path2.slice(1);
    }
    return path1 + '/' + path2;
}


function Importer(serverHost) {
    this.serverHost = serverHost ? serverHost : '';
    this.import = function (src) {
        var url = combine(this.serverHost, src);
        importResource(url);
    };
    this.delayImport = function(src, delay){
        var self = this;
        delay = delay ? delay : 500;
        setTimeout(function () {
            self.import(src);
        }, delay);
    };
}