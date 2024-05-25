import { useState } from "react";
import ProgressBar from "./components/progress-bar";

function App() {
  const [success, setSuccess] = useState<boolean>(false);
  return (
    <>
      <span>Progress Bar</span>
      <ProgressBar value={60} onComplete={() => setSuccess(true)} />
      {success ? "Success" : "Loading..."}
    </>
  );
}

export default App;
