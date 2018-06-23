import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import listingsData from './data/listingsData.js'
import Listings from './Listings.js'
import Footer from './Footer.js'
import * as firebase from 'firebase';





class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData,
      city: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 9000,
      min_floor_space: 0,
      max_floor_space: 6500,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: '',
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  


  componentWillMount() {
  
    const config = {
        apiKey: "AIzaSyCdAnY8Q6wX0JpwM96Cu6ysl3YAKn1a1Vg",
        authDomain: "angelsrealty-32fd5.firebaseapp.com",
        databaseURL: "https://angelsrealty-32fd5.firebaseio.com",
        projectId: "angelsrealty-32fd5",
        storageBucket: "angelsrealty-32fd5.appspot.com",
        messagingSenderId: "318413149889"
      };
    const fb = firebase
        .initializeApp(config)
        .database()
        .ref('/server/saved-data/data/JSON');

        fb.on('value', snapshot => {  
            const store = snapshot.val();
        console.log(store)
        this.setState({
            filteredData:store
        })
          });
    
    var listingsData = this.state.listingsData.sort((a, b) => {
        return a.price - b.price
    })
    this.setState({
        listingsData
    })
  }


  
  change(event) {
    var name = event.target.name;
    var value = (event.target.type === 'checkbox') ? event.target.checked  : event.target.value;

    this.setState({
        [name]: value
    }, () => {
        console.log(this.state)
        this.filteredData()
    })
  }
  changeView(viewName) {
      this.setState({
          view: viewName
      })
  }
  filteredData() {
      var newData = this.state.listingsData.filter((item) => {
          return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
      })

      if (this.state.city != "All") {
          newData = newData.filter((item) => {
            return item.city == this.state.city
          })
      }

      if (this.state.sortby == 'price-dsc') {
          newData = newData.sort((a, b) => {
              return a.price - b.price
          })
      }

      if (this.state.sortby == 'price-asc') {
          newData = newData.sort((a, b) => {
              return b.price - a.price
          })
      }

      if (this.state.search != '') {
         newData = newData.filter((item) => {
             var city = item.city.toLowerCase()
             var searchText = this.state.search.toLowerCase()
             var n = city.match(searchText)

             if (n != null) {
                 return true
             }
         })
      }


      this.setState({
          filteredData: newData
      })
  }


  populateForms() {
      // city
      var cities = this.state.listingsData.map((item) => {
          return item.city
      })
      cities = new Set(cities)
      cities = [...cities].sort()

      // bedrooms
      var bedrooms = this.state.listingsData.map((item) => {
          return item.rooms
      })
      bedrooms = new Set(bedrooms)
      bedrooms = [...bedrooms].sort()

      this.setState({
          populateFormsData: {
              bedrooms,
              cities
          }
      }, () => {
         // console.log(this.state)
      })
  }


componentDidMount() {
 

}

  render () {
    return (
        <div>
            <Header />
            <section id='content-area'>
           
                <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
                <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
            </section>
            
            <Footer />
            
        </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
