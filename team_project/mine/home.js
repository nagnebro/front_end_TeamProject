const background = document.querySelector(".background");
const book_list = document.querySelectorAll(".booklist img");
let bigimg = document.querySelector(".bigimg")
const booktitle = document.querySelector("#booktitle")
const content = document.querySelector("#content")
const content_list = document.querySelectorAll(".hid_content")
const header_a = document.querySelectorAll("header a")
const article_title = document.querySelector(".article_title");
const eventbtm = document.querySelector(".eventbox")

let bookname_list = [

    "소크라테스의 변명",
    "Java의 정석",
    "Do it! 점프 투 파이썬",
    "세이노의 가르침",
    "역행자"

]

// let ran = parseInt(Math.random()*4+1); // 0~4까지 랜덤한 숫자 생성.
// background.style.backgroundImage = `url(images/home${ran}.jpg)`


// function change_background() { // 배경화면을 랜덤으로 바꿔주는 함수
//
//     let ran = parseInt(Math.random() * 4 + 1); // 0~4까지 랜덤한 숫자 생성.
//     background.style.backgroundImage = `url(images/home${ran}.jpg)`
//
//     setTimeout(change_background, 3000)  //재귀함수를 이용해 무한반복 시킨다. delay타임이 있기 때문에 크게 문제가 되지 않을 듯.
// }

// change_background();

//페이지를 새로고침할 때마다 새로운 배경화면을 보여주는 기능.
// let ran = parseInt(Math.random() * 4 + 1); // 0~4까지 랜덤한 숫자 생성.
// background.style = "background-image:url(images/home1.jpg)"
// // 백그라운드 이미지를 썼을떄의 코드
// // background.src = `images/home${ran}.jpg`
//


function bestSeller() {
    location.href = "bestSeller.html";
}


//베스트 셀러 책의 목록들의 이미지와 정보들을 갱신하기 위한 프로그램
// display:none을 사용하지 않고 innerText와 innerHTML을 이용해 블럭내부 요소만 바꿈.
for (let i = 0; i < book_list.length; i++) {

    book_list[i].addEventListener('click', function () {

        // const change_img = book_list[i];

        bigimg.src = `./images/book${i + 1}.png`;
        booktitle.innerText = bookname_list[i];
        content.innerHTML = content_list[i].innerHTML;

    })
}

window.addEventListener('scroll', scrolling)
$(function () {
       $(window).on('scroll',function(){


            if (scrollY > 80) {
                $('.eventbtm').stop().animate({opacity: '1'}, 500);

                console.log("ss")
                console.log("ss")
                eventbtm.style = "border:1px solid black;"
            }

       })


})

function scrolling() {

    console.log(scrollY)
    if (scrollY > 350) {
        for (let i = 0; i < header_a.length; i++) {

            header_a[i].style = "color:#772511"
        }
    } else {
        for (let i = 0; i < header_a.length; i++) {

            header_a[i].style = "color:black"
        }
    }
}

    // console.log(background.style)
    // background.style = `opacity:${opacity}`;





// let time = 0;
// title()
// console.log(article_title.style.getProperty("color"))
// function title(){
//
//
//     // console.log("SS")
//     // let opacity = article_title.style.opacity;
//     // console.log(opacity)
//     // opacity +=0.1;
//     // article_title.style.opacity = opacity;
//     // if ( opacity == 1){
//     //     console.log("ㅎㅇ")
//     //     return;
//     // }
//     // article_title.style.opacity = 0.5;
//     // setTimeout(title,100)
//
//
// }