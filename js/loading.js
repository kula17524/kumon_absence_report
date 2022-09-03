$(function(){
});

//読み込みが完了したら実行する
$(window).on('load',function(){
    //ローディングアニメーションをフェードアウト
    $('.animation').delay(600).fadeOut(600);
    //背景色をフェードアウト
    $('.loading').delay(900).fadeOut(800);
});