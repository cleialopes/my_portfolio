const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Cargar variables de entorno si usas .env

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Middleware para aceptar URLs como "/index" en vez de "/index.html"
app.use((req, res, next) => {
    if (!path.extname(req.path)) {
        const filePath = path.join(__dirname, 'public', req.path + '.html');
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    next();
});

// Manejar rutas desconocidas redirigiendo al index.html (SPA soporte)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Usar variable de entorno para el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});