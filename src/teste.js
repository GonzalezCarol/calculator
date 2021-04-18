
const greet = () => {
    console.log('funcionou')
}

if (true || shouldNeverBeenExecuted()){
    greet()
}