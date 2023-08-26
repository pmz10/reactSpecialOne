import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("dannyphaton@test.com");
  const [password, setPassword] = useState("123123");

  const {registerUser} = useContext(UserContext)

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("procesando form:", email, password);
    try{
        await registerUser(email, password);
        console.log("Usario creado")
    }catch (error) {
        console.log(error.code)
        alert("Este correo ya esta registrado")
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresar email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresar password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
