import {useState} from 'react'
import PropTypes from 'prop-types'

import {Mockup, Error} from "./index.js";



export const CryptoForm = ({
                               title,
                               inputTitle1,
                               inputTitle2,
                               bashText,
                               loadingText,
                               resultText,
                               handleSubmit}) => {

    const [error, setError] = useState('');
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const [result, setResult] = useState({
        resolved: false,
        loading: false,
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
            setResult({...result, resolved: false, loading: true})
            return new Promise((resolve) => {
                setTimeout(() => setResult({
                    ...result,
                    resolved: true,
                    loading: false,
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
                <button disabled={result.loading} className='btn btn-lg w-full' onClick={resolve}>
                    {
                        result.loading && (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )
                    }
                    EXECUTE
                </button>
                <Mockup
                    command={bashText}
                    word={input1}
                    secret={input2}
                    loadingText={loadingText}
                    resultText={resultText}
                    data={result.data}
                    loading={result.loading}
                    resolved={result.resolved}
                />
            </div>
        </main>
    )
}

CryptoForm.propTypes = {
    title: PropTypes.string.isRequired,
    inputTitle1: PropTypes.string.isRequired,
    inputTitle2: PropTypes.string.isRequired,
    bashText: PropTypes.string.isRequired,
    loadingText: PropTypes.string.isRequired,
    resultText: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

