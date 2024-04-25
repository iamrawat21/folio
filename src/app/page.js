import Index from "./about/page"
import Work from "./pro-graphic/page"
import About from "./pro-dev/page"
import Land from "./land/page"
import Design from "./design/page"
import Con from "./con/pages"
import Footer from "./footer/page"

export default function Home() {
  return (
    <main className={"noise"}>
    <Land />
   <Index />
   <About />
   <Design />
   <Work />
   <Con />
   <Footer />
  
   
 

    </main>
  )
}
