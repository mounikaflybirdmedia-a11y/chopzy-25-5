import fs from 'fs';
import app from './dist/server/server.js';

async function generate() {
  const req = new Request('http://localhost/');
  const res = await app.fetch(req, {}, {});
  const html = await res.text();
  fs.writeFileSync('./dist/client/index.html', html);
  console.log("index.html successfully generated for static SPA deployment!");
}

generate().catch(console.error);
