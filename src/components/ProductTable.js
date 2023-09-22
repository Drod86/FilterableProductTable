import ProductCategoryRow from './ProductCategoryRow';

import ProductRow from './ProductRow';

export default function ProductTable({products}) {
  let rows = [];
  let lastCategory = null;
  
  for (let i = 0; i < products.length; i++){
    let {category, name, price, stock} = products[i];
    if (category !== lastCategory){
      let catRow = <ProductCategoryRow category={category} key={category}/>;
      rows = [...rows, catRow ];
      lastCategory = category
    }
    let row = <ProductRow product={products[i]} key={name}/>;
    rows= [...rows, row];

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