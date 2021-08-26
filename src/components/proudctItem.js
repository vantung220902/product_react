import React, { Component } from 'react';
class ProudctItem extends Component {
    showRating(rating) {
        let result = [];
        for (let i = 0; i < rating; i++) {
            result.push(<li key={i}>
                <i className="fa fa-star" />
            </li>)
        }
        for (let i = 0; i < 5 - rating; i++) {
            result.push(<li key={rating + i}>
                <i className="fa fa-star-o" />
            </li>)
        }

        return <ul className="rating">
            {result}
        </ul>
    }
    addToCart = (item,quantity=1) => {
     this.props.addToCart(item, quantity);
     this.props.changMessAdd();
    } 
    render() {
        let { items } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={items.img} className="img-fluid" alt="" />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{items.name}</a>
                            </strong>
                        </h4>
                        {/* rating */}
                        {this.showRating(items.rating)}
                        <p className="card-text">
                            {items.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{items.price}$</span>
                            <span className="right" onClick={() => { this.addToCart(items, items.quantity) }}>
                                <a href="/#" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProudctItem;
