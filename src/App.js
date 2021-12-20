import Button from "./component/Button";
import Input from "./component/Input";
import Nav from "./component/Nav";
import Feature from "./component/feature";
import Card from "./component/Card";
import Cardd from "./component/Cardd";
import Heropart from "./component/Heropart";

import "./style/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Heropart />

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
        <Feature color="red" colour="blue" />
        <Feature color="blue" colour="red" />
        <br></br>

        <div>
          <div>
            <h2 className="text-center">Team</h2>
          </div>
          <div className=" row ">
            <div className="col-4">
              <Cardd tittle="hdfjgkhfkdg" text="sfhhgurt " />
            </div>
            <div className="col-4">
              <Cardd tittle="I Love You" text="sfhhgurt " />
            </div>
            <div className="col-4">
              <Cardd tittle="I Miss You" text="sfhhgurt " />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
      <br></br>

      <br></br>
    </div>
  );
}

export default App;
