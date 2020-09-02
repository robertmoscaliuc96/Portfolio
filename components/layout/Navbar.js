import Link from "next/link"




const Navbar = () =>(
    <div className="navbar">

        <div className ="logo">
            <Link href="/"><img className="logoimg" src="/logo.png" alt="Robert"></img></Link>
        </div>

        <ul className="nav-item">
            <li className="nav-link"><Link href="/">Home</Link></li>
            <li className="nav-link"><Link href="/projects">Work</Link></li>
            <li className="nav-link"><Link href="/about">About</Link></li>
            <li className="nav-link"><Link href="/contact">Contact</Link></li>
        </ul>

</div>

)

export default Navbar;