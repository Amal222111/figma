import { useState } from "react";
import { useRegisterMutation } from "../../model/authApi";
import type { RegisterRequest } from "../../model/type";
import { useNavigate } from "react-router";
import { Link } from "react-router";
export default function RegistrationForm() {
  const [form, setForm] = useState<RegisterRequest>({
    username: "",
    email: "",
    password: "",
  });

  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register(form).unwrap();
      console.log("Форма отправлена:", response);
      alert(`Регистрация успешна!\nДобро пожаловать, ${form.username}!`);

      setForm({
        username: "",
        email: "",
        password: "",
      });
        navigate("/");
    } catch (err) {
      console.error("Ошибка регистрации:", err);
      alert("Ошибка при регистрации!");
    }
  };

  return (
    <div className="bg-gray-100">
      <div  style={{ maxWidth: 400, margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
        <Link className="text-3xl px-2" to="/login">Login</Link>
    
        <h1 className="text-3xl px-10">Register</h1>
        </div>
        <div className="py-3">
          <label htmlFor="username">Username</label><br />
          <input
           className="border rounded-sm px-20 py-2"
            type="text"
            id="username"
            name="username"
            required
            value={form.username}
            onChange={handleChange}
          />
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

        <button className="bg-purple-900 text-white px-36 py-1 text-lg border rounded-md"  type="submit" style={{ marginTop: 10, marginBottom: 150}} disabled={isLoading}>
          {isLoading ? "Регистрация..." : "Register"}
        </button>

        {error && <p style={{ color: "red" }}>Ошибка регистрации</p>}
      </form>
    </div>
    </div>
    
  );
}
