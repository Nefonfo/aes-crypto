import CryptoJS from 'crypto-js'
import {CryptoForm} from '../components/index.js'


export const Decrypt = () => {

    const handleCrypt = (encrypt, secret) => {
        const bytes  = CryptoJS.AES.decrypt(encrypt, secret)
        return bytes.toString(CryptoJS.enc.Utf8)
    }

    return (
        <CryptoForm
            title='DECRYPT'
            inputTitle1='Encrypted Word'
            inputTitle2='Secret'
            bashText='decrypt'
            loadingText='Decrypting...'
            resultText='Your decrypted word is:'
            handleSubmit={handleCrypt}
        />
    )
}
