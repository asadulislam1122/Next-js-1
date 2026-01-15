"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const mockEmail = "user@gmail.com";
  const mockPassword = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === mockEmail && password === mockPassword) {
      // Save login info in cookie
      Cookies.set("auth", "true", { expires: 1 }); // 1 day expiry
      router.push("/items"); // redirect to items page
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <form
        onSubmit={handleLogin}
        className="bg-base-200 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
