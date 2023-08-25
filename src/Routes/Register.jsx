import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("dannyphaton@test.com");
  const [password, setPassword] = useState("123123");

  return (
    <>
      <h1>Register</h1>
      <form >
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
