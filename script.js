//№1
// let newArray = [5, 2, 4]
// newArray[99] = 3
// let squares = []
// console.log(newArray);

// for (let item of newArray) {
//   if (typeof item === 'number') {
//     squares.push(item ** 2);
//   }
// }

// console.log(squares);

// №2
// let list = [
//   { product: 'Apple', price: 25 },
//   { product: 'Cherry', price: 32 },
//   { product: 'Strawberry', price: 45 },
//   { product: 'Banana', price: 55 },
//   { product: 'Orange', price: 55 },
//   { product: 'Ananas', price: 30 },
//   { product: 'Persik', price: 45 },
//   { product: 'Mandarin', price: 11 },
// ]

// let result = list.sort(function(el2, el1) {
//   return el1.price - el2.price
// })
// console.log(result[0].product)

//№3
const products = [
  'Apple',
  'Banana',
  'Orange',
  'Tomato',
  'Carrot',
  'Lettuce',
  'Bread',
  'Cheese',
  'Milk',
  'Eggs',
]

const basket = []

const randomQuantity = Math.floor(Math.random() * (30 - 10 + 1)) + 10

for (let i = 0; i < randomQuantity; i++) {
  const randomProduct = products[Math.floor(Math.random() * products.length)]

  const existingProduct = basket.find((item) => item.product === randomProduct)

  if (existingProduct) {
    existingProduct.cnt += 1
  } else {
    const productObj = {
      product: randomProduct,
      price: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
      cnt: 1,
    }
    basket.push(productObj)
  }
}

const totalSum = basket.reduce((sum, item) => sum + item.price * item.cnt, 0)

console.log('Корзина:', basket)
console.log('Сумма товаров в корзине:', totalSum)
