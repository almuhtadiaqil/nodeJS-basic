const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt',{
    highWaterMark:10
});
const writeableStream = fs.createWriteStream('./stream/output.txt');
// readableStream.setEncoding('utf-8');

readableStream.on('readable', ()=>{
    try{
        // process.stdout.write(`[${readableStream.read()}]`);
        const write = `${readableStream.read()}`;    
        writeableStream.write(write);
    }
    catch(error){
        console.log(error.message);
    }
});

readableStream.on('end', ()=>{
    writeableStream.end('Akhir dari writable stream!');
})
// try{
//     const writeableStream = fs.createWriteStream('./stream/output.txt');
//     [readableStream.read()].forEach(element => {
//     });
//     writeableStream.write(`[${element}]\n`);
//     writeableStream.end('Akhir dari writable stream!');
// }
// catch(error){
//     console.log(error);
// }