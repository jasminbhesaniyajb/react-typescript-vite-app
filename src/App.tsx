import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
