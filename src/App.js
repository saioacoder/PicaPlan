import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import firebase from 'firebase/app'

import firebaseConfig from './config'

import Diary from './pages/diary/diary.jsx'
import Ingredients from "./pages/ingredients/ingredients.jsx"
import IngredientTypes from "./pages/ingredientTypes/ingredientTypes.jsx"
import Plates from "./pages/plates/plates.jsx"
import PlateTypes from "./pages/plateTypes/plateTypes.jsx"

firebase.initializeApp(firebaseConfig)

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
  )
}

export default App
