function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId === '' || memberId === undefined){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja '
  } else if (money === undefined || money < 50000){
      return 'Mohon maaf, uang tidak cukup'
  } else {
    var buyer = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
      }
      var sepatuStacattu = 1500000
      var bajuZoro = 500000
      var bajuHN = 250000
      var sweaterUniklooh = 175000
      var casingHp = 50000
  
      var sisa = money
      if (money >= sepatuStacattu) {
        buyer.listPurchased.push('Sepatu Stacattu')
        sisa = money - sepatuStacattu
      }
      
      if ((sisa >= bajuZoro) ) {
        buyer.listPurchased.push('Baju Zoro')
        sisa = sisa - bajuZoro
      }
  
      if ((sisa >= bajuHN) ) {
        buyer.listPurchased.push('Baju H & N')
        sisa = sisa - bajuHN
      }
  
      if ((sisa >= sweaterUniklooh) ) {
        buyer.listPurchased.push('Sweater Uniklooh')
        sisa = sisa - sweaterUniklooh
      }

      if ((sisa >= casingHp) ) {
        buyer.listPurchased.push('Casing Handphone')
        sisa = sisa - casingHp
      }
  
      buyer.changeMoney = sisa
      return buyer
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja