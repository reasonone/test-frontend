import '../css/app.css'
import '../styles/more-bacon.scss';
import '../styles/form.scss';

import '../libs/custom-select';

import mountMoreBaconHandler from './more-bacon-handler.js'
import mountFormHandlers from './form-handlers';

(function (location) {
  const isBaconRoute = location.pathname.includes('bacon');
  const isCheckoutRoute = location.pathname.includes('checkout');

  if (isBaconRoute) {
    mountMoreBaconHandler();
  } else if (isCheckoutRoute) {
    mountFormHandlers();
  }
})(window.location);
