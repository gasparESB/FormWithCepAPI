import React, { InputHTMLAttributes } from "react"


const Input = ({...otherProps}: InputHTMLAttributes<HTMLInputElement>) => {
    return (<>
    <input {...otherProps} />
    </>)
}

export default Input