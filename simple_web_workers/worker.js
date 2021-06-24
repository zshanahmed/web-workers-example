onmessage = function(e) {
    console.log('Worker: Message recieved from the main script');
    const result = e.data[0] * e.data[1];
    if (isNaN(result)){
        postMessage('Please type correct numbers!')
    } else {
       const workerResult = 'Result: ' + result
       console.log('Worker: Message sent back to the main script');
       postMessage(workerResult); 
    }
}