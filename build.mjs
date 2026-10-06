import fs from 'node:fs';
fs.mkdirSync('dist/client',{recursive:true});
for(const file of fs.readdirSync('dist',{withFileTypes:true})){if(file.isFile())fs.copyFileSync('dist/'+file.name,'dist/client/'+file.name)}
console.log('Static assets prepared; Worker endpoint included.');
