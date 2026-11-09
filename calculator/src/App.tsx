import { useState } from "react";
import "./App.css";

const Users = [
  { id: 1, name: "Muhammad", email: "magammed510@gmail.com", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq-ovH_a9JqS-gLyTxIeRlnCmEpIklHgyfdRug8BSQw&s=10" },
  { id: 2, name: "Izatullo", email: "Izatullo@gmail.com", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9WTLUGMNg3JVtZ4vL3_r3WKzzoSQfOJOjLzFCkzEgA&s=10" },
];

const App = () => {
  const [users, setUsers] = useState(Users);
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  return (
    <div>
      <div className="inps">
        <input type="text" className="addName" placeholder="Add name here..." value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" className="addFoto" placeholder="Add foto here..." value={foto} onChange={(e) => setFoto(e.target.value)} required />
        <input type="text" className="addEmail" placeholder="Add email here..." value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <button onClick={() => { setUsers([...users, { id: Date.now(), name: name, foto: foto, email: email }]); setName(""); setFoto(""); setEmail(""); }}>Add</button>

      <div className="div">
        {users.map((user) => (
          <div className="box" key={user.id}>
            <img className="foto" src={user.foto} alt="" />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <button className="del" onClick={() => setUsers(users.filter((elem) => elem.id !== user.id))}>Delete</button>
            <button className="edit" onClick={() => { if (editId === user.id) { setUsers(users.map((elem) => elem.id === user.id ? { ...elem, name: name, foto: foto, email: email } : elem)); setEditId(null); setName(""); setFoto(""); setEmail(""); } else { setName(user.name); setFoto(user.foto); setEmail(user.email); setEditId(user.id); } }}>{editId === user.id ? "Save" : "Edit"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


