let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")
console.log(imgItem.length-1)
let startSlider = 0
let endSlider = (imgItem.length-1)*100
slideBtnLeft.addEventListener("click",handleLeftBtn)

function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider+100;
    }
       
      

        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`;

        })
}




slideBtnRight.addEventListener("click",handleRightBtn)
function handleRightBtn(){
    if(startSlider >=-endSlider+100){
        startSlider = startSlider-100;
    }
       
      

        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`;

        })
}




//render automatic//
function renderSlideAuto(){
       if(startSlider >=-endSlider+100){
        handleRightBtn()
       }
       else{
        startSlider = 0;
       }
}
setInterval(renderSlideAuto,2000);


/********sidebar nevigation */
const sidebarNavigationEL = document.getElementById("sidebar-container-nevigation-id")
const sidebarOpenNavigationEL = document.getElementById("open-nav-slider")
const  sidebarCloseNavigationEL = document.getElementById("slidebar-navigation-close")
console.log(sidebarNavigationEL)
sidebarOpenNavigationEL.addEventListener("click",() =>{
    sidebarNavigationEL.classList.toggle("slidebar-show")
    
})
sidebarCloseNavigationEL.addEventListener("click",()=>{
    sidebarNavigationEL.classList.toggle("slidebar-show")

})
