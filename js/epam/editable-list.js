window.addEventListener('load', function() {
    console.log('ello, am loaded! ^o*/');

    var i,
        list = document.querySelector('ul'),
        textInput = document.getElementById('text'),
        colorInput = document.getElementById('color'),
        markerSelect = document.getElementById('marker'),
        buttonCreate = document.getElementById('add_item'),
        listItems = [
            {text: "First", color: "green", marker: "square"},
            {text: "Second", color: "red", marker: "disc"},
            {text: "Third", color: "black", marker: "circle"}
        ];
        
        for (i=0; i<listItems.length; i++) {
            var listItemNode = document.createElement('li');
            var listItemTxtNode = document.createTextNode(listItems[i].text);
            listItemNode.appendChild(listItemTxtNode);
            listItemNode.style.color = listItems[i].color;
            listItemNode.style.listStyleType = listItems[i].marker;
            list.appendChild(listItemNode);
            console.log('initial elem added');
        }
    
        
   // Highlighting selected element
    list.addEventListener('click', function(event) {
        // Object.keys(event).sort().forEach(function(item) {
        //     console.log(item+' = '+event[item]);
        // })
        
        for(i=0; i<list.childNodes.length; i++) {
            removeClass(list.childNodes[i], 'chosen');
        }

        addClass(event.target, 'chosen');
        return;
    });
        
    // Creating new list element...
    buttonCreate.addEventListener('click', function() {
        var textVal = textInput.value,
            colorVal = colorInput.value,
            markerVal = markerSelect.value;
            
        var newListItem = document.createElement('li'),
            newListItemData = {text: textVal, color: colorVal, marker: markerVal};
            
        listItems.push(newListItemData);
        
        // Adding text node, styles appending to the DOM
        var newListItemNode = document.createTextNode(newListItemData.text);
        newListItem.appendChild(newListItemNode);
        newListItem.style.color = newListItemData.color;
        newListItem.style.listStyleType = newListItemData.marker;
        list.appendChild(newListItem);
        console.log('elem added');
        return;
    }, false);
    
    // Editing element
    // console.log(chosenElement);
    // if no element with selected\chosen class, show sorrowful message
    
    
    // Deleting element
    // if no element with selected\chosen class, show sorrowful message
    // removeNode
    
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
    
});



