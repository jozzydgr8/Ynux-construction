import { Footer } from "../../shared/Footer"
import { About } from "./homeComponent/About"
import { Contact } from "./homeComponent/Contact"
import {Hero} from "./homeComponent/Hero"
import { Leadership } from "./homeComponent/Leadership"
import { Projects } from "./homeComponent/Projects"
import { Service } from "./homeComponent/Service"
export const HomePage = ()=>{
    return(
        <>
        <Hero/>
        <Service/>
        <About/>
        <Leadership/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
}