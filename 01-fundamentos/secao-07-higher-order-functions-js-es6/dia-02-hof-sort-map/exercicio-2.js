const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsAndPrices = (products, prices) => products.map((product, index) => {
    const newObj = {};
    newObj[product] = prices[index];
    return newObj;
});

const newList = productsAndPrices(products, prices);
console.log(newList);