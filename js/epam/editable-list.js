window.addEventListener(function() {
    // Adding initial data...
    var listItems = [
            {text: "First", color: "green", marker: "square"},
            {text: "Second", color: "red", marker: "disc"},
            {text: "Third", color: "black", marker: "circle"}
        ];
        
    // Highlighting selected element
    var list = document.getElementByTag('ul');
    list.addEventListener(function() {
        // which child is clicked?
        // remove all selection - for cycle
        // highlight selected child
        // addclass - selected\chosen
    });
        
    // Creating new list element...
    var buttonCreate = document.getElementById('add_item');
    buttonCreate.addEventListener(function() {
        var textVal = document.getElementById('text').value,
            colorVal = document.getElementById('color').value,
            markerVal = document.getElementById('marker').value;
            
        var newListItem = document.createElement('li'),
            newListItemData = {text: textVal, color: colorVal, marker: markerVal};
        listItems.push(newListItemData);
        
        // Adding text node, styles appending to the DOM
        var newListItemNode = document.createTextNode('newListItemData.text');
        newListItem.appendChild(newListItemNode);
        newListItem.style.color = newListItemData.color;
        newListItem.style.listStyleType = newListItemData.marker;
        document.body.appendChild(newListItemNode);
    });
    
    // Editing element
    // if no element with selected\chosen class, show sorrowful message
    
    // Deleting element
    // if no element with selected\chosen class, show sorrowful message
    
});



