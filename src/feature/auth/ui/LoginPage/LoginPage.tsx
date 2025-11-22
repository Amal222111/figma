import { useState } from "react";
import { useLoginMutation } from "../../model/authApi";
import type { LoginRequest } from "../../model/type";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [form, setForm] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(form).unwrap();
      alert("Login successful");
      console.log("Форма отправлена:", response);

      setForm({
        email: "",
        password: "",
      });
        navigate("/");
    } catch (err) {
      console.error("login error:", err);
      alert("login error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
    
        <div>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            id="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }} disabled={isLoading}>
          {isLoading ? "Login..." : "Login"}
        </button>

        {error && <p style={{ color: "red" }}>Login error</p>}
      </form>
    </div>
  );
}
