export default function( contactForm = document.querySelectorAll( '#test' ) ) {

    if (!contactForm) {
        return false;
    }

    var formInput = document.querySelectorAll( '.form-input' );

    [].forEach.call( formInput, function( item ) {
        item.addEventListener( 'blur', function() {
            if (item && item.value) {
                item.classList.add('has-value');
            }
        });
    } );
}