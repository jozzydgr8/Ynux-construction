import Marquee from "react-fast-marquee";
import revolutionPlus from '../../../assets/revolutionPlus.png';
import dantata from '../../../assets/dantatatown.png';
import aston from '../../../assets/astonHomesLogo.png';
import gilmore from '../../../assets/GIlmoreEngineeringLogo.png';

 const logos = [
        {
            name:revolutionPlus,
            alt:'revolutionplus'
        },
        {
            name:dantata,
            alt:'dantata'
        },
        {
            name:aston,
            alt:'astonHomesLogo'
        },
        {
            name:gilmore,
            alt:'gilmor-Engineering-limited'
        }
    ]
export const MarqueeComponent = ()=>{
   
    return(
        <Marquee>
            {
                    logos.map((partner, index)=>(
                        <div key={index} style={{margin:"30px 50px 0px 50px"}}>
                            <img src={partner.name} alt={partner.alt} style={{width:"200px", height:"150px", objectFit:"contain"}}/>
                        </div>
                    ))
                }
        </Marquee>
    )
}