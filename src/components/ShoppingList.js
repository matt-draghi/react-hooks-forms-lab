import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [itemName, setItemName] = useState("")
  // const [itemCategory, setItemCategory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  // function handleItemNameChange(event){
  //   setItemName(event.target.value)
  // }

  // function handleItemCatChange(event){
  //   setItemCategory(event.target.value)
  // }

  function onItemFormSubmit(formItem){//needs to pass in the formItem somehow
    console.log(formItem)
    const itemsArray = [...items, formItem]
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
        // itemName = {itemName}
        // itemCategory = {itemCategory}
        // handleNewItemNameChange={handleItemNameChange}
        // handleNewItemCatChange={handleItemCatChange}
        onItemFormSubmit={onItemFormSubmit}
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
