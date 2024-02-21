import { FC } from "react";
import "./CustomInput.css";

const CustomInput: FC<{
  className?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  ref?: any;
  onChange?: any;
}> = ({ className, type, placeholder, name, value, ref, onChange }) => {
  return (
    <input
      className={`input-field ${className}`}
      type={type ?? "text"}
      placeholder={placeholder}
      name={name}
      value={value}
      ref={ref}
      onChange={onChange}
    />
  );
};

export default CustomInput;
