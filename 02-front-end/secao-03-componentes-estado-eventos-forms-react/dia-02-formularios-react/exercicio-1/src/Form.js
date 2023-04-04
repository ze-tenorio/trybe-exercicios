import React, { Component } from 'react'

export class Form extends Component {
  state = {
    name: '',
    email: '',
    opinion: '',
    food: '',
    agreed: false
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <form>
        <label>Comida Preferida:
          <select name="food" value={this.state.food} onChange={this.handleChange}>
            <option value="Pizza">Pizza</option>
            <option value="Japa">Japa</option>
            <option value="Churrasco">Churrasco</option>
            <option value="Hamburguer">Hamburguer</option>
          </select>
        </label>

        <fieldset>
          <label>Nome:
            <input name='name' type='text' value={this.state.name} onChange={this.handleChange}></input>
          </label>
          
          <label>E-mail:
            <input name='email' type='email' value={this.state.email} onChange={this.handleChange}></input>
          </label>
        </fieldset>
        

        <label>Opinião:
          <textarea name='opinion' value={this.state.opinion} onChange={this.handleChange}></textarea>
        </label>

        <label htmlFor="">
          <input type="file" name="fileinput" id="fileinput" />
        </label>

        <label htmlFor="agreed">Concordo
          <input type="checkbox" name="agreed" checked={this.state.agreed} id="agreed" onChange={this.handleChange}/>
        </label>
      </form>
    )
  }
}

export default Form