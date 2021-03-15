import React, { FC } from "react";
import classnames from "classnames";

import Spinner from "./component_spinner";
import { ButtonType } from "../utils/enum";
import "./component_button.less";

interface Props {
  type?: number;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: Function;
}

const Button: FC<Props> = (props) => {
  const { type = ButtonType.DEFAULT, children, disabled = false, loading = false, onClick } = props;
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
      disabled={disabled || loading}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {loading && (
        <div className="mr-2 w-6 h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {children}
    </button>
  );
};

export default Button;
