const log = {
    info: function(msg) {
        console.log(`Info: ${msg}`)
    },
    warning: function(msg) {
        console.log(`Warn: ${msg}`)
    },
    error: function(msg) {
        console.log(`Err: ${msg}`)
    }
}

module.exports = log;