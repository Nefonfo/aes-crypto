import CryptoJS from 'crypto-js'
import {CryptoForm} from '../components'


export const Encrypt = () => {


    const handleCrypt = (encrypt, secret) => {

        return CryptoJS.AES.encrypt(encrypt, secret).toString()
    }

    return (
        <CryptoForm
            title='ENCRYPT'
            inputTitle1='Word'
            inputTitle2='Secret'
            bashText='encrypt'
            loadingText='Encrypting...'
            resultText='Your encrypted word is:'
            handleSubmit={handleCrypt}
        />
    )
}
