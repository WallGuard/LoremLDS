class Dynamic {
    constructor(
        imageURL = 'https://picsum.photos/132/132/?random',
        textURL = 'https://baconipsum.com/api/?type=all-meat&paras=4&format=json'
    ) {
        this.imageURL = imageURL;
        this.textURL = textURL;
        this.getDataText(this.textURL);
    }

    httpGet(url) {
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

    colorize(index) {
        //if (index === 1) {return 'item__line-line-2'}
        if (index % 2 !== 0) { return 'item__line-line-2' }
    }

    createItem(textArr) {
        JSON.parse(textArr).forEach(async (text, index) => {
            const res = await this.httpGet(this.imageURL);
            $(
                `<div class="content-item">
              <div class="header-item">
                <span class="item__line ${this.colorize(index)}">
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

    getDataText = async (url) => {
        const res = await this.httpGet(url);
        this.createItem(res.data);
    }
}

new Dynamic();