// $(function(){
//     $('tr').each(function (index,tr){
//         let $td = $(tr).children();
//         $td.filter()
        
//     })

// })

// // $(function (){
// //     const $box = $(".box");
// //     console.log($box.html()); //document.querySelector(".box").innerHTML
// //     $box.html("<p>LOL</>"); //box.innerHTML +="<p>"
// //     console.log($box.attr("class"));
// //     console.log($box.width());
// //     const $input =$(".text");
// //     $input.var(123);
// // })

const direction = ['to right','to left','to bottom','to top']

function getRandomDirection(){
    let random = Math.floor(Math.random()* direction.length)
    return (direction[random])
}

function getRandomHexColor(){
  return  Math.floor(Math.random()*16777215).toString(16)
}

$(function(){
    const $body = $("body");
    const $direction  = $("direction")
    const $from = $("from");
    const $to = $("to");

    $body.css({backgroundImage:`linear-gradient(${getRandomDirection()},#${getRandomHexColor()},${getRandomHexColor()})`})
})