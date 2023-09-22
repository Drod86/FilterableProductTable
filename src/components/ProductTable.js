import ProductCategoryRow from './ProductCategoryRow';

import ProductRow from './ProductRow';

export default function ProductTable({products, filterText, inStockOnly }) {
  let rows = [];
  let lastCategory = null;
  
  for (let i = 0; i < products.length; i++){
    let {category, name, stocked} = products[i];
    const lc = (text) => text.toLowerCase();
    
    if (filterText !== '' && !lc(category).startsWith(lc(filterText)) && !lc(name).startsWith(lc(filterText))){
      continue;
    }

    if (category !== lastCategory){
      if (inStockOnly && !stocked){
        continue;
      }
      let catRow = <ProductCategoryRow category={category} key={category}/>;
      rows = [...rows, catRow ];
      lastCategory = category
    }
    let row = <ProductRow product={products[i]} key={name}/>;

    inStockOnly 
    ? stocked 
        ? rows = [...rows, row]
        : rows = rows
    : rows = [...rows, row];

  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => row)}
      </tbody>
    </table>
  )
}