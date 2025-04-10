import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  console.log(`Received request for URL: ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from Node.js 20!');
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
