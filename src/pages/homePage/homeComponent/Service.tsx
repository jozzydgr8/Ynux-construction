import {services} from "../../../data"
import { FlatButton } from "../../../shared/FlatButton"
import { handleRequest } from "../../../shared/handleRequest"
export const Service = ()=>{
    return(
        <section id="services">
            <div className="container-fluid">
                <div className='text-center'>
                    
                   <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                        Our Services
                    </span>
                    
                </div>
                <br/>
                <h2 className='text-center animate-up'>
                    Comprehensive Construction &
                    <span style={{ color: 'var(--light-green)', display:'block' }}>Engineering Solutions</span>
                    
                </h2>
                <p className='subtopic text-center animate-up '>
                    From concept to completion, YNUX delivers end-to-end services across civil engineering, 
                    architecture, facility management, and beyond.
                </p>
                
                <div className='row'>
                    {
                        services.map((service,index)=>(
                            <div key={index} className='col-md-4 mb-4'>
                            <div className='serviceCard d-flex flex-column h-100 animate-up'>
                            <div >
                                {service.icon}
                            </div>
                            <br/>
                           
                            <h3 className='home-subheader'>{service.title}</h3>
                            <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <br/>
                <div className='animate-up text-center'>
                    <FlatButton title='Get in touch' className='btn btnSecondary btn-xl'onClick={()=>handleRequest('Hi, I’d like to get in touch regarding your construction services. Please let me know how I can proceed.')}/>
                </div>
            </div>
        </section>
    )
}