import { contactInfo, ctaFeaturesList } from "../../../data"
import { FlatButton } from "../../../shared/FlatButton";
import {ArrowRightOutlined} from '@ant-design/icons'
import { handleRequest } from "../../../shared/handleRequest";
export const  Contact = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">


                        <div className=''>
                        <span className='homeBadgeParent '> 
                            <span className='homeBadge'></span>
                                Contact us
                            </span>  
                        </div>

                        <br/>
                        <h2 className=' animate-up'>
                            Start your project
                            <span style={{ color: 'var(--light-green)', display:'block' }}>With a Free Consultation</span>  
                        </h2>
                        <br/>
                        <p className="subtopic">
                            Get a free consultation with our construction experts. We'll discuss your vision, assess your site, 
                            and provide a detailed project proposal with transparent pricing.
                        </p>

                        <div>
                            {
                                contactInfo.map(contact=>(
                                    <div key={contact.label}>
                                        <div className="row">
                                            <div className="cta-icon animate-left col-sm-6">
                                                {contact.icon}
                                            </div>
                                            <br/>
                                            <div className="col-sm-6">
                                                <h4>{contact.label}</h4>
                                                <p>{contact.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <br/>
                       <div>
                         <FlatButton onClick={()=>handleRequest('Hi, I’d like to get a free consultation for a construction project. I’d appreciate some guidance on the best options.')} title="Send Consultation request" className="btn btnSecondary btn-lg" icon={<ArrowRightOutlined/>}/>
                       </div>

                    </div>


                    <div className="col-md-6">
                         
                        <div className="row ">
                            {
                                ctaFeaturesList.map(features=>(
                                    <div key={features.id} className="col-md-6">
                                        <div className="cta-icon animate-up" style={{marginBottom:"10px",  padding:"20px", minHeight:"150px"}}>
                                            {features.icon}
                                            
                                            <p>{features.text}</p>
                                        </div>
                                        
                                    </div>
                                ))
                            }
                            
                        </div>
                            
                    </div>


                        

                </div>


            </div>
        </section>
    )
}