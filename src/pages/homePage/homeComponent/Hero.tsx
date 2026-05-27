import { FlatButton } from "../../../shared/FlatButton"

export const Hero = ()=>{
    return(
        <section id = 'hero'>
            <div className="container-fluid">
                <p className='homeTag'></p>
                <h1>
                    Engineering
                    Nigeria's Future
                    Infrastructure
                </h1>
                <p className='subtopic'>
                    From roads and drainages to housing units and civil works — YNUX Integrated 
                    Construction Ltd delivers projects across Nigeria with international best practices, 
                    technical precision, and proven reliability.
                </p>
                <div>
                    <FlatButton title='Get Free Consultation' className='btn btnPrimary ' onClick={()=>alert('Hi, I’d like to get a free consultation for a construction project. I’d appreciate some guidance on the best options.')}/>    
                    <FlatButton title='View Our Projects' className='btn btnSecondary'/>
                </div>
            </div>
        </section>
    )
}