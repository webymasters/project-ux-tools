//Infinite Scrolling Function to suggest more content 
function scrollinfinite() {
  while(true) {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
	  
    var block = document.getElementById('content');// Getting id of the main block to add suggestion content
    block.insertAdjacentHTML("beforeend", `<section id="element" id="suggestion">
    <h2>Document Elements</h2>
    <p>Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element. For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements. Most functionality is specified further down the class hierarchy.</p>
    <div><img src="https://via.placeholder.com/1600x900" alt="An example placeholder image"></div>
    <p>Languages outside the realm of the Web platform, like XUL through the XULElement interface, also implement Element.</p>
    <footer><p>Information copied from <cite><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">MDN's entry on the Element type</a></cite></p></footer>
  </section>`);
  }
}
window.addEventListener('scroll', scrollinfinite); //Adding event listener 

scrollinfinite(); //calling the scrollinfinite function


// Get all the headers from each section
var headers = document.querySelectorAll("h2");

// Get the element from each secation 
var element = document.getElementById("scrollsection");

// Check if Scroll position > sticky, if yes add fixed heading otherwise remove fixed heading
function myFunction() {
	headers.forEach(header => {
        const sticky = header.offsetTop;
           if (window.pageYOffset > sticky){
            header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	})
}
window.addEventListener('scroll', myFunction)

