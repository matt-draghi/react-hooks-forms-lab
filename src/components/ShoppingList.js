import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [newItemName, setNewItemName] = useState("")
  const [newItemCat, setNewItemCat] = useState("Produce")
  // const [newItem, setNewItem] = useState({})


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  function handleItemNameChange(event){
    setNewItemName(event.target.value)
  }

  function handleItemCatChange(event){
    setNewItemCat(event.target.value)
    console.log(newItemCat)
  }

  function onItemFormSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCat
    }
    console.log(event)
    const itemsArray = [...items, newItem]
    setItems(itemsArray)
  }

  const searchItems = items.filter((item) => {
    if (search === ""){
      return true
    }
    else{
      return item.name.toLowerCase().includes(search.toLowerCase())
    }
  })

  const itemsToDisplay = searchItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });



  return (
    <div className="ShoppingList">
      <ItemForm 
        newItemName = {newItemName}
        newItemCat = {newItemCat}
        handleNewItemNameChange={handleItemNameChange}
        handleNewItemCatChange={handleItemCatChange}
        onItemFormSubmit={onItemFormSubmit}
        // newItem = {newItem}
        // setNewItem ={setNewItem}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
