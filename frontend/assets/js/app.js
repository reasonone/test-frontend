import '../css/app.css'
import '../styles/more-bacon.scss';
import '../styles/form.scss';

import mountMoreBaconHandler from './more-bacon-handler.js'
import mountFormHandlers from './form-handlers';
import mountOrderSummary from './order-summary';

(function (location, data) {
  const isBaconRoute = location.pathname.includes('bacon');
  const isCheckoutRoute = location.pathname.includes('checkout');

  if (isBaconRoute) {
    mountMoreBaconHandler();
  } else if (isCheckoutRoute) {
    mountFormHandlers();
    mountOrderSummary(data);
  }
})(window.location, window.purchaseData);
