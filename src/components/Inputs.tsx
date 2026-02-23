import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";

type InputProps = {
  label: string;
  id: string;
  ref: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref,
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
