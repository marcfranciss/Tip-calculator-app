import logo from "./assets/images/logo.svg";
import "./App.css";
import { AppResults } from "./assets/Components/AppResults/AppResults";
import { AppInputs } from "./assets/Components/AppInputs/AppInputs";
import { useState } from "react";

function App() {
  const [result, setResult] = useState<number>(0);

  return (
    <main>
      <section id='calculator-app' className='calculator-app'>
        <header>
          <img src={logo} alt='' />
        </header>
        <div className='app'>
          <AppInputs sendResult={setResult} />
          <AppResults result={result.toFixed(2).toLocaleString()} />
        </div>
      </section>
    </main>
  );
}

export default App;
