/* eslint-disable */

const urlText = `https://baconipsum.com/api/?type=all-meat&paras=${paras}`;
const urlImage = 'https://picsum.photos/200/?random';

const color = function changeColorOfSomeHeadings(elements, newColor) {
    function changeColor(index) {
      const heading = elements[index].querySelector('.post__color-block');
      heading.style.background = newColor;
    }
    changeColor(0);
    for (let i = 3; i < elements.length; i += 4) {
      changeColor(i);
      if (elements[i + 1]) changeColor(i + 1);
    }
  };
  
  const makeBlocks = function generateBlocksWithDataFromExtSource(paras = 4) {
    if (paras <= 0) return;
  
    const postTemplate = document.querySelector('.post_half');
    const postContainer = document.querySelector('.posts');
    for (let i = 0; i < paras; i += 1) {
      const duplicate = postTemplate.cloneNode(true);
      duplicate.classList.add('duplicate');
      postContainer.insertBefore(duplicate, null);
      duplicate.classList.add('visible');
    }
    const duplicates = postContainer.querySelectorAll('.duplicate');
    color(duplicates, '#FFC740');
  
    const request = urlT =>
      new Promise((resolve, reject) => {
        const xHR = new XMLHttpRequest();
        xHR.open('GET', urlT);
        xHR.onload = () => {
          if (xHR.status === 200) {
            resolve(xHR);
          } else {
            reject(xHR.statusText);
          }
        };
        xHR.onerror = () => reject(request.statusText);
        xHR.send();
      });
      
    async function insertText(url) {
      try {
        const response = await request(url);
        const paragraphs = JSON.parse(response.responseText);
        duplicates.forEach((duplicate, i) => {
          const textPlaceholder = duplicate.querySelector('.post__main-text');
          textPlaceholder.innerHTML = paragraphs[i];
        });
      } catch (err) {
        console.log('request text failed', err);
      }
    }
  
    async function insertImage(url, placeholder) {
      try {
        const response = await request(url);
        const imagePlaceholder = placeholder.querySelector('.post__image');
        imagePlaceholder.style.background = `url('${response.responseURL}')`;
        imagePlaceholder.style.backgroundSize = 'cover';
      } catch (err) {
        console.log('request image failed', err);
      }
    }
  
    insertText(urlText);
  
    duplicates.forEach((duplicate) => {
      insertImage(urlImage, duplicate);
    });
  };
  
  makeBlocks(4);