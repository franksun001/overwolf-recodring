import React, { FC, useEffect, useState, useMemo, useCallback } from "react";
import classnames from "classnames";

import IconEye from "../assets/images/login/ic_eye.svg";
import "./component_input.less";

interface Props {
  type?: string;
  label?: string;
  className?: string;
  onChange?: Function;
}

const Input: FC<Props> = (props) => {
  const { type = "text", label, className, onChange } = props;
  const [_type, _setType] = useState<string>("");

  useEffect(() => {
    _setType(type);
  }, [type]);

  const isPw = useMemo(() => type === "password", [type]);

  const toggleType = useCallback(() => {
    _setType(_type === "password" ? "text" : "password");
  }, [_type]);

  const handleChange = (event: { target: { value: string } }) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className={classnames("input-root", className)}>
      {label && (
        <div className="label flex justify-between items-center font-medium text-xs text-g00">
          {label}
          {isPw && (
            <a className="text-r00" href="/">
              Forgot password?
            </a>
          )}
        </div>
      )}
      <div className="relative mt-3 w-full">
        <input
          type={_type}
          className={classnames("px-6 w-full rounded-xl text-sm font-medium bg-d10", {
            pw: isPw,
            visible: isPw && _type === "text",
          })}
          onChange={handleChange}
        />
        {isPw && (
          <img
            src={IconEye}
            alt="icon eye"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleType}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
