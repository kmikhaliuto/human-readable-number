module.exports = function toReadable(number) {
    const numbersOnes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersTwoes = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return numbersOnes[number];
    } else if (number < 100) {
       let result = numbersTwoes[Math.floor(number / 10)] + ((number % 10 === 0) ? '' : ' ' +  numbersOnes[number % 10]);
        return result;
    } else if (number >= 100 && number <=999) {
        result = numbersOnes[Math.floor(number / 100)] + ' hundred' + ((number % 100 === 0) ? '' : ' ' + toReadable([number % 100]))
        return  result;
    }
}
