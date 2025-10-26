import { useParams, Link } from "react-router-dom";

export default function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find(u => u.id === Number(id));

  if (!user) return <div className="p-6">User not found.</div>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 hover:underline">← Back</Link>
      <div className="bg-white rounded shadow p-6 mt-4">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
      </div>
    </div>
  );
}