var http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><label for="usrname">Username</label><input type="text" id="usrname" name="usrname" required><BR><label for="psw">Password</label><input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><BR><input type="submit" value="Submit"><BR><p style="color:red">This is Home Page.</p></body></html>');
        res.end();
    }else if(req.url=='/student'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p style="color:blue">This is student Page.</p></body></html>');
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p style="color:blue">Other pages</p></body></html>');
        res.end();
    }
    
});
server.listen(5000);
console.log('server is running!');