import React, { useContext, useState } from "react";
import { SelectedContext } from "../../pages/index";
import arrow from "../../arrow.png";
import Image from "next/image";

const Direction = () => {
  let [selected, setSelected] = useContext(SelectedContext);
  let angles = [0, 45, 90, 135, 180, 225, 270, 315];
  console.log(arrow);
  return (
    <div id="directions">
      {angles.map((ang, i) => (
        <div
          className="iconContainer"
          id={selected === i ? "selected" : ""}
          key={i}
          onClick={() => setSelected(i + 0)}
        >
          <Image
            style={{ transform: `rotate(${ang}deg)` }}
            className={`d${ang}`}
            alt="directions"
            src={arrow.src}
            width="30"
            height="30"
          />
        </div>
      ))}
    </div>
  );
};

export default Direction;
