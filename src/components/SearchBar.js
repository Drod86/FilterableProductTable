export default function SearchBar({}){
  return <form>
    <input type="text" placeholder="Search..."/>
    <br/>
    <input id="filter" type="checkbox"/>
    <label for="filter">Only show products in stock</label>
  </form>
}