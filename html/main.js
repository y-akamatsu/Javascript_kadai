function getDate() {
  const date = new Date();
  const hours = date.getHours();
  let message = '';

  if (5 <= hours && hours < 12) {
    message = 'おはようございます';
  } else if (12 <= hours && hours < 19) {
    message = 'こんにちわ';
  } else if (19 <= hours && hours < 24) {
    message = 'こんばんわ';
  } else {
    message = '夜更かしさん';
  }

  const element = document.getElementById('result');
  element.innerHTML = message;
}

const btn1 = document.getElementById('btn1');
addEventListener('click', getDate)
