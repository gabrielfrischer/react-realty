import React, { Component} from 'react';
import {Modal} from 'boron/DropModal';
import SlideShow from 'react-image-show';

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      activeModal: null,
    }
    this.loopListings = this.loopListings.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
 
  clickHandler(e, index) {
    this.setState({ activeModal: index })
}

  hideModal() {
    this.setState({ activeModal: null })
}
 
  loopListings() {
      const {listingsData} = this.props;
      
      if (listingsData == undefined || listingsData.length == 0) {
          return "Sorry your filter did not match any listing"
      }
      
      return listingsData.map((listing, index) => {
          if (this.props.globalState.view == 'long') {
            return (
                <div className="col-md-12 col-lg-6" key={index}>
                      <div className="listing">
                        <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                            <span className="address">{listing.availability}</span>
                            <div className="details">
                                {/* <div className="col-md-3">
                                    <a  className="user-img" style={{background: `url("${listing.image}") no-repeat center center`}}></a>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="user-details">
                                        <span className="user-name">Broker: Steven{"\n"}</span>
                                    </div>
                                    <div className="listing-details">
                                        <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>{listing.floorSpace} ft&sup2;</span></div>
                                        <div className="bedrooms">
                                            <i className="fa fa-bed" aria-hidden="true"></i>
                                            <span>{listing.rooms} bedroom(s)</span>
                                        </div>
                                        <a className="view-btn" id={index}  onClick={e => this.clickHandler(e, index)}>View Pics</a>
                                        <Modal
        id={index}
        show={this.state.activeModal === index}
        onHide={this.hideModal}
    >
    
    <SlideShow
        images={listing.suppImagePics}
        width="100%"
        imagesWidth="600px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="15vw"
        thumbnailsHeight="20vw"
        indicators thumbnails fixedImagesHeight arrows
      />
    </Modal>
    
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="bottom-info">
                            <span className="price" ><i className="fa fa-usd" aria-hidden="true"></i>{listing.price}/month</span>
                            <span className="location" ><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}</span>
                        </div>
                    </div>
                </div>
            ) 
          } else {
              // THIS IS LONG VIEW
              return (
                // THIS IS BOX VIEW
                <div className="col-md-3" key={index}>
                      <div className="listing">
                        <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                            <span className="address">{listing.availability}</span>
                            <div className="details">
                                {/* <div className="col-md-3">
                                    <a className="user-img" style={{background: `url("${listing.image}") no-repeat center center`}}></a>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="user-details">
                                        <span className="user-name">Broker: Steven {"\n"}</span>
                                    </div>
                                    <div className="listing-details">
                                        <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>{listing.floorSpace} ft&sup2;</span></div>
                                        <div className="bedrooms">
                                            <i className="fa fa-bed" aria-hidden="true"></i>
                                            <span>{listing.rooms} bedroom(s)</span>
                                        </div>
                                    </div>
                                    <a className="view-btn" id={index}  onClick={e => this.clickHandler(e, index)}>View Pics</a>
                                    <Modal
        id={index}
        show={this.state.activeModal === index}
        onHide={this.hideModal}
    >
     
    <SlideShow
        images={listing.suppImagePics}
        width="100%"
        imagesWidth="600px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="15vw"
        thumbnailsHeight="20vw"
        indicators thumbnails fixedImagesHeight
      />
    </Modal>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="bottom-info">
                            <span className="price" ><i className="fa fa-usd" aria-hidden="true"></i>{listing.price}/month</span>
                            <span className="location" ><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}</span>
                        </div>
                    </div>
                </div>
            )
          }
      });
  }
  render () {
    return (
        <section id="listings">
            <section className="search-area">
                <input type="text" name="search" onChange={this.props.change} placeholder="Search by city..."/>
            </section>
            <section className="sortby-area">
                <div className="results">
                    {this.props.globalState.filteredData.length} results found
                </div>
                <div className="sort-options">
                    <select name="sortby" className="sortby" onChange={this.props.change}>
                        <option value="price-dsc">Lowest Price</option>
                        <option value="price-asc">Highest Price</option>
                    </select>
                    <div className="view">
                        <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                        <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
                    </div>
                </div>
            </section>
            <section className="listings-results">
               <div className="row">
                {this.loopListings()}
               </div>
            </section>
        </section>
    )
  }
}
