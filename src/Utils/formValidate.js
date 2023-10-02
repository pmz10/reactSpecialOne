// eslint-disable-next-line no-unused-vars
export const formValidate = (getValues) => {
  return {
    require: {
      value: true,
      message: "Campo obligatorio",
    },
    patternEmail: {
      value: /[a-z-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: "Formato de email incorrecto",
    },
    minLength: { value: 6, message: "Minimo 6 caracteres" },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return "No seas payaso, escribe algo";
        }
        return true;
      },
    },
    validateEquals(getValues) {
      return {
        equals: (v) =>
          v === getValues("password") || "No coinciden las contraseñas",
      };
    },
  };
};
