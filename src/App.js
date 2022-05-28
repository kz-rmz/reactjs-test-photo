import "./App.css";
import CardsList from "./components/CardsList";
import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header style={{ position: "fixed", top: "0", width: "100%" }} />

      <Container
        sx={{
          maxWidth: "xl",
          flexGrow: 1,
        }}
      >
        <CardsList />
      </Container>
    </>
  );
}

export default App;
