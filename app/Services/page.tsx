import Link from "next/link"

const ServicePage = () => {
  return (
    <div>
        <h1>Our Services</h1>
        <ul>
          <li> <Link href="/Services/Seo-Services">Seo-Services </Link></li>
          <li> <Link href="/Services/Smma">Smma</Link> </li>
          <li> <Link href="/Services/Web-Designing">Web-Designing</Link> </li>
          <li> <Link href="/Services/Web-development">Web-Development</Link> </li>
        </ul>
        
        </div>
  )
}

export default ServicePage