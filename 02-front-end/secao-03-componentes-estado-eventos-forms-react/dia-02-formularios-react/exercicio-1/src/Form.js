import React, { Component } from 'react'
import PersonalInfo from './components/PersonalInfo';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    opinion: '',
    food: '',
    agreed: false,
    isValid: false
  }

  validateField = () => {
    const { email, name, agreed } = this.state;
    const emailError = email.includes('@');
    const nameError = name.length > 0;
    const nonAgreed = agreed === false;
    this.setState({
      isValid: emailError && nameError && !nonAgreed
    })
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    }, this.validateField)
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

        <PersonalInfo 
          nameValue={this.state.name} 
          emailValue={this.state.email} 
          handleChange={this.handleChange}
        />

        <label>Opinião:
          <textarea name='opinion' value={this.state.opinion} onChange={this.handleChange}></textarea>
        </label>

        <label htmlFor="">
          <input type="file" name="fileinput" id="fileinput" />
        </label>

        <label htmlFor="agreed">Concordo
          <input type="checkbox" name="agreed" checked={this.state.agreed} id="agreed" onChange={this.handleChange}/>
        </label>

        <p>{`Esse formulário é válido? ${this.state.isValid}`}</p>
        <button disabled={!this.state.isValid}>Enviar</button>
      </form>
    )
  }
}

export default Form