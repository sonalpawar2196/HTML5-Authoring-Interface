// NavigationService.js
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const navigateTo = (path) => {
  history.push(path);
};

export default navigateTo;
