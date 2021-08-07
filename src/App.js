import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Diary from './pages/diary';
import Ingredients from "./pages/ingredients";
import IngredientTypes from "./pages/ingredientsType";
import Plates from "./pages/plates";
import PlateTypes from "./pages/platesType";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Diary />
				</Route>
        <Route exact path="/ingredients/">
          <Ingredients />
				</Route>
        <Route exact path="/ingredientTypes/">
          <IngredientTypes />
				</Route>
        <Route exact path="/plates/">
          <Plates />
				</Route>
        <Route exact path="/plateTypes/">
          <PlateTypes />
				</Route>
      </Switch>
    </Router>
  );
}

export default App;
