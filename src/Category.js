import React, {PureComponent} from 'react'
import request from 'superagent'
import {Link}  from "react-router-dom"
import './Category.css'

export default class Category extends PureComponent {

  renderCategory = (category) => {
    const formattedCategory = encodeURIComponent(category.split(" ").join("_").toLowerCase())
    return <Link key={formattedCategory} to={`/${formattedCategory}`}><li key={category}>{category}</li></Link>
  }




    render() {
      const { categories } = this.props
    return (
      <div className="Drink-Categories-List">
        <h1>Drink Categories</h1>
        { categories === null && "Loading..." }
        { categories !== null &&
          <ul className="cocktail-categories">
            {this.props.categories.map(this.renderCategory)}
          </ul>
        }
        </div>
      )
    }
  }
