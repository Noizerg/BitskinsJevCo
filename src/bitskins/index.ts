import fetch from 'node-fetch';

import { generateTotp, base32Decode } from '../utils/common.js';
import { Balance, BaseResponse } from '../types/types.js';
import { BASE_URI } from '../utils/constants';


export class BitSkins {
    private apiKey: string;
    private secretKey: string;

    constructor(apiKey: string, secretKey: string) {
        this.apiKey = apiKey;
        this.secretKey = secretKey;
    };

    public getCode() {
        return generateTotp(base32Decode(this.secretKey));
    }

    private async sendRequest<T>(method: string): Promise<T> {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                api_key: this.apiKey,
                code: this.getCode()
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(`${BASE_URI}${method}`, options);
        const json = await response.json();
        return json;
    }
    public async getAccountBalance() {
        return await this.sendRequest<BaseResponse<Balance>>("get_account_balance");
    }
}