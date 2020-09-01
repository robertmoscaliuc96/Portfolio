import Link from "next/link"




const Navbar = () =>(
    <div className="navbar">
        <div className="logo">
        <Link href="/">Robert</Link>
        </div>
        <div >
        <ul className="nav-item">
            <li className="nav-link"><Link href="/">Home</Link></li>
            <li className="nav-link"><Link href="/projects">Projects</Link></li>
            <li className="nav-link"><Link href="/about">About</Link></li>
            <li className="nav-link"><Link href="/contact">Contact</Link></li>
        </ul>
        </div>

</div>

)

export default Navbar;