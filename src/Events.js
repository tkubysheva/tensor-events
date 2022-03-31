/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    document
        .getElementsByTagName('body')[0]
        .insertAdjacentElement('beforeend', button);
    button.addEventListener('click', function (event) {
        button.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const list = document.createElement('ul');
    document
        .getElementsByTagName('body')[0]
        .insertAdjacentElement('beforeend', list);
    for (let a in arr) {
        const l = document.createElement('li');
        l.innerHTML = arr[a];
        l.addEventListener('mouseover', function () {
            l.setAttribute('title', arr[a]);
        });
        list.insertAdjacentElement('beforeend', l);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    document
        .getElementsByTagName('body')[0]
        .insertAdjacentElement('beforeend', link);
    link.textContent = 'tensor';
    link.href = 'https://tensor.ru/';
    let firstTime = true;
    link.addEventListener('click', function (event) {
        if (firstTime) {
            firstTime = false;
            event.preventDefault();
            link.textContent += ' https://tensor.ru/';
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document
        .getElementsByTagName('body')[0]
        .insertAdjacentElement('beforeend', ul);
    ul.insertAdjacentElement('beforeend', li);
    document
        .getElementsByTagName('body')[0]
        .insertAdjacentElement('beforeend', button);
    button.addEventListener('click', function (event) {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.insertAdjacentElement('beforeend', newLi);
        newLi.addEventListener('click', function (event) {
            newLi.textContent += '!';
        });
    });
    li.addEventListener('click', function (event) {
        li.textContent += '!';
    });
}
