import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/auth";
import { Form } from "./styles";

const Register = () => {
  const { signUp } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("campor obrigatório").min(5, "mínimo 5 letras"),
    email: yup.string().required("campo obrigatório").email("email inválido"),
    password: yup
      .string()
      .required("campo obrigatório")
      .min(6, "mínimo de dígitos"),
    confirmPassword: yup
      .string()
      .required("campo obrigatório")
      .oneOf([yup.ref("password")], "senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit(signUp)}>
        <TextField
          variant="outlined"
          placeholder="Nome"
          helperText={errors.name?.message}
          error={!!errors.name}
          {...register("name")}
        />
        <TextField
          variant="outlined"
          placeholder="email"
          helperText={errors.email?.message}
          error={!!errors.email}
          {...register("email")}
        />
        <TextField
          variant="outlined"
          placeholder="senha"
          helperText={errors.password?.message}
          error={!!errors.password}
          {...register("password")}
        />
        <TextField
          variant="outlined"
          placeholder="Confirme senha"
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword}
          {...register("confirmPassword")}
        />
        <Button type="submit">Registrar</Button>
      </Form>
    </>
  );
};
export default Register;
