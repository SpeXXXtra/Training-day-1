function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Data received')
        })
    })
}

getData().then(data => console.log(data)).catch(err => console.log(err));
