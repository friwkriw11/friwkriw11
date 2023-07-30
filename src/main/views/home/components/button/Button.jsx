import { Link } from 'react-router-dom'
import './button.scss'



const Button = () => {
  return (

    <div className=""><Link to="/add-member"><button className='btn'> Add Champion +</button></Link></div>
  )
}

export default Button