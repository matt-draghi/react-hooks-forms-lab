import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(
  {
    itemName, 
    itemCategory, 
    handleNewItemNameChange, 
    handleNewItemCatChange, 
    onItemFormSubmit,
    newItem,
    setNewItem
  }) 
  {

    const formItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formItem)
      onItemFormSubmit(formItem)
    }
  
  return (
    <form onSubmit={handleSubmit} className="NewItem" >
      <label>
        Name:
        <input type="text" onChange={handleNewItemNameChange} name="name" value={itemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleNewItemCatChange} name="category" value={itemCategory}>
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
