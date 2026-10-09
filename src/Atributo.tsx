import { useState } from "react"
import "./Atributo.css"

export default function Atributo(){
    const [valor, setVAlor] = useState<number>(0);

    // let rosas = "";
    // for(let i = 0; i < 5; i++){
    //     if (i < valor) {
    //         rosas += "🩷"
    //     } else {
    //         rosas += "🤍"
    //     }
    // }

    return(
        <>
            <div className="atributo">
                {/* {valor}{rosas} */}
                {valor}{"🩷".repeat(valor)}
                <span className="inativo">{"🩷".repeat(5-valor)}</span>
                <button onClick={() => {
                    if(valor === 5)
                        setVAlor(0);
                    else
                        setVAlor(valor + 1);
                    // setVAlor(valor === 5 ? 0 : valor + 1);
                }}> + </button>
            </div>
        </>
    )
}