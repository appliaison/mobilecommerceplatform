import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class AddProduct extends Component {
  render() {
    return (
        <div id="AddProduct">
        <Header/>
        <div class="notification">
        <strong>Add Product</strong>
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
                <Link to="/"><a className="button is-white">Cancel</a></Link>
                </div>
            </p>
            </div>
        </div>
        <Footer/>
        </div>
    );
  }
}
export default AddProduct;