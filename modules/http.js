const http = require("http");

const port = 5000

const server = http.createServer((req,res)=>{
    if(req.url ==='/home'){
        res.writeHead(200,{"Content-Type": "text/html"})
        res.end('<h1>Home page</h1>');
    }

    if(req.url==='/users'){
        const users = [
            {
                nome: 'jhon doe',
                email: 'jhon@doe.com'
            },
            {
                nome: 'jane doe',
                email: 'jane@doe.com'
            }
        ]
        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(users))
    }
})

server.listen(port,()=> console.log(`Rodando na porta ${port}`));