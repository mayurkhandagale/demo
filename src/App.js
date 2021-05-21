
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AddDish from './components/addDish';
import Admin from './components/admin';
import EditDish from './components/editDish';

function App() {
  return (
    <div className="App">
      <main className="container">

        <Router>
          <Route path="/admin" component={Admin} />
          <Route exact path="/dishes/add" component={AddDish} />
          <Route exact path="/dishes/edit/:id" component={EditDish} />
        </Router>


      </main>
    </div>
  );
}

export default App;
