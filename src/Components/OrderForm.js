import React from 'react'
// import axios from 'axios'

const OrderForm = props => {
    const { orderInput, values, onSubmit, orderCheckboxInput } = props

    return(
        <div>
            <h2>Order Here!</h2>
            <form onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input
                        name='name'
                        type='text'
                        onChange={orderInput}
                        value={values.name}
                    ></input>
                </label>

                <label> Size&nbsp;
                    <select
                        name='size'
                        onChange={orderInput}
                        value={values.size}

                        >
                        <option value=''>-- Choose your pizzas size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extra-large'>Extra-Large</option>
                        <option value='huge'>Huge</option>


                    </select>
                </label>
                <label> Toppings&nbsp;
                    <input
                        name='pepperoni'
                        type=''
                        onChange={orderCheckboxInput}
                        checked={values.toppings.pepperoni}

                    ></input>
                    <input
                        name='sausage'
                        type=''
                        onChange={orderCheckboxInput}
                        checked={values.toppings.sausage}

                    ></input>
                    <input
                        name='greenPeppers'
                        type=''
                        onChange={orderCheckboxInput}
                        checked={values.toppings.greenPeppers}

                    ></input>
                    <input
                        name='onions'
                        type=''
                        onChange={orderCheckboxInput}
                        checked={values.toppings.onions}

                    ></input>
                    <input
                        name='mushrooms'
                        type=''
                        onChange={orderCheckboxInput}
                        checked={values.toppings.mushrooms}
                    ></input>
                </label>
                    <label>Special Instructions:&nbsp;
                        <input 
                        name='special'
                        type='text'
                        ></input>
                    </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default OrderForm