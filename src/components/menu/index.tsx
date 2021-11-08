import { Button, ButtonGroup } from "@mui/material";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  const handleNav = (endPoint: string) => {
    history.push(endPoint);
  };
  return (
    <ButtonGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleNav("/")}
      >
        Home
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleNav("/login")}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleNav("/register")}
      >
        Register
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleNav("/cart")}
      >
        Cart
      </Button>
    </ButtonGroup>
  );
};
export default Menu;
