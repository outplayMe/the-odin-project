import http from 'node:http';
import path from 'node:path';
import { readFile } from 'node:fs/promises';

const server = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    try {
      const data = await readFile(
        path.join(import.meta.dirname, '/index.html')
      );
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(data);
    } catch (err) {
      console.log(err.message);
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('Server error');
    }
  } else if (url === '/about') {
    try {
      const data = await readFile(
        path.join(import.meta.dirname, '/about.html')
      );
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(data);
    } catch (err) {
      console.log(err.message);
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('Server error');
    }
  } else if (url === '/contact-me') {
    try {
      const data = await readFile(
        path.join(import.meta.dirname, '/contact-me.html')
      );
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(data);
    } catch (err) {
      console.log(err.message);
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('Server error');
    }
  } else {
    try {
      const data = await readFile(path.join(import.meta.dirname, '/404.html'));
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end(data);
    } catch (err) {
      console.log(err.message);
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('Server error');
    }
  }
});

server.listen(5000, () => {
  console.log('server is running on port 5000');
});
