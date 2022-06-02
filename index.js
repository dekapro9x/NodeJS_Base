// Bước 1: Import module http
const http = require('http');
// Bước 2: Khởi tạo server
const server = http.createServer(function(request, response){
    response.writeHead(200, {
        "Context-type" : "text/plain"
    });
    response.write('Your URL is ' + request.url);
    response.end();
});
 
// Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
server.listen(3000, function(){
    console.log('Connected Successfull!');
});