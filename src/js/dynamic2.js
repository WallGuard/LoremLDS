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

function colorize(index) {
  //if (index === 1) {return 'item__line-line-2'}
  if (index % 2 !== 0) { return 'item__line-line-2' }
}

function createItem(textArr) {
  JSON.parse(textArr).forEach(async (text, index) => {
    const res = await httpGet(imageURL);
    $(
      `<div class="content-item">
        <div class="header-item">
          <span class="item__line ${colorize(index)}">
            <p class="item__article">SUPER LOGO</p>
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
  });
}

async function getDataText(url) {
  const res = await httpGet(url);
  createItem(res.data);
}

getDataText(textURL);
