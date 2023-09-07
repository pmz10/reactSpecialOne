import { forwardRef, useRef } from "react";

// eslint-disable-next-line react/display-name
const InputText = forwardRef((props, ref) => {
    return (
      <input
        type="text"
        ref={ref}
      />
    );
  });

const ExampleRef = () => {
  const inputFocus = useRef(null);

  const handleButtonClick = () => {
    console.log("clicked");
    inputFocus.current.focus();
  };
  return (
    <>
     <InputText ref={inputFocus} />
      <button onClick={handleButtonClick}>Click Ref</button>
    </>
  );
};

export default ExampleRef;
