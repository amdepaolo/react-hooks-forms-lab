import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setName] = useState('')
  const [itemCategory, setCategory] = useState('Produce')

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  return (    

    <form onSubmit={e =>{
        e.preventDefault();
        onItemFormSubmit(newItem)}} 
        className="NewItem">
      <label>
        Name:
        <input onChange={e => setName(e.target.value)} type="text" name="name" value={itemName} />
      </label>

      <label>
        Category:
        <select onChange={e => setCategory(e.target.value)} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
