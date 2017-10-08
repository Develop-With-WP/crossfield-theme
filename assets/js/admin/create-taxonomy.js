export default function() {
  const select = document.getElementById( 'taxonomy-select' );

  if ( ! select ) {
    return false;
  }

  const selectInput = document.getElementById( 'taxonomy-select-input' );
  const selectList = document.getElementById( 'taxonomy-select-list' );
  const selectbtn = document.getElementById( 'taxonomy-select-submit' );

  selectbtn.addEventListener( 'click', (e) => {
    e.preventDefault();

    createTaxonomy( selectInput.value, selectList, selectInput );

  } );

  selectInput.addEventListener( 'keydown', (e) => {
    if ( 13 === e.keyCode ) {
      e.preventDefault();

      createTaxonomy( selectInput.value, selectList, selectInput );
    }
  } );

}

const createTaxonomy = ( taxonomyName, selectList, selectInput ) => {
  const slug = createSlug( taxonomyName );
  const endpoint = `${CrossfieldParams.baseURL}/wp-json/wp/v2/sliders`;;

  fetch( endpoint, {
      method: 'POST',
      headers: {
        'X-WP-NONCE': CrossfieldParams.nonce,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        name: taxonomyName,
        slug: slug
      } ),
      credentials: 'same-origin'

    }).then( ( response ) => {
      if( response.ok ) {
        return response.json().then( ( json ) => {
          addSlider(json.id, json.name, selectList );
          selectInput.value = '';
        } );
      } else {
        return response.json().then( ( json ) => {
          console.log( json.message );
        } );
      }
    }).catch( ( e ) => {
      console.log( e );
    });
}

const addSlider = ( slug, name, selectList ) => {
  const option = document.createElement( 'option' );
  //Needs to be term id
  option.value = slug;
  option.selected = true
  option.innerHTML = name;
  selectList.appendChild( option );
}

const createSlug = ( sliderName ) => {
  sliderName = sliderName.replace(/^\s+|\s+$/g, '');
  sliderName = sliderName.toLowerCase();

  sliderName = sliderName.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

  return sliderName;
}
