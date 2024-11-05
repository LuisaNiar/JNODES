const express = require('express');
const cors = require('cors'); // Importa cors
const app = express();
const PORT = 8080; // Cambiado a 8080

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Almacenamiento en memoria para los datos
let items = [];

// Ruta para obtener todos los items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Ruta para crear un nuevo item
app.post('/api/items', (req, res) => {
    const item = {
        id: items.length + 1,
        ...req.body
    };
    items.push(item);
    res.status(201).json(item);
});

// Ruta para obtener un item por ID
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Elemento no encontrado');
    res.json(item);
});

// Ruta para actualizar un item por ID
app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Elemento no encontrado');

    const updatedItem = {
        ...item,
        ...req.body
    };
    items = items.map(i => (i.id === parseInt(req.params.id) ? updatedItem : i));
    res.json(updatedItem);
});

// Ruta para eliminar un item por ID
app.delete('/api/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Elemento no encontrado');

    items.splice(itemIndex, 1);
    res.status(204).send();
});

// Iniciar el servidor en el puerto 8080
app.listen(PORT, () => {
    console.log(`BFF corriendo en http://localhost:${PORT}`);
});
