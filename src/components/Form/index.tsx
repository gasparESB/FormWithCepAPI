import { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Adress, FormType } from "../../types/FormTypes";
import Input from "../Input";

import styles from "./styles.module.scss";

const Form = () => {
  const [adress, setAdress] = useState<Adress>({} as Adress);

  const adressInformation: string[] = ["uf", "bairro", "localidade", "logradouro"]

  const { register, handleSubmit, watch, setValue, getValues } = useForm<any>({
    defaultValues: {
      nome: "",
      email: "",
    },
  });

  if (adress) {
    adressInformation.map(a => setValue(a, adress[a]))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 8) {
      return 
    }
    fetch(`https://viacep.com.br/ws/${e.target.value}/json`)
      .then((response) => response.json())
      .then((data) => setAdress(data));
  };

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  console.log(adress);

  return (
    <section className={styles.form__section}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__inputs}>
        <Input
          type="text"
          placeholder="nome"
          label="nome"
          register={register}
        />
        <Input
          type="text"
          placeholder="email"
          label="email"
          register={register}
        />
        <Input
          type="password"
          placeholder="senha"
          label="senha"
          register={register}
        />
        <div className={styles.adress__inputs}>
          <Input
            type="text"
            placeholder="CEP"
            label="cep"
            register={register}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            type="text"
            placeholder="estado"
            label="uf"
            register={register}
          />
          <Input
            type="text"
            placeholder="cidade"
            label="localidade"
            register={register}
          />
        </div>
          <Input
            type="text"
            placeholder="bairro"
            label="bairro"
            register={register}
          />
        <button type="submit" className={styles.form__button}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
