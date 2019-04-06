import React from 'react';
const ProductCard = props => {
  const productimgpath = '../../assets/';
  return (
        <div className="tile is-parent">
        <article class="tile is-child notification is-info">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.desc}</p>
        <figure className="image is-4by3">
            <img src={`${productimgpath}${props.productimg}`}/>
        </figure>
        <p className="subtitle">{props.price}</p>
        <a class="button is-warning">Add to Cart</a>
        </article>
        </div>

  );
};
export default ProductCard;