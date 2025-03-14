const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config(); // Cargar variables de entorno si usas .env

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Manejar rutas desconocidas redirigiendo al index.html (SPA soporte)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Usar variable de entorno para el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});