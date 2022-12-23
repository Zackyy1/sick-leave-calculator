import Calculator from "components/Calculator/Calculator";
import 'styles/_general.scss'
import InfoTab from "./components/InfoTab/InfoTab";

function App() {
  return (
    <div className="App">
      <div className="container">
        <InfoTab />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
