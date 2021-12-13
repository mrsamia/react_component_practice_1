import Button from "./component/Button";
import Input from "./component/Input";
import Nav from "./component/Nav";

import "./style/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1>React</h1>
        <Button name="Submit" />
        <div>
          <br></br>
          <Input type="usename" placeholder="Usename" />
        </div>
        <br></br>
        <div>
          <Input type="adress" placeholder="Adress" />
        </div>
        <br></br>
        <div>
          <Input type="number" placeholder="Number" />
        </div>
        <br></br>
        <div>
          <Input type="password" placeholder="Password" />
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default App;
