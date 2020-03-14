import $ from 'jquery';

const imageURL = 'https://picsum.photos/132/132/?random';
const textURL = 'https://baconipsum.com/api/?type=all-meat&paras=4&format=json';

function httpGet(url) {
  return new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve({ data: xhr.response, url: xhr.responseURL });
      } else {
        reject(xhr.status);
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network Error'));
    };

    xhr.send();
  }));
}

function cardDecorating() {
  const cardList = document.querySelectorAll('.content');
  [...cardList].forEach((cardName, index) => {
    cardName.className = (index % 4 === 0 || index % 4 === 3) ? 'block-name item_purple' : 'block-name item_yellow';
  });
}

function createCard(textArr) {
  JSON.parse(textArr).forEach(async (text) => {
    const res = await httpGet(imageURL);
    const item = 
    $(
      `<div class="content-item">
        <div class="header-item">
          <span class="item__line">
            <p class="item__article">text</p>
          </span>
        </div>
        <div class="item-block">
          <div class="item-block-text">
            <p class="item__text">
              <img src="${res.url}"} class="item__img">${text}
            </p>
            <a href="#" class="item__link">Read more...</a>
          </div>
        </div>
      </div>`
    ).appendTo(".content")
    console.log(res);
    //cardDecorating();
  });
}

async function getDataText(url) {
  const res = await httpGet(url);
  createCard(res.data);
}

getDataText(textURL);
