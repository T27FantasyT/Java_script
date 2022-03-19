$(function(){
    const $amount = $(".amount");
    const $guests = $(".guests");
    const $select = $(".select");
    const $calculate = $(".calculate");
    const $calculateResult = $(".calculate-result");

    $calculate.click(function(){
        $calculateResult.text("$"+ calculate($amount.val(),$guests.val(),Number($select.val())).toFixed(2))
    })

})

function calculate(bill,number,quality){
    return bill*quality/number
}