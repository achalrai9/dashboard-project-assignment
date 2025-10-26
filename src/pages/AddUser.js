import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddUser({ addUser }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.company) {
      setError("All fields are required");
      return;
    }

    addUser({
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: { name: form.company }
    });

    navigate("/");
  };

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 hover:underline">← Back</Link>
      <div className="bg-white rounded shadow p-6 mt-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}