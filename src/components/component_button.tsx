import React, { FC } from "react";
import classnames from "classnames";

import { ButtonType } from "../utils/enum";
import "./component_button.less";

interface Props {
  type?: number;
  className?: string;
  disabled?: boolean;
  onClick?: Function;
}

const Button: FC<Props> = (props) => {
  const { type = ButtonType.DEFAULT, children, disabled = false, onClick } = props;
  return (
    <button
      className={classnames(
        "button-root flex items-center border border-transparent text-white font-medium",
        {
          default: type === ButtonType.DEFAULT,
          primary: type === ButtonType.PRIMARY,
          dashed: type === ButtonType.DASHED,
        },
      )}
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
