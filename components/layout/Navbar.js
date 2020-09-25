
import Burger from './Burger'
import Link from 'next/link';



const Navbar = () =>(
    <nav className="navbar">

        <div className ="logo">
            <Link href="/"><img className="logoimg" src="/logo.png" alt="Robert"></img>
            </Link>
        </div>
        <Burger/>

</nav>
)

export default Navbar;
