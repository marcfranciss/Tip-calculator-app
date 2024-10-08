import logo from "./assets/images/logo.svg";
import "./App.css";
import { AppResults } from "./assets/Components/AppResults/AppResults";
import { AppInputs } from "./assets/Components/AppInputs/AppInputs";
import { InputProvider } from "./assets/Context/InputContext";

function App() {
  return (
    <InputProvider>
      <main>
        <section id='calculator-app' className='calculator-app'>
          <header>
            <h1 style={{ display: "none" }}>Tip calculator app</h1>
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
