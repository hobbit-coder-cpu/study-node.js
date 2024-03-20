
// [모듈 종류]
// - Core / local / Third Party

// [호출 방법]
// const module = require("module_name")

// [core module]
// - http, url, querystring, path, fs, util

// [local module]
/*
    logModule.js
    
    const log = {
        info: function(msg) {
            console.log(`Info: ${msg}`)
        },
        warning: function(msg) {
            console.log(`Warn: ${msg}`)
        },

    };

    module.exports = log 

    test.js
    const myLogModule = require('./logModule.js')


*/