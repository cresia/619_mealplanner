import React from 'react';
import Menu from './menu';

function Header(props) {
  return (
    <div className="container">
      <div className="headerBackground row justify-content-end mx-3 mt-5 mb-1">
        <div>
          <img className="headerImage" src="./image/redHeart.png" alt=""/>
        </div>
        {/* <div className="logoBackground"> */}
          <div className="headerTextMenu textFont textSize flex-fill align-self-center text-capitalize">{props.text}</div>


        {/* </div> */}

        <Menu setView={ props.setView }/>
      </div>
    </div>
  );
}

export default Header;
