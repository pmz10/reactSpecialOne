// eslint-disable-next-line react/prop-types
const FormError = ({ error }) => {
    // eslint-disable-next-line react/prop-types
    return <>{error && <p>{error.message}</p>}</>;
  };
  export default FormError;
