export default function() {
  const sliders = document.querySelectorAll( '.slider-section' );

  if ( ! sliders || 0 === sliders.length ) {
    return false;
  }

  [].forEach.call( sliders, ( sliderSection ) => {
    const slider = sliderSection. querySelector( '.crossfield-slider' );
    const rightArrow = sliderSection.querySelector( '.slider-control.left' );
    const leftArrow = sliderSection.querySelector( '.slider-control.right' );

    jQuery( slider ).slick({
      arrows: true,
      prevArrow: jQuery( leftArrow ),
      nextArrow: jQuery( rightArrow )
    });
  } );
}
