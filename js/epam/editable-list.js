window.addEventListener('load', function() {
    console.log('ello, am loaded! ^o*/');

    var node_list = document.querySelector('ul'),
        txtNode_textInput = document.getElementById('text'),
        node_colorInput = document.getElementById('color'),
        node_markerSelect = document.getElementById('marker'),
        node_buttonCreate = document.getElementById('add_item'),
        node_buttonDelete = document.getElementById('del_item'),
        node_buttonEdit = document.getElementById('edit_item'),
        node_body = document.body,
        
        selectedItemIndex = null,
        node_selectedItem,
        listItems = [
            {text: "First", color: "green", marker: "square"},
            {text: "Second", color: "red", marker: "disc"},
            {text: "Third", color: "black", marker: "circle"}
        ];
        
    renderItems(listItems);
        
   // Highlighting selected element
    node_list.addEventListener('click', function(event) {
        for(var i=0, length=node_list.childNodes.length; i<length; i++) {
            removeClass(node_list.childNodes[i], 'chosen');
        }

        addClass(event.target, 'chosen');
        node_selectedItem = event.target;
        selectedItemIndex = parseInt((event.target.getAttribute('data-index')), 10);
        
        fillInForm(listItems[selectedItemIndex]);
    });
    
    node_body.addEventListener('click', function(event) {
        if(node_selectedItem && node_selectedItem !== event.target) {
            removeClass(node_selectedItem, 'chosen');
            selectedItemIndex = null;
            node_selectedItem = null;
        }
    });
    

    // Creating new list element...
    node_buttonCreate.addEventListener('click', function() {
        var textVal = txtNode_textInput.value,
            colorVal = node_colorInput.value,
            markerVal = node_markerSelect.value;
            
        if(!textVal || !colorVal || !markerVal) {
            alert('You should fill in all the fields to add new item');
        }
        else {
            var node_newListItem = document.createElement('li'),
                newListItemData = {text: textVal, color: colorVal, marker: markerVal};
                
            listItems.push(newListItemData);
            
            // Adding text node, styles appending to the DOM
            var txtNode_newListItem = document.createTextNode(newListItemData.text);
            node_newListItem.appendChild(txtNode_newListItem);
            node_newListItem.style.color = newListItemData.color;
            node_newListItem.style.listStyleType = newListItemData.marker;
            node_list.appendChild(node_newListItem);
            node_newListItem.setAttribute('data-index', listItems.length - 1);
            console.log('elem added');
        }
    }, false);
    
    // Editing element
    node_buttonEdit.addEventListener('click', function(event) {
        if(!selectedItemIndex) {
            alert('You should first click on the list item, to edit it');
        }
        else {
            var textVal = txtNode_textInput.value,
                colorVal = node_colorInput.value,
                markerVal = node_markerSelect.value;
            
            if(!textVal || !colorVal || !markerVal) {
                alert('You should fill in all the fields to add new item');
            }
            
            else {
                listItems[selectedItemIndex] = {
                    text: textVal, 
                    color: colorVal, 
                    marker: markerVal
                };
                
    
                node_selectedItem.innerHTML = listItems[selectedItemIndex].text;
                node_selectedItem.style.color = listItems[selectedItemIndex].color;
                node_selectedItem.style.listStyleType = listItems[selectedItemIndex].marker;
                
                removeClass(node_selectedItem, 'chosen');
                node_selectedItem = null;
                selectedItemIndex = null;
                console.log('edited');
            }
        }
    });

    // Deleting element
    node_buttonDelete.addEventListener('click', function() {
        if(!selectedItemIndex) {
            alert('You should first click on the list item, to delete it');
        }
        else {
            node_selectedItem.parentNode.removeChild(node_selectedItem);
            listItems.splice(selectedItemIndex, 1);
            removeClass(node_selectedItem, 'chosen');
            node_selectedItem = null;
            selectedItemIndex = null;
            console.log('deleted');
        }
    });
    
    // Utility
    function hasClass(el, cls) {
        return el.className.match(new RegExp('(\\s|^)' +cls+ '(\\s|$)'));
    }
    function addClass(el, cls) {
        if (!hasClass(el, cls)) {
            el.className += ""+cls;
        }
    }
    function removeClass(el, cls) {
        if (hasClass(el, cls)) {
            var reg = new RegExp('(\\s|^)' +cls+ '(\\s|$)');
            el.className=el.className.replace(reg, '');
        }
    }
    
    function renderItems(listItems) {
        for (var i=0, length=listItems.length; i<length; i++) {
            var node_listItem = document.createElement('li');
            var txtNode_listItem = document.createTextNode(listItems[i].text);
            node_listItem.appendChild(txtNode_listItem);
            node_listItem.style.color = listItems[i].color;
            node_listItem.style.listStyleType = listItems[i].marker;
            node_list.appendChild(node_listItem);
            node_listItem.setAttribute('data-index', [i]);
            console.log('initial elem added');
        }
    }
    
    function fillInForm (obj) {
        txtNode_textInput.value = obj.text;
        node_colorInput.value = obj.color;
        // console.log(node_markerSelect.options[1].value = obj.marker);
        for(var i=0, length=node_markerSelect.length; i<length; i++) {
            node_markerSelect.options[i].removeAttribute('selected');
            if (node_markerSelect.options[i].value == obj.marker) {
                node_markerSelect.options[i].setAttribute('selected', 'selected');
            }
        }
    }
    
});



