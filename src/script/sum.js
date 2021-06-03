export default function addNumbers() {
    var Result = 0;
    while (true) {
        var sumNumbers = prompt("Enter Number", Result);
        sumNumbers = parseInt(sumNumbers);
        if (checkInput(sumNumbers) == false || sumNumbers == 0)
            break;
        Result += sumNumbers;
        if (Result > 100 || Result == 100)
            break;

    }

    function checkInput(inputValue) {
        if (isNaN(inputValue)) {
            alert("Must input numbers");
            return false;
        }
    }

}