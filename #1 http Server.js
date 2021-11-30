//loading http module
const httpServer = require('http')

//defining non used port to run server
const port = 3000;

//creating http servr
httpServer.createServer( (request, response) =>
{
    //tell the browser that everything is okay
    response.writeHead(200,
        {
            'Content-Type' : 'text/plain'
        }
    )

    //writing the body of the page
    response.write("Hello World\nCreating http server and running!")

    //Tell the server that all of the response headers and body have been sent
    response.end()

}

).listen(port)

//printing the log message to console
console.log('Server running at http://127.0.0.1:3000/');