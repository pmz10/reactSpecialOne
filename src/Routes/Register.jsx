import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../Utils/erroresFirebase";

const Register = () => {
  const navegate = useNavigate();

  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
    try {
      await registerUser(email, password);
      console.log("Usario creado");
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
      {errors.firebase && <p>{errors.firebase.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingresar email"
          {...register("email", {
            required: { value: true, message: "Campo obligatorio" },
            pattern: {
              value:
                /[a-z-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email incorrecto",
            },
          })}
        />
        {errors.firebase && <p>{errors.firebase.message}</p>}
        <input
          type="password"
          placeholder="Ingresar password"
          {...register("password", {
            setValueAs: (v) => v.trim(),
            minLength: { value: 6, message: "Minimo 6 caracteres" },
            validate: {
              trim: (v) => {
                if (!v.trim()) return "No seas payaso, escribe algo";
                return true;
              },
            },
          })}
        />
        <input
          type="password"
          placeholder="Ingresar password"
          {...register("repassword", {
            setValueAs: (v) => v.trim(),
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
