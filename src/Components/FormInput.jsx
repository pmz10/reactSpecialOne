import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const FormInput = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ type, placeholder, onChange, onBlur, name, children }, ref) => {
    // eslint-disable-next-line react/no-unknown-property
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </>
    );
  }
);

export default FormInput;
