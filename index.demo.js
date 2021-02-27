'use strict';

//スクロール量を取得する関数
function getScrolled() {
  return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
 }
 
 //トップに戻るボタンの要素を取得
 var topButton = document.getElementById( 'page-top' );
 
 //ボタンの表示・非表示
 window.onscroll = function() {
   ( getScrolled() > 500 ) ? topButton.classList.add( 'fade-in' ): topButton.classList.remove( 'fade-in' );
 };
 
 //トップに移動する関数
 function scrollToTop() {
   var scrolled = getScrolled();
   window.scrollTo( 0, Math.floor( scrolled / 2 ) );
   if ( scrolled > 0 ) {
     window.setTimeout( scrollToTop, 30 );
   }
 };
 
 //イベント登録
 topButton.onclick = function() {
   scrollToTop();
 };




 const btn = document.getElementsByClassName("btns");
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    const slide = document.querySelector(".slide ul").children;
    const Indicator = document.querySelector(".indicator").children;

    const lastSlideIndex = slide.length - 1;
    const firstSlideIndex = 0;
    const lastIndicatorIndex = Indicator.length - 1;
    const firstIndicatorIndex = 0;

    const firstItem = slide.item(firstSlideIndex);
    const lastItem = slide.item(lastSlideIndex);
    const firstIndicator = Indicator.item(firstIndicatorIndex);
    const lastIndicator = Indicator.item(lastIndicatorIndex);

    if (btn[i] === preBtn) {
      setTimeout(() => {
        firstItem.parentNode.insertBefore(lastItem, firstItem);
        firstIndicator.parentNode.insertBefore(
          firstIndicator,
          lastIndicator.nextSibling
        );
      }, 400);
    } else if (btn[i] === nextBtn) {
      setTimeout(() => {
        lastItem.parentNode.insertBefore(firstItem, lastItem.nextSibling);
        firstIndicator.parentNode.insertBefore(lastIndicator, firstIndicator);
      }, 400);
    }
  });
}








document.getElementById("navbtn").onclick = function(){
  document.querySelector('html').classList.toggle('open');
}


