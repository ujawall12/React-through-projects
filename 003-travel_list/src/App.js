import {useState} from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Towel", quantity: 1, packed: false },
];
export default function App() {

  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>

}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form(){

  const[description, setDescription] = useState('');

  function handleSubmit(e){
    e.preventDefault();
  }

  return <form className='add-form' onSubmit={handleSubmit}>
    <h3> What do you need for your trip ? 😍</h3>
    <select>
      {Array.from({length: 20}, (_, i) => i+1)
          .map(num => <option value={num} key={num}>{num}</option> )}
    </select>
    <input type='text' placeholder='Item...' value={description} onChange={e => setDescription(e.target.value)}/>
    <button>Add</button>
  </form>;
}

function PackingList(){
  return <div className='list'>
    <ul>LIST
      {initialItems.map(item => <Item key={item.id} item={item} />)}
    </ul>
  </div>;
}

function Item({ item }) {
  return <li>
    <span style={item.packed ? { textDecoration: "line-through" } : undefined}>
      {item.description} {item.quantity}
    </span>
    <button>❌</button>
  </li>;
}

function Stats(){
  return <footer className='stats'>
     <em> 🎒You have x items in your list and you have already packed x itmes (x%).</em>
  </footer>
}