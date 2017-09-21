var fs = require('fs');

module.exports = (path) =>{
    return new Promise((res, rej)=>{
        fs.readFile(path, 'utf8', (err, data) =>{
            if (err){
                console.log(`there was an error ${err}`)
            }
            else {
                res(data)
            }
        })

    })
}
