import BaseCss from '../../css/index.css';
import registerOffCanvasMenu from './offcanvas';
import registerSliders from './sliders';
import registerAboutNav from './about-menu';
import registerForms from './forms';

document.addEventListener( 'DOMContentLoaded', () => {
  registerOffCanvasMenu();
  registerSliders();
  registerAboutNav();
  registerForms();
} );
