const first = document.querySelector('#input1')

const result = document.querySelector('#result')
if (window.Worker) {
    const myWorker = new SharedWorker('worker.js')
    first.onchange = function () {
        myWorker.port.postMessage([first.value, first.value])
        console.log('Message sent to the worker script!');
    }
    myWorker.port.onmessage = function(e) {
        result.textContent = e.data
        console.log('Message recieved from the worker');
    }
} else {
    console.log('Workers are not supported by this browser');
}

