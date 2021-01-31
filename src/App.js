import ProductList from './components/ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';

function App() {
  return (
      <Router>
      <div>
        <Switch>
          <Route path="/product-details/:id">
            <ProductDetails/>
          </Route>
          <Route path="/">
            <ProductList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
