import Link from "next/link"

const HomePage = () => {
  return( <div>
    <h1> HomePage</h1>
    <ul>
      <li>  <Link href="/About"  >About</Link> </li>
      <li><Link href="/Contact" >Contact</Link></li>
      <li><Link href="/Services">Services</Link></li>
      
    </ul>
  </div> )
}
export default HomePage