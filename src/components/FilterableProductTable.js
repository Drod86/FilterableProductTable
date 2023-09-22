import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable({products}){
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // function handleChangeText(e){
  //   setFilterText(e.target.value);
  //   console.log(filterText);
  // }

  // function handleChangeInStockOnly(e){
  //   e.target.checked && setInStockOnly(!inStockOnly);
  // }
  return <>
    <SearchBar filterText={filterText} 
    onChangeText={setFilterText}
    inStockOnly={inStockOnly}
    onChangeInStockOnly={setInStockOnly}
    />
    <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
  </>
}