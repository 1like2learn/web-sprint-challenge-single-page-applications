import React, {useState} from "react";
import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import OrderForm from './Components/OrderForm'

const defaultFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    greenPeppers: false,
    onions: false,
    mushrooms: false,

  },
  special: '',
}
const App = () => {
  const [ formValues, setFormValues] = useState(defaultFormValues)


  const orderInput = event => {
    const {name, value} = event.target
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }
  const orderCheckboxInput = event => {
    const { name, checked } = event.target
    setFormValues({...formValues, 
      toppings:{
        ...formValues.toppings,
        [name]: checked,
      } 
    })
  }
  const onSubmit = event => {
    event.preventDefault()
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special,
      toppings: Object.keys(formValues.toppings).filter(topping => (formValues.toppings[topping] === true))
    }
    console.log(newOrder)
    setFormValues(defaultFormValues)
  }

  return (
    <Switch>
      <Route path='/pizza'>
        <OrderForm orderInput={orderInput} values={formValues} onSubmit={onSubmit} orderCheckboxInput={orderCheckboxInput}/>  
      </Route>
      <Route path='/' component={Header}/>
    </Switch>
  );
};
export default App;
