

var totp = require('notp').totp;
var base32 = require('thirty-two');
const request = require('request-promise')


class BitSkins
 {
    constructor(apiKey, secretKey) 
    {
        this.apiKey = apiKey;
        this.totKey = secretKey;
        };
    
    getCode()
    {
        return totp.gen(base32.decode(this.totKey));

    }
    SendRequest(endpoint)
    {
        const options = {
            method: 'POST',
            uri: `https://bitskins.com/api/v1/${endpoint}`,
            body: {
                api_key: this.apiKey,
                code: this.getCode()
             },
            json: true,


        }
        request(options).then(function(response) {
            console.log(`Test Running...Balance = ${response["data"]["available_balance"]}`);
        })
        .catch(function (err) {
            console.log(err)
        })

    }
    getAccountBalance()
    {
        return this.SendRequest('get_account_balance');
    }
}


const bitskins = new BitSkins('a0d273a7-b2b0-4ada-aa68-0fd3109eedfe', 'IEKQZTYNQ6I2NLE4');
bitskins.getAccountBalance();