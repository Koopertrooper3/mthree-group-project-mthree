function addIngredientToList() {
    window.alert("Clicked");

    const ingredientList = document.getElementById("ingredient-list");
    let ingredientName = document.getElementById("ingredient-name").value;
    let ingredientQuantity = document.getElementById("quantity").value;


    if(ingredientName != null && Number.isInteger(parseInt(ingredientQuantity))){
        const newListItem = document.createElement("li");
        newListItem.className = "list-group-item mx-5 px-4 py-3 fw-bold d-flex flex-row"
        newListItem.innerHTML = `<p>${ingredientName}</p><p class=\"ms_fill_ingredient_li\">Quantity: ${ingredientQuantity}</p>`

        ingredientList.append(newListItem);
    }

    return
}