
import Burger from './Burger'




const Navbar = () =>(
    <div className="navbar">

        <div className ="logo">
            <a href="/"><img className="logoimg" src="/logo.png" alt="Robert"></img>
            </a>
        </div>
        <Burger/>

</div>

)

export default Navbar;

//<li className="nav-link"><Link href="/about">About</Link></li>
