function slowEcho(message, delay){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            if (random % 2 ===0){
                resolve (message);
            } else {
                let err = new Error("Something odd has happened.");
                reject(err);
            }
        }, delay);
    });
}

document.getElementById('btn')
.addEventListener('click', () =>{
    slowEcho('Basic Promise', 1000)
    .then((a) =>{
        console.log(a);
    }).catch((err) => {
        console.log (err);
    }
})
