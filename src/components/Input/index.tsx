import React, { InputHTMLAttributes } from "react"

interface InputPropsInterface {
type: string,
placeholder: string,
alt: string

}

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
inputProps : InputPropsInterface
}

const Input = ({inputProps}: IProps) => {
    return (<>
    <input {...inputProps} />
    </>)
}

export default Input