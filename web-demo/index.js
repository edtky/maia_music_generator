// import * as tf from '@tensorflow/tfjs';
// import {loadGraphModel} from '@tensorflow/tfjs-converter';

// const tfn = require("@tensorflow/tfjs-node");
// const handler = tfn.io.fileSystem("./path/to/your/model.json");
// const model = tf.loadModel(handler);
// const MODEL_URL = './web/model.json';

// const model = await tf.loadGraphModel(MODEL_URL);
// // const cat = document.getElementById('cat');
// const input = tf.Tensor([[1, 2], [3, 4]]);
// console.log(model)

// model.execute(tf.browser.fromPixels(cat));

async function run() {
    // Create a simple model.
    const MODEL_URL = './web/model.json';

    const model = await tf.loadGraphModel(MODEL_URL);
    const inputTensor = tf.buffer([512,128,149]).toTensor();
    const hc1 = tf.buffer([128,512]).toTensor();
    const hc2 = tf.buffer([128,512]).toTensor();
    // console.log(inputTensor);
    // console.log(inputTensor.toTensor().print());
    console.log(model);
    // inputTensor.array().then(array => console.log(array));
  
    // Use the model to do inference on a data point the model hasn't seen.
    // Should print approximately 39.
    const output = model.predict({1: hc1, 2: hc2, input:inputTensor}).dataSync();
    console.log(output);
    document.getElementById('micro-out-div').innerText =
      output[0]
  }
  
run();