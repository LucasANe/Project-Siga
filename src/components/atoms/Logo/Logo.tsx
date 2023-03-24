import React from "react";
import * as imgs from "src/assets/images";
import ILogo from "./ILogo";
function Logo(props: ILogo) {
  return (
    <img
      src={props.white ? imgs.logoWhite : imgs.logo}
      alt="Logo SIGA"
      width={props.width}
      height={props.height}
    />
  );
}

export default Logo;
