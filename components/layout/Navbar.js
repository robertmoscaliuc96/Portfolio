
import Burger from './Burger'






const Navbar = () =>(
    <nav className="navbar">

        <div className ="logo">
            <img src="/robertLogo.svg" alt=".robert" width={100} height={100} className="robert-logo"/>
        </div>
        <Burger/>

</nav>
)

export default Navbar;
