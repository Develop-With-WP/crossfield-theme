export default function() {
  const nav = document.getElementById( 'about-nav' );

  if ( ! nav ) {
    return false;
  }

  const topMenu = nav.querySelector('.top-menu');
  const list = nav.querySelector( 'ul' );
  const heroSection = document.querySelector( '.about-hero' );
  const zones = getZones();
  let scrollTarget = heroSection.offsetHeight;
  let stickyPosition = calculateNavPosition();
  let sticky = false;

  topMenu.addEventListener( 'click', () => {
    list.classList.toggle( 'open' );
  } );

  document.addEventListener( 'scroll', () => {
    if ( window.scrollY > scrollTarget && ! sticky ) {
      sticky = true;
      nav.style.position = 'fixed';
      nav.style.top = `${stickyPosition}px`;
      heroSection.style.marginBottom = `${nav.offsetHeight}px`;
    } else if ( window.scrollY < scrollTarget && sticky ) {
      sticky = false;
      nav.style.position = 'relative';
      nav.style.top = 'auto';
      heroSection.style.marginBottom = `0px`;
    }
  } );

  document.addEventListener( 'scroll', () => {
    const margin = zones[0].margin / 2
    const target = ( stickyPosition + window.scrollY + nav.offsetHeight ) + margin;

    zones.forEach( (zone) => {
      const el = document.querySelector(`a[href='#${zone.id}']`);
      if ( target > zone.top && target < zone.bottom ) {
          if ( ! el.classList.contains( 'active' ) ) {
            el.classList.add( 'active' );
          }
      } else if ( target - margin * 2 >= zone.bottom ) {
        if ( el.classList.contains( 'active' ) ) {
          el.classList.remove( 'active' );
        }
      } else if ( target < zone.top && target < zone.bottom ) {
        if ( el.classList.contains( 'active' ) ) {
          el.classList.remove( 'active' );
        }
      }
    } );
  } );
}

const calculateNavPosition = () => {
  const adminBar = document.getElementById( 'wpadminbar' );
  const header = document.querySelector( '.header-wrapper' );

  if ( ! adminBar ) {
    return header.offsetHeight;
  } else {
    return header.offsetHeight + adminBar.offsetHeight;
  }
}

const getZones = () => {
  const zones = document.querySelectorAll( '.about-history-section' );

  if( ! zones || 0 === zones.length ) {
    return false;
  }

  return [].map.call( zones, (zone) => {
    const coords = zone.getBoundingClientRect();
    const styles = window.getComputedStyle( zone );
    return {
      id: zone.getAttribute( 'id' ),
      top: coords.top,
      bottom: coords.bottom,
      margin: parseInt(styles.marginBottom.replace(/px/i, '') )
    }
  } );
}
