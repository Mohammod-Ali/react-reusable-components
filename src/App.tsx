import MainLayout from "./components/layout/MainLayout";
import Container from "./components/ui/container";

function App() {
  return (
   <Container>
    <div className="h-screen w-full flex justify-center items-center">
      <button className="px-2 py-3 bg-purple-400">This is a button</button>
    </div>
   </Container>
  );
}

export default App;
