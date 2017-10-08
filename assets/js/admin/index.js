import AdminCss from './admin.css';
import registerTaxonomySelect from './create-taxonomy';
import registerImageUploads from './image-upload';

document.addEventListener( 'DOMContentLoaded', () => {
  registerTaxonomySelect();
  registerImageUploads();
} );
