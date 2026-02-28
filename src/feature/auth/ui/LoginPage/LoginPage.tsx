import { useState } from "react";
import { useLoginMutation } from "../../model/authApi";
import type { LoginRequest } from "../../model/type";
import { useNavigate } from "react-router";
import { Link } from "react-router";

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
    <div className="bg-gray-100">
      <div className="pb-100" style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <Link className="text-3xl px-2" to="/registration">Register</Link>

            <h1 className="text-3xl px-10">Login</h1>
          </div>
          <div className="py-3">
            <label htmlFor="email">Email</label><br />
            <input
              className="border rounded-sm px-20 py-2"
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="py-3">
            <label htmlFor="password">Password</label><br />
            <input
              className="border rounded-sm px-20 py-2"
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button className="bg-purple-900 text-white px-38 py-1 text-lg border rounded-md" type="submit" style={{ marginTop: 10, marginBottom: 150 }} disabled={isLoading}>
            {isLoading ? "Login..." : "Login"}
          </button>

          {error && <p style={{ color: "red" }}>Login error</p>}
        </form>
      </div>
    </div>

  );
}
