import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err));
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, {...newUser, id: users.length + 1}]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/user/:id" element={<UserDetails users={users} />} />
          <Route path="/add" element={<AddUser addUser={addUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
