import React from 'react';
import { Link } from 'react-router-dom';


export default class GlobalStoreItem extends React.Component {

  render(){
      return(
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
          <div className="globalstore-item">
            <div className="overlay-con">
              <img src={ this.props.item.img } className="img-responsive overlay-image" />
              <div className="overlay">
                <div className="overlay-text">
                  <i className="fa fa-link" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <h3 className="globalstore-item-title">
              <Link to={`/store/${this.props.item.itemId}`}>
                { this.props.item.name }
              </Link>
            </h3>
            <h4 className="globalstore-price">
              ${this.props.item.price} (tax incl.)
            </h4>
            <Link to={`/store/${this.props.item.itemId}`} className="globalstore-buynow">
              <strong>Buy Now</strong>
            </Link>
          </div>
        </div>
      );
  }

}
