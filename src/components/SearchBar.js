export default function SearchBar({ onChangeText, inStockOnly, onChangeInStockOnly}){
  return <form>
    <input type="text" onChange={(e) => onChangeText(e.target.value)} placeholder="Search..."/>
    <div style={{display: 'flex', gap: '5px'}}>
      <input id="filter" type="checkbox" onClick={()=> onChangeInStockOnly(!inStockOnly)}/>
    <label htmlFor="filter">Only show products in stock</label>
    </div>
  </form>
}