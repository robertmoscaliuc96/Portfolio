
import Burger from './Burger'
import Link from 'next/link';



const Navbar = () =>(
    <nav className="navbar">

        <div className ="logo">
            <Link href="/">.Robert
            </Link>
        </div>
        <Burger/>

</nav>
)

export default Navbar;
