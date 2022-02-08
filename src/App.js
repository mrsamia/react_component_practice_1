import Button from "./component/Button";
import Input from "./component/Input";
import Nav from "./component/Nav";
//import Feature from "./component/feature";
//import Card from "./component/Card";
import Cardd from "./component/Cardd";
import Heropart from "./component/Heropart";
import Tittle from "./component/Tittle";
import Pic3 from "./images/Pic3.png";
import "./style/app.css";

import "./style/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Heropart />
        <div>
          <Tittle title={"Mission"} />
          <p className="text-center">
            There is no greater injustice than an innocent man or woman serving
            time behind bars for mint proceeds will be donated to the Georgia
            Innocence Project. The SunnyCats community will be unlike any other
            NFT community – actively making a difference on-chain, and off.
          </p>
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <img className="img_size" src={Pic3} />
            </div>
            <div className="col-6">
              <Tittle title={"Innocence Project"} />
              <p>
                There is no greater injustice than an innocent man or woman
                serving time behind bars for a crime they did not commit. That’s
                why we made SunnyCats, to build a community focused on giving
                back, raising awareness, and making the world around us a
                brighter place.
              </p>
              <p>
                100% of mint proceeds will be donated to the Georgia Innocence
                Project.
              </p>
              <p>
                The SunnyCats community will be unlike any other NFT community –
                actively making a difference on-chain, and off.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <Tittle title={"Team"} />
          </div>
          <div className=" row ">
            <div className="col-4">
              <Cardd
                tittle="Console"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s inter took a galley of type and e specimen book. "
              />
            </div>
            <div className="col-4">
              <Cardd
                tittle="I Love You"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text.Lorem Ipsum It has roots in a piece of classical Lorem Ipsum has been the  Latin literature  Lorem Ipsum  from 45 BC, making it over 2000 years old. "
              />
            </div>
            <div className="col-4">
              <Cardd
                tittle="I Miss You"
                text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
              />
            </div>
          </div>
        </div>

        <div>
          <div className="pt-5">
            <Tittle title={"Contact US"} />
          </div>
          <div>
            <div>
              <p className="text-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="">
                <div>
                  <Input
                    style={{ height: "60px" }}
                    type="usename"
                    placeholder="Name"
                  />
                </div>
                <br></br>
                <div>
                  <Input
                    style={{ height: "60px" }}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <br></br>
                <div>
                  <Input
                    style={{ height: "120px" }}
                    type="message"
                    placeholder="Message"
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="d-flex justify-content-center">
                <Button name="Send Message" />
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
