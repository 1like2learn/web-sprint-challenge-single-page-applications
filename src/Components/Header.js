import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Header = props => {
    const history = useHistory()
    const urlChange = () => {
        console.log('pizza')
        history.push(`/pizza`)
      }
    return(
        <div>
            <h1>Lambda Eats</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/help'>Help</Link>
            </nav>
            <div>
                Your Favorite food, delivered while coding
                <button onClick={urlChange}>Pizza?</button>
            </div>
        </div>
    )
}

export default Header