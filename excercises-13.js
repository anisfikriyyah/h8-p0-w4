function countProfit(shoppers) {
  var daftarBarang = [ 
                        ['Sepatu Stacattu', 1500000, 10],
                        ['Baju Zoro', 500000, 2],
                        ['Sweater Uniklooh', 175000, 1]
                     ]
                  
  if (shoppers.length === 0){
    return shoppers
  }

  var namaShopper = []
  var namaShopper1 = []
  var namaShopper2 = []
  var totalBayar = 0
  var totalBayar1 = 0
  var totalBayar2 = 0
  
  
  for (var i=0; i<shoppers.length; i++) {
    if (shoppers[i].product === daftarBarang[0][0]){
      if (daftarBarang[0][2] >= shoppers[i].amount){
        namaShopper.push(shoppers[i].name)
        daftarBarang[0].splice(2, 1, (daftarBarang[0][2]- shoppers[i].amount))
        totalBayar += daftarBarang[0][1] * shoppers[i].amount
      }
    } else if (shoppers[i].product === daftarBarang[1][0]){
      if (daftarBarang[1][2] >= shoppers[i].amount){
        namaShopper1.push(shoppers[i].name)
        daftarBarang[1].splice(2, 1, (daftarBarang[1][2]- shoppers[i].amount))
        totalBayar1 += daftarBarang[1][1] * shoppers[i].amount
      }
    } else if (shoppers[i].product === daftarBarang[2][0]){
      if (daftarBarang[2][2] >= shoppers[i].amount){
        namaShopper2.push(shoppers[i].name)
        daftarBarang[2].splice(2, 1, (daftarBarang[2][2]- shoppers[i].amount))
        totalBayar2 += daftarBarang[2][1] * shoppers[i].amount
      }
    } 
  }
                   
  var list = [
     { product: daftarBarang[0][0], 
       shoppers: namaShopper, 
       leftOver: daftarBarang[0][2], 
       totalProfit: totalBayar}, 
     { product: daftarBarang[1][0], 
       shoppers: namaShopper1, 
       leftOver: daftarBarang[1][2], 
       totalProfit: totalBayar1}, 
     { product: daftarBarang[2][0], 
       shoppers: namaShopper2, 
       leftOver: daftarBarang[2][2], 
       totalProfit: totalBayar2}
      ]

  return list
}



// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]