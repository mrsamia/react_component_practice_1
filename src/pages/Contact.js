import React from 'react';
import Button from '../component/Button';
import Input from '../component/Input';
import Tittle from '../component/Tittle';

function Contact(props) {
    return (
        <div className="App">
            <div>
          <div className="pt-5">
            <Tittle title={"Contact US"} />
          </div>
          <div className="container">
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
        </div>
    );
}

export default Contact;