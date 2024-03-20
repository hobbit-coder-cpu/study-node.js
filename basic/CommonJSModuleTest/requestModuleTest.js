function encrypt(data) {
    return 'encryted data'
}

function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`${encryptedData} is being sent to ${url}`)
}

module.exports = {
    send
}