const background = document.querySelector(".background");
const book_list = document.querySelectorAll(".booklist img");
let bigimg = document.querySelector(".bigimg")
const besttitle = document.querySelector("#besttitle")
const booktitle = document.querySelector("#booktitle")
const content = document.querySelector("#content")

// let ran = parseInt(Math.random()*4+1); // 0~4까지 랜덤한 숫자 생성.
// background.style.backgroundImage = `url(images/home${ran}.jpg)`


function change_background() {

    let ran = parseInt(Math.random() * 4 + 1); // 0~4까지 랜덤한 숫자 생성.
    background.style.backgroundImage = `url(images/home${ran}.jpg)`

    setTimeout(change_background, 3000)
}

change_background();

function bestSeller() {
    location.href = "bestSeller.html";
}

for (let i = 0; i < book_list.length; i++) {

    book_list[i].addEventListener('click', function () {
        console.log(book_list[i].src)
        console.log(bigimg.style)
        // const change_img = book_list[i];



        bigimg.src = "./images/book.png";
        booktitle.innerText = "소크라테스의 변명";
        content.innerText = "";

    })
}

