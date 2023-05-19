const buy = document.querySelector("#buy");
const bag = document.querySelector("#bag");
const tab_a = document.querySelectorAll(".tab a")



const btm1 = document.querySelector("#btm1");
const btm2 = document.querySelector("#btm2");
const btm3 = document.querySelector("#btm3");
const btm4 = document.querySelector("#btm4");
const btm_list = document.querySelectorAll(".bottombox");


tab_a[0].style = "background-color:#A89C89; color:white"
btm_list[0].classList.remove("disappear")
changeScreen(tab_a[0])
// 초기화면이 실행됐을 때는 상세설명에 클릭돼있는 상태이며 화면역시 상세설명을 나타내야한다.



buy.addEventListener("click", () => {

    alert("구매했습니다.")
})


bag.addEventListener("click", function () {
    alert("장바구니에 추가했습니다.")

})




for (let i = 0; i < tab_a.length; i++) {

    tab_a[i].addEventListener('click', function () {
        const tmp = tab_a[i]; // 여기서 tmp 는 현재 클릭한 버튼이다.

        if (i == 0) { //상세설명 클릭시




            tmp.style = "background-color:#A89C89; color:white"
            console.log(btm_list[i])
            btm_list[i].classList.remove("disappear")
            changeScreen(tmp)


        }
        else if (i == 1) {//상품설명클릭시

            tmp.style = "background-color:#A89C89; color:white"
            btm_list[i].classList.remove("disappear")

            changeScreen(tmp)



        }
        else if( i==2){

            tmp.style = "background-color:#A89C89; color:white"
            btm_list[i].classList.remove("disappear")

            changeScreen(tmp)



        }
        else if(i==3){

            tmp.style = "background-color:#A89C89; color:white"
            btm_list[i].classList.remove("disappear")

            changeScreen(tmp)


        }
    })
}

function changeScreen(tmp){


    for(let i = 0 ; i<tab_a.length ; i++){
        if(tab_a[i] != tmp){
            btm_list[i].classList.add('disappear');
            tab_a[i].style = "background-color:none; color:black"
        }
    }
}

