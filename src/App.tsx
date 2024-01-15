import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./utils/Modal";

function App() {

  const [modal, setModal] = useState(false)

  const handleModalClose = () => {
    setModal((prev) => !prev)
  }

  return (
   <Container>
    <div className="h-screen w-full flex justify-center items-center">
      {/* <button className="btn btn-primary">This is a button</button>
      <button className="btn btn-danger">This is a button</button> */}
      <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
      <Modal isOpen={modal} onClose={handleModalClose}></Modal>
    </div>
    
   </Container>
  );
}

export default App;
