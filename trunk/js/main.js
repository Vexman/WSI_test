'use strict';
console.log('test');

var form = getId('item-purchace');
var modal = getId('modal');


// Changes image on mouseover
function imageSelect() {
	var images = [].slice.call(getId('left-content').getElementsByTagName('li'));
	var largeImage = getId('large-image');

	images.forEach(function (element, index){
	  element.addEventListener('mouseover', function(){
		return largeImage.src= 'assets/' + element.getAttribute('data-imageLarge');
	  });
	});
}

// Form handling

function getId(id) {return document.getElementById(id)};

function formToJSON(elements) {
	var data = { };
	data[elements.itemName.value] = elements.number.value;

	return data;
};

function handleFormSubmit(event) {
	event.preventDefault();
	var data = formToJSON(form.elements);
	var modalText = document.createElement("span");

	localStorage['addToCart'] = JSON.stringify(data, null, '  ');
	modalText.innerHTML = form.elements.number.value + ' ' + form.elements.itemName.value + ' has been added to your cart.';
	
	getId('modal-content').append(modalText);

	toggleModal();

	return data;
};


// modal toggle
function toggleModal(){
	if (modal.style.display = 'none') {
		modal.style.display = 'block';
	}
	else {
		modal.style.display = 'none';
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = 'none';
	    }
	}
}

// accordion

var acc = getId('accordion-section').getElementsByClassName("accordion");
var panel = getId('accordion-section').getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
// Calls scripts on load
window.onload = function() {
	imageSelect();

	form.addEventListener('submit', handleFormSubmit);
}