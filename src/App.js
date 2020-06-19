import React, {useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import Header from './Components/Header'
import OrderForm from './Components/OrderForm'
import formSchema from './Validation/FormValidation'

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
const defaultSubmitStatus = true

const App = () => {
  const [ formValues, setFormValues ] = useState(defaultFormValues)
  const [ formErrors, setFormErrors ] = useState({})
  const [ submitDisabled, setSubmitDisabled ] = useState(defaultSubmitStatus)


  const orderInput = event => {
    const {name, value} = event.target
    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]:''
      });
    })
    .catch(error => {
      setFormErrors({
        ...formErrors,
        [name]: error.errors[0]
      })
    })
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
    postNewOrder(newOrder)
    console.log(newOrder)
    setFormValues(defaultFormValues)
  }
  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/users`, JSON.stringify(newOrder))
    .then((response) =>{
      console.log('response', response)
    })
    .catch(error=>{
    console.error('error', error);
    })
    .finally(()=>{
      setFormValues(defaultFormValues)
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setSubmitDisabled(!valid)
    })
  }, [formValues])
  return (
    <Switch>
      <Route path='/pizza'>
        <OrderForm orderInput={orderInput} values={formValues} onSubmit={onSubmit} orderCheckboxInput={orderCheckboxInput} submitDisabled={submitDisabled}/>  
      </Route>
      <Route path='/' component={Header}/>
    </Switch>
  );
};
export default App;
