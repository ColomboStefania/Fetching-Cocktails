import React, {PureComponent} from 'react'
import request from 'superagent'
import Category from './Category'

export default class CategoryContainer extends PureComponent {

  state = { categories: null }

  componentDidMount() {
      request
        .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => JSON.parse(response.text).drinks, console.error)
        .then(drinksArray => drinksArray.map(category => category['strCategory']))
        .then(finalList => this.updateCategories(finalList))

    }

    updateCategories(categories) {
      this.setState({
         categories
      })
    }


  render() {
      console.log(this.state)
    return <Category categories={this.state.categories} />
  }
}
