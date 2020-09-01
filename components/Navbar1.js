import Link from "next/link"


const navWrapper = {
    padding: "2rem 10rem"

}
const navbar = {
    display: "flex",
    listStyle: "none",
    flexFlow: "row nowrap"
}
const navLink = {
    padding: "18px 10px"
}

const Navbar = () =>(
    <div  style= {navWrapper}>
        <div>
            <ul style = {navbar}>
                <li style ={navLink}><Link href="/">Home</Link></li>
                <li style ={navLink}><Link href="/about">About</Link></li>
                <li style ={navLink}><Link href="/projects">Projects</Link></li>
                <li style ={navLink}><Link href="/contact">Contact</Link></li>
            </ul>
        
        </div>    
    </div>

)

export default Navbar;