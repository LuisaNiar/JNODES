import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error al obtener los items:', error);
    }
  };

  const addItem = async () => {
    if (name && description) {
      const newItem = { name, description };
      try {
        const response = await axios.post('http://localhost:8080/api/items', newItem);
        setItems([...items, response.data]);
        setName('');
        setDescription('');
      } catch (error) {
        console.error('Error al agregar el item:', error);
      }
    }
  };

  return (
      <div className="container">
        <h1>Item Management</h1>
        <h2>Add Item</h2>
        <form
            onSubmit={(e) => {
              e.preventDefault();
              addItem();
            }}
        >
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
              <li key={item.id}>
                <span className="item-text">{item.name} - {item.description}</span>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
