import React from 'react';
import Tittle from '../component/Tittle';
import Pic3 from "../images/Pic3.png";

function About(props) {
    return (
        <div>
              <div className='container'>
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
        </div>
    );
}

export default About;