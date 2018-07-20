function changeVocals (str) {
  //code di sini

  var temp = ''
  for ( var i=0; i<str.length; i++){
    if( str[i] === 'a'){
        temp += 'b'
    } else if ( str[i] === 'i'){
        temp += 'j'
    } else if ( str[i] === 'u'){
        temp += 'v'
    } else if ( str[i] === 'e'){
        temp += 'f'
    } else if ( str[i] === 'o'){
        temp += 'p'
    } else {
        temp += str[i]
    }
  }
  return temp
}

function reverseWord (str) {
  //code di sini
  var temp = ''
  for (var i=str.length-1; i>=0; i--){
     temp +=str[i]
  }
  return temp
}

function setLowerUpperCase (str) {
  //code di sini
  var kamus = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  for ( var i=0; i<str.length; i++){
    if( kamus.indexOf(str[i])=== -1){
        temp += str[i].toLowerCase()
    } else {
        temp += str[i].toUpperCase()
    }
  }
  return temp
}

function removeSpaces (str) {
  //code di sini
  var temp = ''
  for ( var i=0; i<str.length; i++){
      if ( str[i] === ' '){
          temp += ''
      } else {
          temp += str[i]
      }
  }
  return temp
}

function passwordGenerator (name) {
  //code di sini
  var GantiVokal = changeVocals(name)
  var BalikKata = reverseWord(GantiVokal)
  var BesarkecilKata = setLowerUpperCase(BalikKata)
  var HilangSpasi = removeSpaces(BesarkecilKata)

  if ( name.length <5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  return HilangSpasi 
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'