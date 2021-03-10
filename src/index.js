

module.exports = function toReadable (number) {
  let arrA = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  arrB = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  arrD = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 

  let first = Number(String(number).split('')[0]),
      middle = Number(String(number).split('').slice(-2)[0]),
      last = Number(String(number).split('').pop()),
      decimal = Number(String(number).split('').slice(-2).join('')),
      hundred = (String(number).length == 3),
      a = arrA.filter((e, i) => {if (i == first) {return e}}).join('') + ' hundred',
      b = arrB.filter((e, i) => {if (i == middle) {return e}}).join(''),
      c = arrA.filter((e, i) => {if (i == last) {return e}}).join(''),
      d = arrD.filter((e, i) => {if ((10 + i) == decimal) {return e}}).join('');

  return (hundred ? a : '') + ((decimal == 0) ? (hundred ? '' : 'zero') : (decimal <= 9) ? (hundred ? ' ' : '') + c : (decimal % 10 == 0) ? (hundred ? ' ' : '') + b : (decimal <= 19) ? (hundred ? ' ' : '') + d : (hundred ? ' ' : '') + b + ' ' + c);
}





