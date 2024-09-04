import logo from "./assets/images/logo.svg";
import "./App.css";
import { AppResults } from "./assets/Components/AppResults/AppResults";
import { AppInputs } from "./assets/Components/AppInputs/AppInputs";
import { useState } from "react";
import { InputProvider } from "./assets/Context/InputContext";

function App() {
  return (
    <InputProvider>
      <main>
        <section id='calculator-app' className='calculator-app'>
          <header>
            <img src={logo} alt='' />
          </header>
          <div className='app'>
            <AppInputs />
            <AppResults />
          </div>
        </section>
      </main>
    </InputProvider>
  );
}

export default App;
