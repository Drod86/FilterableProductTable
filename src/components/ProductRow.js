export default function ProductRow({ product }) {
  const {name, price, stocked} = product;
  const productName = stocked ? name : <span style={{color: 'red'}}>{name}</span>
  return (
    <tr>
      <td>{productName}</td>
      <td>{price}</td>
    </tr>
  )
}