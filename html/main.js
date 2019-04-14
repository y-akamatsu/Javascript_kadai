/*
========== kadai_4 ==========
*/
let msg = '';
for (let i = 0; i <= 100; i++){
  msg += `${i} `
  if (i % 5 === 0 && i !== 0) {
    msg += '<br>'
  }
}

document.getElementById('result').innerHTML = msg;
/*
========== kadai_3 ==========
*/
// let message = '';
// for( let i = 0; i <= 100; i++){
//   message += `${i} `
// }
// document.getElementById('result').innerHTML = message;


/*
========== kadai_2 ==========
*/

// function getDate() {
//   const date = new Date();
//   const hours = date.getHours();
//   let message = '';

//   if (5 <= hours && hours < 12) {
//     message = 'おはようございます';
//   } else if (12 <= hours && hours < 19) {
//     message = 'こんにちわ';
//   } else if (19 <= hours && hours < 24) {
//     message = 'こんばんわ';
//   } else {
//     message = '夜更かしさん';
//   }

//   const element = document.getElementById('result');
//   element.innerHTML = message;
// }

// const btn1 = document.getElementById('btn1');
// addEventListener('click', getDate)

/*
========== kadai_1 ==========
*/

// const element = ducment.getElememntById('result');
// element.innerHTML = 'こんにちは';