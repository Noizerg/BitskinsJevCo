const totp = require('notp').totp;
const base32 = require('thirty-two');


const base32Encode = (content) => {
    return base32.encode(content);
}

const base32Decode = (content) => {
    return base32.decode(content);
}

const generateTotp = (key) => {
    return totp.gen(key);
}

export {
    base32Decode,
    base32Encode,
    generateTotp
};