export default function () {
  var headerMenuIcon = document.getElementById( 'nav-toggle' );
  var header = document.querySelector( 'header' );
  var offCanvas = document.querySelector( '.header-nav-element' );
  var headerOpen = false;

  if ( headerMenuIcon ) {
      headerMenuIcon.addEventListener( 'click', function() {
        this.classList.toggle( 'active' );
        header.style.transform = headerOpen ? 'translateX(0px)' : 'translateX(-325px)';
        headerOpen = !headerOpen;
      });
  }
}
