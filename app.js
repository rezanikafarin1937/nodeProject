import Table from './models/Table.js';

const data = {
    name : 'میلاد نوری',
    mobile : '09126937759',
    address : 'تهران',
}

const table = new Table('users')

const result = await table.insertRecord(data)
console.log(result);

const all = await table.getAllRecords()
console.log(all)




// const result2 =  ProductsModel.updateProduct(1,data)
// const ddd = await result2;
// console.log(result2)


// const result = ProductsModel.deleteProduct(3);
// const dddd = await result;
// console.log(dddd)

// const result1 = ProductsModel.getAllProducts();
// const d = await result1;
// console.log('products = ',d)
