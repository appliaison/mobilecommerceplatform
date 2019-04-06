import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bulma/css/bulma.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Flooring from './components/Flooring/Flooring';
import Concrete from './components/Concrete/Concrete';
import Drywall from './components/Drywall/Drywall';
import Tiles from './components/Tiles/Tiles';
import Deck from './components/Deck/Deck';
import Kitchen from './components/Kitchen/Kitchen';
import Landscaping from './components/Landscaping/Landscaping';



/* ReactDOM.render(<App />, document.getElementById('root')); */
ReactDOM.render(
                (
                <Router> 
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/add" component = {AddProduct}/>
                        <Route path="/flooring" component = {Flooring}/>
                        <Route path="/concrete" component = {Concrete}/>
                        <Route path="/drywall" component = {Drywall}/>
                        <Route path="/tiles" component = {Tiles}/>
                        <Route path="/deck" component = {Deck}/>
                        <Route path="/kitchen" component = {Kitchen}/>
                        <Route path="/landscaping" component = {Landscaping}/>

                    </div>
                </Router>
                ), 
                document.getElementById('root'))

registerServiceWorker();
