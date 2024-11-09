const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Rutas RESTful
let items = [];

// Obtener todos los elementos
app.get('/items', (req, res) => {
    res.json(items);
});

// Crear un nuevo elemento
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});

// Obtener un elemento por ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Elemento no encontrado.');
    res.json(item);
});

// Actualizar un elemento por ID
app.put('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Elemento no encontrado.');

    const updatedItem = { id: parseInt(req.params.id), ...req.body };
    items[index] = updatedItem;
    res.json(updatedItem);
});

// Eliminar un elemento por ID
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Elemento no encontrado.');

    items.splice(index, 1);
    res.status(204).send();
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
