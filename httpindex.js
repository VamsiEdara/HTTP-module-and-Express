const http = require('http'); // required the http module
//In http module ----
//creating server is the first part and the second part is listening to the incoming request from client


// http.createServer will accept a callback function. 
// This callback function will be fired off each time a new request hits our server.
// The call back has two arguments these are request and response


const PORT = 3000;

// Using the createServer function we can actually create a basic http server using http module
// This function returns a server object, and takes a callback as an argument.
// This function created a server object but didn't start the server
const server = http.createServer(function listener(request, response) {
    /**
     * request -> we will be able to details of incoming http request -> object
     * response -> we will be able to configure what response we need to send
     *             for an incoming http request -> object
     */
    // this callback is a kind of listener function that is going to collect 
    // every http request that we will make to our server

    // TODO..
   //console.log("Incoming request details: ",request);
  //console.log("Response object details ",response);
    if(request.url == '/home') {
        // if we make a request on /home this if block will be executed
        console.log(request.method);
        
        response.end("completed");

        // how can we send an HTML code, or JSON from this setup ? 
    }
    console.log("Request received");
});

server.listen(PORT, function exec() {
    // once we succesfully boot up the server on the given port, this callback will be
    // executed. 
    console.log(`Server is Up and running on PORT: ${PORT}`);
});
