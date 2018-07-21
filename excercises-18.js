function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka > 9){
        var tamp = 1
        var stringangka = String(angka)

        for (var i=0; i<stringangka.length; i++){
            tamp *= Number(stringangka[i]) 
        }

        return kaliTerusRekursif(tamp)
    }

    return angka
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6