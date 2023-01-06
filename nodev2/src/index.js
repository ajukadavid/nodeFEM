const http = require('http')


const server = http.createServer(async(req, res) => {
        if(req.method === 'GET' && req.url === '/') {
            res.end()
        }
})


server.listen(3000, () =>{
    console.log('server running on port 3k')
})