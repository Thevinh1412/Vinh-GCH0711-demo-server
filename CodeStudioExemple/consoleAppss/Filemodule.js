var fs = require('fs');
var fileModule = {
    taoFile: function(tenFile,noiDung){
        fs.writeFile(tenFile, noiDung,myCallback);
    },
    docFile: function(tenFile){
        fs.readFile(tenFile,'utf-8',  (err, data)=>{
        if (err) throw err; 
            console.log(data);
        });
    },
    appendFile: (tenFile,noiDung)=>{
        fs.appendFile(tenFile, noiDung,myCallback);
    }
}
function myCallback(err){
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
}
module.exports = fileModule;