import React from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({newItemName, newItemCat, handleNewItemNameChange, handleNewItemCatChange, onItemFormSubmit}) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem" >
      <label>
        Name:
        <input type="text" onChange={handleNewItemNameChange} name="name" value={newItemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleNewItemCatChange} name="category" value={newItemCat}>
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
