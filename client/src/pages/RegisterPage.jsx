import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "Post",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
    if (response.status===200) {
      alert('registration successfull')
    }else{
      alert('registration failed')
    }
  };

  return (
    <form className=" max-w-screen-sm mx-auto my-0" onSubmit={register}>
      <h1 className=" font-bold mb-3 text-2xl">Register</h1>
      <input
        type="text"
        placeholder="username"
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-400 rounded-md block py-2">
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
