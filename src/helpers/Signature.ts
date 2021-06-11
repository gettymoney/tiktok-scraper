import Signer from 'tiktok-signature';

export async function sign(url: string) {
    const signer = new Signer();
    await signer.init();
    const signature = await signer.sign(url).then(res => res.signature);
    await signer.close();

    return signature;
}
