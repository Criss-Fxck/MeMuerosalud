import Header from "../../component/frontend/header"
import Footer from "../../component/frontend/footer"
import Hero from "../../component/frontend/hero"
import Whyussection from "../../component/frontend/whyussection"
import Aboutsection from "../../component/frontend/aboutsection"
import Countssection from "../../component/frontend/countssection"
import Servicessection from "../../component/frontend/servicessection"
import Appointmentsection from "../../component/frontend/appointmentsection"
import Departmentssection from "../../component/frontend/departmentssection"
import Doctorssection from "../../component/frontend/doctorssection"
import Frecuentlyaskedquestionssection from "../../component/frontend/frecuentlyaskedquestionssection"
import Testimonialssection from "../../component/frontend/testimonialssection"
import Gallerysection from "../../component/frontend/gallerysection"
import Contactsection from "../../component/frontend/contactsection"

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Whyussection/>
      <Aboutsection/>
      <Countssection/>
      <Servicessection/>
      <Appointmentsection/>
      <Departmentssection/>
      <Doctorssection/>
      <Frecuentlyaskedquestionssection/>
      <Testimonialssection/>
      <Gallerysection/>
      <Contactsection/>
      <Footer/>
    </>
  )
}
