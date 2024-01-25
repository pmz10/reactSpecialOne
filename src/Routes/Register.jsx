import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../Utils/erroresFirebase";

import FormError from "../Components/FormError";
import { formValidate } from "../Utils/formValidate";
import FormInput from "../Components/FormInput";
import Title from "../Components/Title";
import Button from "../Components/Button";
import ButtonLoading from "../Components/ButtonLoading";

const Register = () => {
  const navegate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: "dannyphaton@test.com",
      password: "123123",
      repassword: "123123",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await registerUser(email, password);
      navegate("/");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      console.log(error.code);
      setError(code, {
        message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Title text="Register" />
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingresar email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu correo"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresar password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          label="Ingresa tu contraseña"
           error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresar password"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          label="Repite tu contraseña"
          error={errors.repassword}
          
        >
          <FormError error={errors.repassword} />
        </FormInput>
        {loading ? <ButtonLoading /> : <Button text="Register" type="submit" />}
      </form>
    </>
  );
};

export default Register;
