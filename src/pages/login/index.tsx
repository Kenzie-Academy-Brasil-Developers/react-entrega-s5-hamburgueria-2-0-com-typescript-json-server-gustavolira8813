import { Button, TextField } from "@mui/material";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/auth";
import { Container } from "./styles";
const Login = () => {
  const history = useHistory;
  const schema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { signIn } = useAuth();
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(signIn)}>
        <Container>
          <TextField
            placeholder="Email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            placeholder="Senha"
            variant="outlined"
            {...register("password")}
          />
          <Button variant="outlined" type="submit">
            Entrar
          </Button>
        </Container>
      </form>
    </>
  );
};
export default Login;
