import { Content } from "./Components/Content/Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-wrapper">
          <img src={require("./assets/images/app-logo.png")} className="App-logo" alt="logo" />
        </div>
      </header>
      <Content />
    </div>
  );
}

export default App;
