import Header from "../../component/frontend/header"
import Footer from "../../component/frontend/footer"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Header/>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Medilab</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <Link to="/login" className="btn-get-started scrollto">Pedir cita</Link>
        </div>
      </section>
      <Footer/>
    </>
  )
}
