export type Adress = {
  [key: string]: string;
  uf: string;
  bairro: string;
  localidade: string;
};

export type FormType = {
  nome: string;
  cep: number;
  email: string;
  senha: string;
  bairro: string;
  estado: string;
  cidade: string;
};
