const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

// Endpoint para upload de arquivos
app.post('/upload', upload.array('files'), (req, res) => {
    const fileNames = req.files.map(file => file.originalname);
    req.files.forEach(file => {
        const dest = path.join(__dirname, 'uploads', file.originalname);
        fs.renameSync(file.path, dest);
    });
    res.json(fileNames);
});

// Endpoint para listar arquivos
app.get('/files', (req, res) => {
    fs.readdir(path.join(__dirname, 'uploads'), (err, files) => {
        if (err) return res.status(500).send('Erro ao listar arquivos');
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});