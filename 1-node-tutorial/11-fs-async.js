//Asynchronous FS and Callback hell

const {readFile, writeFile} = require('fs')
//readFile: read files from directories
//writeFile: write new files or append exiting ones

readFile('./content/first.txt','utf-8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`, ()=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})