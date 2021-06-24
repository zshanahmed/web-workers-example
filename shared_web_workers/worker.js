onconnect = function(e) {
    port = e.ports[0]

    port.onmessage = function(e) {
        const result = e.data[0] * e.data[1]
        console.log('Worker: Message recieved from the main script');
        if (isNaN(result)){
            port.postMessage('Please type a valid number!');
        } else {
            const workerResult = 'Result: ' + result;
            console.log('Worker: Message sent to the main script!');
            port.postMessage(workerResult);
        }
    }
}