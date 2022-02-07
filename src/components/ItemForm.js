import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(
  {
    // itemName, 
    // itemCategory, 
    // handleNewItemNameChange, 
    // handleNewItemCatChange, 
    onItemFormSubmit,
  }) 
  {
    const [itemName, setItemName] = useState("")
    const [itemCategory, setItemCategory] = useState("Produce")
    const formItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

      function handleItemNameChange(event){
    setItemName(event.target.value)
  }

  function handleItemCatChange(event){
    setItemCategory(event.target.value)
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
        <input type="text" onChange={handleItemNameChange} name="name" value={itemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleItemCatChange} name="category" value={itemCategory}>
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
