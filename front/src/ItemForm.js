import React, { useState, useEffect } from 'react';

const ItemForm = ({ addItem, updateItem, selectedItem, setSelectedItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (selectedItem) {
            setName(selectedItem.name);
            setDescription(selectedItem.description);
        } else {
            setName('');
            setDescription('');
        }
    }, [selectedItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, description };

        if (selectedItem) {
            updateItem(selectedItem.id, item);
        } else {
            addItem(item);
        }

        setName('');
        setDescription('');
        setSelectedItem(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedItem ? 'Edit Item' : 'Add Item'}</h2>
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
            <button type="submit">{selectedItem ? 'Update' : 'Add'}</button>
            {selectedItem && <button onClick={() => setSelectedItem(null)}>Cancel</button>}
        </form>
    );
};

export default ItemForm;
