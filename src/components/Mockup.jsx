export const Mockup = ({command, word, secret, loadingText, resultText, data, pristine, resolved}) => {
    return (
        <div className="mockup-code">
            <pre data-prefix="$"><code>{`aes ${command}${word ? ' -w '+word: ''}${secret ? ' -k '+secret: ''}`}</code></pre>
            {
                !pristine && <pre data-prefix=">" className="text-warning"><code>{loadingText}</code></pre>
            }
            {
                resolved && (
                    data.length > 0 ? (
                        <>
                            <pre data-prefix=">" className="text-success"><code>{resultText}</code></pre>
                            <pre data-prefix=">" className="text-success"><code>{data}</code></pre>
                        </>
                    ) : <pre data-prefix=">" className="text-error"><code>A ERROR OCCURRED!</code></pre>
                )
            }
        </div>
    )
}
