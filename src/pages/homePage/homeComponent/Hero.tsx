import { FlatButton } from "../../../shared/FlatButton"

export const Hero = ()=>{
    return(
        <section id = 'hero'>
            <div className="container-fluid text-center">
                <div>
                    
                   <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                    Est.2020 ·CAC Registered ·Ltd.
                    </span>
                </div>
                <br/>
                <h1>
                    Engineering
                    Nigeria's Future

                    <span style={{ color: 'var(--light-green)', display:'block' }}>Infrastructure</span>
                    
                </h1>
                <br/>
                <p className='subtopic'>
                    From roads and drainages to housing units and civil works — YNUX Integrated 
                    Construction Ltd delivers projects across Nigeria with international best practices, 
                    technical precision, and proven reliability.
                </p>
                <br/><br/>
                <div>
                    <FlatButton title='Get Free Consultation' className='btn btnPrimary btn-xl ' onClick={()=>alert('Hi, I’d like to get a free consultation for a construction project. I’d appreciate some guidance on the best options.')}/>    
                    <FlatButton title='View Our Projects' className='btn btnSecondary btn-xl'/>
                </div>
                <br/>


                <div className='row' style={{color:"var(--gray)"}}>
                    <div className="col-6 col-md-6 col-lg-3">
                            <h3>2020</h3>
                            <p>Established</p>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3">
                            <h3>9+</h3>
                            <p>Core Services</p>
                    </div>
                    <div className="col-6  col-lg-3">
                            <h3>Multi-City</h3>
                            <p> coverage Across Nigeria</p>
                    </div>
                    <div className="col-6  col-lg-3">
                        <h3>100%</h3>
                        <p>Compliance with best practices</p>
                    </div>
                </div>
            </div>
        </section>
    )
}