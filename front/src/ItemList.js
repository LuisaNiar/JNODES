import React from 'react';

const ItemList = ({ items, deleteItem, setSelectedItem }) => {
    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => setSelectedItem(item)}>Edit</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
