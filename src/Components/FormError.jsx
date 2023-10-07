/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FormError = ({ error }) => {
    // eslint-disable-next-line react/prop-types
    return <>{error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">
    <span className="font-medium">Oh, snapp!</span> {error.message}
  </p>
  }</>; 
  };
  export default FormError;
