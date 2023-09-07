import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../Utils/erroresFirebase";

import FormError from "../Components/FormError";
import { formValidate } from "../Utils/formValidate";

const Register = () => {
  const navegate = useNavigate();
 const { registerUser } = useContext(UserContext);
const {required, patternEmail} = formValidate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
      setError("firebase", {
        message: erroresFirebase(error.code)
      });
    }
  };
  return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingresar email"
          {...register("email", {
            required,
            pattern:patternEmail,
          })}
        />
        <FormError error={errors.email} />
        <input
          type="password"
          placeholder="Ingresar password"
          {...register("password", {
            minLength: { value: 6, message: "Minimo 6 caracteres" },
            validate: {
              trim: (v) => {
                if (!v.trim()) return "No seas payaso, escribe algo";
                return true;
              },
            },
          })}
        />
        <FormError error={errors.password} />
        <input
          type="password"
          placeholder="Ingresar password"
          {...register("repassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        />
        <FormError error={errors.repassword} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
