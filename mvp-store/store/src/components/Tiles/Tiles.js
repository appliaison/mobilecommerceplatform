import React, { Component } from 'react';
import data from '../data';
import bamboodata from '../bamboodata';

import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Tiles extends React.Component {

    componentWillMount() {
        this.setState({
            products: bamboodata,
        });
    }

    filterProducts = (e) => {
       e.preventDefault();
       console.log('clicked'); 
       const products = this.state.products;
        const newId = products[products.length - 1].id + 1;
       this.setState({
           products: products.concat( {id: newId, title: this.refs.title.value, desc: this.refs.description.value})
       })
       this.refs.title.value = null;
       this.refs.description.value = null;
    }

    newProduct = () =>
        <div class="notification container">
        <strong>Add</strong>
        {/*  Form */}
            <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input ref="title" className="input" type="text" placeholder="Title"/>
                <span className="icon is-small is-left">
                <i className=""></i>
                </span>
                <span className="icon is-small is-right">
                <i className=""></i>
                </span>
                </p>
                </div>

                <div className="field">
                <p className="control has-icons-left">
                <input ref="description" className="input" type="text" placeholder="Description"/>
                <span className="icon is-small is-left">
                <i className=""></i>
                </span>
                </p>
                </div>
                <div className="field">
                <p className="control">
                <div class="field is-grouped is-grouped-centered">
                <button className="button is-primary" onClick={this.filterProducts}>Add</button>
                </div>
            </p>
            </div>
        </div>;

    render() {
        return (
            <div id="Concrete">
            <Header/>
                <div class="notification container">
                <strong>MVP Store | Tiles </strong> <Link to="/add">Add</Link>
                    <div class="tabs is-centered">
                        <ul>
                            <li><Link to="/">Lumber</Link></li>
                            <li><Link to="/flooring">Flooring</Link></li>
                            <li><Link to="/concrete">Concrete</Link></li>
                            <li><Link to="/drywall">Drywall</Link></li>
                            <li class="is-active"><Link to="/tiles">Tiles</Link></li>
                            <li><Link to="/deck">Deck</Link></li>
                            <li><Link to="/kitchen">Kitchen</Link></li>
                            <li><Link to="/landscaping">Landscaping</Link></li>
                        </ul>
                    </div>

                    <div className="columns">

                        {/*  Lumber */}
                        <div className="tile is-vertical is-parent">
                        <section className="section is-child">
                        <h1 className="title">
                        <a className="button is-primary">Lumber</a>
                        </h1>
                        <p className="subtitle">
                        Your one-stop shop for your lumber needs 
                        </p>
                        <a  className="button is-primary" >Filter</a>
                        {this.state.products.map(info => 
                            <ProductCard key={info.id} {...info} />
                        )}
                        </section>
                        </div>

                        {/*  Bricks */}
                        <div className="tile is-vertical is-parent">
                        <section className="section is-child">
                        <h1 className="title">
                        <a className="button is-primary">Flooring</a>
                        </h1>
                        <p className="subtitle">
                        Your one stop shop for bricks
                        </p>
                        <a className="button is-primary">Filter</a>
                        {this.state.products.map(info => 
                            <ProductCard key={info.id} {...info} />
                        )}
                        </section>
                        </div>

                        {/*  Concrete */}
                        <div className="tile is-vertical is-parent">
                        <section className="section is-child">
                        <h1 className="title">
                        <a className="button is-primary">Concrete</a>
                        </h1>
                        <p className="subtitle">
                        Your one stop shop for concrete
                        </p>
                        <a className="button is-primary">Filter</a>
                        {this.state.products.map(info => 
                            <ProductCard  key={info.id} {...info} />
                        )}
                        </section>
                        </div>


                    </div>
                </div>

            {this.newProduct()}
            <Footer/>
        </div>
          );
    }
}

export default Tiles;