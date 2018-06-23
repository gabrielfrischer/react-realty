import React, { Component} from 'react'
import Collapsible from 'react-collapsible'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      open:true,
      closed:false,
    }
    this.cities = this.cities.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  componentWillMount() {
      this.props.populateAction()
  }
  cities() {
    if(this.props.globalState.populateFormsData.cities != undefined) {
        var {cities} = this.props.globalState.populateFormsData
        return cities.map((item) => {
          
          return(
            <option key={item} value={item}>{item}</option>
          )
        })
    }
  }
  bedrooms() {
    if(this.props.globalState.populateFormsData.bedrooms != undefined) {
        var {bedrooms} = this.props.globalState.populateFormsData
        return bedrooms.map((item) => {
          
          return(
            <option key={item} value={item}>{item}+ BR</option>
          )
        })
    }
  }
  
  render () {
    return (
       
            <Collapsible className="collap" trigger="Filter Results Here!">
             <section id="filter">
 
 <div className="inside">
     
     
     <span id="cityLabel"><label htmlFor="city">City</label></span>
     <select name="city" className="filters city" onChange={this.props.change} >
         <option value="All">All</option>
         {this.cities()}
     </select>
     <label htmlFor="bedrooms" id="bedRoomLabel"># of Bedrooms</label>
     <select name="bedrooms" className="filters bedrooms" onChange={this.props.change} >
        {this.bedrooms()}
     </select>
     <div className="filters price">
         <span className="title" >Min Price($/Month) Max</span>
         <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
         <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
         
     </div>
     
     <div className="filters floor-space">
         <span className="title">Min Floorspace(Sqft.) Max</span>
         <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
         <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
     </div>
    
 </div>
 </section>
      </Collapsible>
        
        
    )
  }
}
