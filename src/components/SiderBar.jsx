import React from "react";
import rising from "../../public/rising.png";
import home from "../../public/home.png";
import card from "../../public/card.png";
import person from "../../public/person.png";
import logO from "../../public/logout.png";
import { useHistory } from "react-router-dom";

function SiderBar() {
  const images = [rising, home, card, person];
  const history = useHistory();
  const logOut = () => {
    history.push("/");
    localStorage.removeItem("token");
  };

  return (
    <div className="w-[6%] mx-2 flex flex-col gap-4 items-center pt-8">
      <button>
        <img src={rising} alt="" />
      </button>
      <button>
        <img src={home} alt="" />
      </button>
      <button>
        <img src={card} alt="" />
      </button>
      <button>
        <img src={person} alt="" />
      </button>
      <button onClick={logOut}>
        <img src={logO} />
      </button>
    </div>
  );
}

export default SiderBar;
