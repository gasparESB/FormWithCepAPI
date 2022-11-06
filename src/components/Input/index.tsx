import React, { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<any>;
  register: UseFormRegister<any>;
  required?: boolean;
}
const Input = ({label, register, ...otherProps }: InputProps) => {
  return (
    <>
      <input className={styles.input} {...register(label)} {...otherProps} />
    </>
  );
};

export default Input;
