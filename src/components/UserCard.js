import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="font-semibold text-lg">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-gray-600">{user.company?.name}</p>

      <Link
        to={`/user/${user.id}`}
        className="inline-block mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}