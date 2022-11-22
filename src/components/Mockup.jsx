import PropTypes from 'prop-types'

export const Mockup = ({
                           command,
                           word,
                           secret,
                           loadingText,
                           resultText,
                           data,
                           loading,
                           resolved}) => {
    return (
        <div className="w-full mockup-code mt-6">
            <pre data-prefix="$"><code className='break-all'>{`aes ${command}${word ? ' -w '+word: ''}${secret ? ' -k '+secret: ''}`}</code></pre>
            {
                loading && <pre data-prefix=">" className="text-warning"><code>{loadingText}</code></pre>
            }
            {
                resolved && (
                    data.length > 0 ? (
                        <>
                            <pre data-prefix=">" className="text-success"><code>{resultText}</code></pre>
                            <pre data-prefix=">" className="text-info"><code>{data}</code></pre>
                        </>
                    ) : <pre data-prefix=">" className="text-error"><code>A ERROR OCCURRED!</code></pre>
                )
            }
        </div>
    )
}

Mockup.propTypes = {
    command: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    loadingText: PropTypes.string.isRequired,
    resultText: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    resolved: PropTypes.bool.isRequired
}