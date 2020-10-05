import { BitSkins } from "./bitskins";

async function main() {
    const bitskins = new BitSkins('a0d273a7-b2b0-4ada-aa68-0fd3109eedfe', 'IEKQZTYNQ6I2NLE4');
    
    const balance = await bitskins.getAccountBalance();

    console.log(balance);
}

main();