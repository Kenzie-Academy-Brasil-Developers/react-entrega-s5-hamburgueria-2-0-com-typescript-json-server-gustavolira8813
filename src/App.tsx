import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import Menu from "./components/menu";
import GlobalStyle from "./styles/Global";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
