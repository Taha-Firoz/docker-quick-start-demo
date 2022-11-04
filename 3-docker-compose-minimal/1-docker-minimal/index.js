import {createServer} from 'http'

const requestListener = function (req, res) {
    res.writeHead(200);
    console.log(`Request received at ${new Date()} from ${req.connection.remoteAddress}`);
    res.end("Echo from NUCES!");
};

createServer(requestListener).listen(parseInt(process.env.PORT) || 3000, process.env.HOST || 'localhost',()=>{
    console.log(`Server running at http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/`)
})


process.on('SIGINT', (code)=>{
    console.log('SIGINT received, terminating');
    process.exit();
});