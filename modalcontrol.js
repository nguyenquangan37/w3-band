//khai bao bien buyBtns lay gia tri tu tat ca phan tu co class la js-buy-ticket trong document
const buyBtns =document.querySelectorAll('.js-buy-ticket');
// bien modal lay gia tri tu phan tu co class modal
const modal=document.querySelector('.js-modal');
// 
const closeBtn=document.querySelector('.js-modal-close');
//ham showBuyTickets 
function showBuyTickets(){
    alert('you want to open modal?');
    // them class open vao modal de tao ra thay doi giao dien
    modal.classList.add('open');
}
function closeBuyTickets(){
    modal.classList.remove('open')
}
//vong lap xu li khi click vao cac button buy ticket
for(const buyBtn of buyBtns){
    //lang nge su kien click
    buyBtn.addEventListener('click',showBuyTickets);
}
//xu li su kien click vao close
closeBtn.addEventListener('click',closeBuyTickets);

