function saveFromLocalStorage() {
    localStorage.setItem('calendar_itens', JSON.stringify(items))
}
function deleteFromLocalStorage() {
    localStorage.removeItem('calendar_itens')
    items.splice(0, items.length);
    showItems()
}