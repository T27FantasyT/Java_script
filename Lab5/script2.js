$(document).ready(function () {
    const $weigh = $(".weigh");
    const $height = $(".height");
    const $BMI = $(".BMI");
    const $alert = $(".alert");
    const $calculate = $(".calculate");

    let bmi;
    $calculate.click(function () {bmi = BMI($weigh.val(), $height.val()); 
    })

    $calculate.click(function () {
        $BMI.text(bmi.toFixed(2));
        if (bmi < 18.5) {
            $alert.text("thin");
        } else if (bmi < 24.9) {
            $alert.text("nomal")
        } else $alert.text("fat");
    })
})

function BMI(weigh, height) {
    return weigh/(Math.pow(height, 2))
}
