function totalDigitRekursif(angka) {
  // you can only write your code here!
  
  var Sisa = (String(angka).split(''))
  var Awal = 0

  if (Sisa.length > 1) {
    Awal += Number(Sisa[0])
    Sisa.shift()

    var newAngka = Sisa.join('')

    return Awal + totalDigitRekursif(Number(newAngka))
  } 

  return Awal += angka

  // if(angka > 19){
  //   var tamp = 0
  //   var strangka = String(angka)
    
  //     tamp += Number(strangka[i])
  //   

  //   return totalDigitRekursif(tamp)

  // }

  // return angka 
  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5