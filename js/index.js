function scrollinfinite() {
  while(true) {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
    document.body.insertAdjacentHTML("beforeend", `<section id="element" id="suggestion">
    <h2>Document Elements</h2>
    <p>Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element. For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements. Most functionality is specified further down the class hierarchy.</p>
    <div><img src="https://via.placeholder.com/1600x900" alt="An example placeholder image"></div>
    <p>Languages outside the realm of the Web platform, like XUL through the XULElement interface, also implement Element.</p>
    <footer><p>Information copied from <cite><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">MDN's entry on the Element type</a></cite></p></footer>
  </section>`);
  }
}
window.addEventListener('scroll', scrollinfinite);

scrollinfinite(); // init document