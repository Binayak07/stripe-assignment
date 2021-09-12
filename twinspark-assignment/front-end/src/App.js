import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Products } from './components/products';
import { Cart } from './components/cart';
import { Provider } from "react-redux";
import store from "./redux/store";
import StripeContainer from './components/StripeContainer'
const App = () => {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/Cart" component={Cart} />
            <Route path="/products" component={Products} />
            <Route path="/checkout" component={StripeContainer} />
          </Switch>
        </Router>
    </Provider>
  );
};

export default App;