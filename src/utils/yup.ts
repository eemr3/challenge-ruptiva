import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatorio!")
    .min(4, "Nome deve conter no mínimo 4 caractéres"),
  document: Yup.string()
    .required("Documento obrigatório!")
    .min(14, "CPF deve conter 11 números / CNPJ 14")
    .max(18),
});
