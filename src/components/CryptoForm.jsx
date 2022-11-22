import {useState} from 'react'
import {Mockup, Error} from "./index.js";



export const CryptoForm = ({title, inputTitle1, inputTitle2, bashText, loadingText, resultText, handleSubmit}) => {

    const [error, setError] = useState('');
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const [result, setResult] = useState({
        pristine: true,
        resolved: false,
        data: ''
    })

    const validate = () => {
        if(input1.length <= 0) return `${inputTitle1} is required`
        if(input2.length <= 0) return `${inputTitle2} is required`

        return null
    }

    const resolve = () => {
        setError('')
        const validation = validate()
        if(!validation){
            setResult({...result, pristine: false, resolved: false})
            return new Promise((resolve) => {
                setTimeout(() => setResult({
                    ...result,
                    resolved: true,
                    data: handleSubmit(input1, input2)
                }), 3000)
            })
        } else {
            setError(validation)
        }
    }

    return (
        <main className='w-full mt-12 px-4 flex flex-wrap flex-col items-center'>
            <h1 className="text-4xl lg:text-8xl">{title}</h1>
            <div className="w-full mt-12 flex flex-wrap flex-col gap-y-6 max-w-3xl">
                {
                    error && <Error text={error} />
                }
                <div className="form-control w-full flex justify-center">
                    <label className="label">
                        <span className="label-text">{inputTitle1}</span>
                    </label>
                    <div className="w-full flex">
                        <input value={input1} onChange={(e) => setInput1(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-lg w-full"/>
                    </div>
                </div>
                <div className="form-control w-full flex justify-center">
                    <label className="label">
                        <span className="label-text">{inputTitle2}</span>
                    </label>
                    <div className="w-full flex">
                        <input value={input2} onChange={(e) => setInput2(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-lg w-full"/>
                    </div>
                </div>
                <button className='btn btn-lg w-full' onClick={resolve}>ENCODE</button>
                <Mockup
                    command={bashText}
                    word={input1}
                    secret={input2}
                    loadingText={loadingText}
                    resultText={resultText}
                    data={result.data}
                    pristine={result.pristine}
                    resolved={result.resolved}
                />
            </div>
        </main>
    )
}
