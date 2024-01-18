import React from "react";
import IMAGES from "./Images";

function Header() {
  return (
    <header className="headers">
      <ul>
        <li>Good Morning</li>
        <div>
          <li>
            <img src={IMAGES.rectangle_10} alt="" />
          </li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
