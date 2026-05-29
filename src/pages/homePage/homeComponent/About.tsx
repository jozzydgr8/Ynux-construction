import { FlatButton } from "../../../shared/FlatButton";
import {ArrowRightOutlined} from '@ant-design/icons';
import aboutImage from '../../../assets/whitemaninConstruction.png';
import { handleRequest } from "../../../shared/handleRequest";

export const About = ()=>{
    return(
        <section id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-flex mb-4">
                        <div style={{width:'100%',
                        
                        height:'100%',backgroundImage:`url(${aboutImage})`, backgroundPosition:'center', backgroundSize:'cover', minHeight:'300px'}}></div>
                        </div>
                        

                    <div className="col-md-6 animate-up">
                        <div>
                            <span className='homeBadgeParent '> 
                            <span className='homeBadge'></span>
                                about ynux
                            </span>
                        </div>
                                    
                        <br/>
                        <h2 className='animate-up'>
                            An Indigenous Force in
                            <span style={{ color: 'var(--light-green)', display:'block' }}>Nigerian Construction</span>
                            
                        </h2>
                        <br/>

                        <p className='subtopic animate-up'>
                            Established in 2020 and registered under the Companies and Allied Matters Act 1990, YNUX Integrated Construction Ltd was founded with a singular mission: 
                            to raise the standard of civil engineering and infrastructure development in Nigeria.
                        </p>


                        <p className="animate-up">
                            We have consistently delivered engineering and construction projects across multiple cities in Nigeria, combining quality, innovation,
                            and technical expertise to provide reliable project execution from concept to completion.
                        </p>

                        <ul className="row">
                            <li className="col-md-6 animate-up">International Best Practices</li>
                            <li className="col-md-6 animate-up">Technical Expertise</li>
                            <li className="col-md-6 animate-up">Transparent Delivery</li>
                            <li className="col-md-6 animate-up">Sustainable Development</li>
                        </ul>
                        <br/>

                        <FlatButton onClick={()=>handleRequest('Hi, I’d like to get in touch regarding your construction services. Please let me know how I can proceed.')} title='learn more  ' className='btnPrimary btn btn-xl animate-up' icon={<ArrowRightOutlined/>}/>
                    </div>



                </div>

            </div>
        </section>
    )
}