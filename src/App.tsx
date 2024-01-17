import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./utils/Modal";
import NormalForm from "./components/NormalForm/NormalForm";

function App() {

  // const [modal, setModal] = useState(false)

  // const handleModalClose = () => {
  //   setModal((prev) => !prev)
  // }

  return (
   <Container>
    <NormalForm></NormalForm>
   </Container>
  );
}

export default App;
