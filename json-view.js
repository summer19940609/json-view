// ==UserScript==
// @name         Json.cn优化，配合popclip使用
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  json.cn 
// @author       xnj
// @match        https://www.json.cn/**
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 隐藏垃圾内容
    $('header').append("<style> .header,.width-out {display:none;} .container {display:none;} .blog-list {display:none;} .footer-nav-list {display:none;} .content {display:none;} div.tool li{display:none;} .editor-con { height: 100vh !important;} </style>");
    // 获取URL里的json
    const json = getQueryString('json')
    // 填入文本，并触发
    $('#json-src').val(json);
    $('#json-src').keyup();

    // 解析URL参数
    function getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        };
        return null;
    }

})();
