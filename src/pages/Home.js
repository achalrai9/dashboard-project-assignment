import { Link } from "react-router-dom";
import { useState } from "react";
import UserCard from "../components/UserCard";

export default function Home({ users }) {
  const [search, setSearch] = useState("");

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add User</Link>
      </div>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-6"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}