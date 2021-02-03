// const status = 200;
// if (status === 200) {
//     console.log('OK!');
// } else if (status === 400) {
//     console.log('Error!');
// } else if (status === 600) {
//     console.log('Error Max!');
// } else {
//     console.log('Unknown status');
// }
const status = 400;

const message = (status === 200) ? 'OK!' : 'Error!';

console.log(message);