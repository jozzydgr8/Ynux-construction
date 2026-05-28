import { About } from "./homeComponent/About"
import { Contact } from "./homeComponent/Contact"
import {Hero} from "./homeComponent/Hero"
import { Leadership } from "./homeComponent/Leadership"
import { Service } from "./homeComponent/Service"
export const HomePage = ()=>{
    return(
        <>
        <Hero/>
        <Service/>
        <About/>
        <Leadership/>
        <Contact/>
        </>
    )
}