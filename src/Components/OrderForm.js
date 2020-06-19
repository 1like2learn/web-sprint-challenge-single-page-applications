import React from 'react'
// import axios from 'axios'

const OrderForm = props => {
    const { orderInput, values, onSubmit, orderCheckboxInput, submitDisabled } = props

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
                    <label>Pepperoni:&nbsp;
                        <input
                            name='pepperoni'
                            type='checkbox'
                            onChange={orderCheckboxInput}
                            checked={values.toppings.pepperoni}

                        ></input>
                    </label>
                    <label>Sausage:&nbsp;
                        <input
                            name='sausage'
                            type='checkbox'
                            onChange={orderCheckboxInput}
                            checked={values.toppings.sausage}

                        ></input>
                    </label>
                    <label>Green Peppers:&nbsp;
                        <input
                            name='greenPeppers'
                            type='checkbox'
                            onChange={orderCheckboxInput}
                            checked={values.toppings.greenPeppers}

                        ></input>
                    </label>
                    <label>Onions:&nbsp;
                        <input
                            name='onions'
                            type='checkbox'
                            onChange={orderCheckboxInput}
                            checked={values.toppings.onions}

                        ></input>
                    </label>
                    <label>Mushrooms:&nbsp;
                        <input
                            name='mushrooms'
                            type='checkbox'
                            onChange={orderCheckboxInput}
                            checked={values.toppings.mushrooms}
                        ></input>
                    </label>
                </label>
                    <label>Special Instructions:&nbsp;
                        <input 
                        name='special'
                        type='text'
                        ></input>
                    </label>
                <button disabled={submitDisabled}>Submit</button>
            </form>
        </div>
    )
}

export default OrderForm