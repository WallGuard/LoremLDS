import '../styles/style.scss';

let pointer = 0;
const list = document.getElementsByClassName('carousel');

function httpGet(url) {
  return new Promise(((resolve, reject) => {
    const xHR = new XMLHttpRequest();
    xHR.open('GET', url, true);

    xHR.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseURL);
      } else {
        reject(xhr.status);
      }
    };

    xHR.onerror = () => {
      reject(new Error('Network Error'));
    };

    xHR.send();
  }));
}
/*
function carousel() {
  [...list].forEach((item, index) => {
    if (index !== Math.abs(pointer)) {
      item.className = 'carousel invisible';
    } else {
      item.className = 'carousel';
    }
  });
}
*/

function cardDecorating() {
  const cardList = document.querySelectorAll('.block-with-cards_max-cards-in-row_2 > .card > .block-name');
  [...cardList].forEach((cardName, index) => {
    cardName.className = (index % 4 === 0 || index % 4 === 3) ? 'block-name block-name_them_purple' : 'block-name block-name_them_yellow';
  });
}

function createCard(textArr) {
  textArr.forEach((text) => {
    const item = document.getElementById('card').content.cloneNode(true);
    httpGet('https://picsum.photos/132/132/?random')
      .then(
        (res) => {
          item.querySelector('.content__text > p').innerHTML = text;
          item.querySelector('.content__image > img').src = res;
          document.getElementsByClassName('block-with-cards_max-cards-in-row_2')[0].append(item);
          cardDecorating();
        },
        err => console.log('err', err),
      );
  });
}

document.getElementById('left').onclick = () => {
  pointer = (pointer - 1) % list.length;
  carousel();
};

document.getElementById('right').onclick = () => {
  pointer = (pointer + 1) % list.length;
  carousel();
};

$.get('https://baconipsum.com/api/?type=all-meat&paras=4&start-with-lorem=1', (data, status) => {
  if (status === 'success') {
    createCard(data);
  } else {
    alert('No connection to server. Reload the page');
  }
});