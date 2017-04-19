//@flow

import renderer from './utils/renderer.jsx';

const mountElement = document.getElementById('root');
if (mountElement) {
  renderer({ element: mountElement });
}
