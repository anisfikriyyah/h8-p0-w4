function sorting(arrNumber) {
    // code di sini
  //  arrNumber.sort(function(a, b){return a<b})

  for( var i=0; i<arrNumber.length; i++){
    for(var j=0; j<i; j++){
      if ( arrNumber[i] > arrNumber[j]){
        var x = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = x
      }
    }
  }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var tamp = 1
    for ( var i=1; i<arrNumber.length; i++){
      // console.log(arrNumber[i])
      if (arrNumber[i] === arrNumber[0]){
        tamp++
      } 
    }
       if (arrNumber.length === 0) {
          return ''
    }
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + tamp + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));