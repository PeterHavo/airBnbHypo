function waitsec(seconds){
    return new Promise((res, rej)=>{

        if(seconds > 0 ){
           
            rej('rejected')
        } else {setTimeout(()=>{
            
            seconds++
            console.log(seconds)
            res(seconds)
        },1000)}

        
    })
}

// waitsec(0).then(waitsec).then(value => console.log(value)).catch(err => console.log(err))

// waitsec(1).then(waitsec, (err) => {
//     console.log(err)
// })

//-------------------------------Promise all build in method ----------------------

let promise1 = new Promise ((res, rej) => {
    setTimeout(()=>{
        res('resolved')
    },1000)
})

let promise2 = new Promise ((res, rej) => {
    setTimeout(()=>{
        res('resolved!!')
    },2000)
})

Promise.all([promise1, promise2])
.then(success => console.log(success))
.catch(err => console.log(err))