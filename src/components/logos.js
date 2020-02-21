import React from "react";

import Audi from "../images/assets/audi.svg";
import GE from "../images/assets/ge.svg";
import CCTV from "../images/assets/cctv.svg";
import Tengxun from "../images/assets/tengxun.svg";
import Shishang from "../images/assets/shishang.svg";
import TB from "../images/assets/tb.svg";

const Logos = () => (
  <section className="grid-sys">
    <span className="col-12 title-center">
      <hr />
    </span>
    <span className="col-2 col-4-m">
      <Audi />
    </span>
    <span className="col-2 col-4-m">
      <GE />
    </span>
    <span className="col-2 col-4-m">
      <CCTV />
    </span>
    <span className="col-2 col-4-m">
      <Tengxun />
    </span>
    <span className="col-2 col-4-m">
      <Shishang />
    </span>
    <span className="col-2 col-4-m">
      <TB />
    </span>
    <span className="col-12">
      <hr />
    </span>
  </section>
);

export default Logos;
