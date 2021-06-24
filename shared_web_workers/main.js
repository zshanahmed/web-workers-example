const first = document.querySelector('#input1')
const second = document.querySelector('#input2')

const result = document.querySelector('#result')
if (window.Worker) {
    const myWorker = new SharedWorker('worker.js')
    first.onchange = function () {
        myWorker.port.postMessage([first.value, second.value])
        console.log('Message sent to the worker script!');
    }

    second.onchange = function () {
        myWorker.port.postMessage([first.value, second.value])
        console.log('Message sent to the worker script!');
    }

    myWorker.port.onmessage = function(e) {
        result.textContent = e.data
        console.log('Message recieved from the worker');
    }
} else {
    console.log('Workers are not supported by this browser');
}

