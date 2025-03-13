import express from 'express';
import path from 'node:path';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public', './index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public', './about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public', './contact-me.html'));
});

app.get('*', (req, res) => {
  res
    .status(404)
    .sendFile(path.join(import.meta.dirname, 'public', './404.html'));
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
