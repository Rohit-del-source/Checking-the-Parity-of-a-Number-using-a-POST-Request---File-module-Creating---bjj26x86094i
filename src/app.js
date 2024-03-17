const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value = obj.num1;
     

        if(!obj || !value ){
          res.writeHead(400, {'Content-Type': 'text/plain' } )
          return res.end('Invalid payload. Please provide a JSON object with a "num1" field containing a number.');
          
        }else if(parseInt(value) % 2 ===0){
          res.writeHead(200, {'Content-Type': 'text/plain' } )
         return res.end(`The number ${value} is even`)
        }else{
          res.writeHead(404, {'Content-Type': 'text/plain' } )
         return res.end(`The number ${value} is odd`)
          
        }
      
    
     
   });
  }

  
});


module.exports = server;