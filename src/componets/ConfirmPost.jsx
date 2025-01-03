import { ConfirmPostCSS } from "../css/ConfirmPostCSS"

export function ConfirmPost({visibility}){

    return (
        <ConfirmPostCSS>
            <div className={visibility}>
                <h4>Enviado com sucesso!</h4>
            </div>
        </ConfirmPostCSS>
    )
}