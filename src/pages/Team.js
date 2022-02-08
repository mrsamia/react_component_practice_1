import React from 'react';
import Tittle from '../component/Tittle';
import Cardd from '../component/Cardd';

function Team(props) {
    return (
        <div>
             <div className='container'>
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

        </div>
    );
}

export default Team;