import {ArrowRightOutlined, EnvironmentOutlined, MailOutlined} from '@ant-design/icons'
import businessLogo from '../assets/businessLogo.png'
import { FlatButton } from './FlatButton'
export const Footer = ()=>{
    const year = new Date().getFullYear()
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-3'>
                        <img src={businessLogo} alt='ynux_business_logo' style={{width:"60%"}}/>
                    
                    <br/>
                    <p>
                        YNUX Integrated Construction Ltd — an indigenous 
                        Nigerian company delivering civil engineering and construction 
                        projects to international standards since 2020.
                    </p>
                    
                        <div>
                            <EnvironmentOutlined/> Nigeria — Multiple Cities
                        </div>
                    <div>
                        <MailOutlined/> info@ynuxconstruction.com <br/>
                    </div>
                    </div>

                    <div className="col-md-3">
                        <h3>COMPANY</h3><br/>
                        <a href='/#about'>About us</a><br/><br/>
                        <a href='/#leadership'>Leadership Team</a><br/><br/>
                        <FlatButton className=' borderlessbtn' title='Contact Us'/><br/><br/>
                    </div>

                    <div className="col-md-3">
                        <h3>SERVICES</h3><br/>
                        <p>Engineering & Design</p>
                        <p>Civil Construction</p>
                        <p>Project Management</p>
                        <p>Architecture</p>
                        <p>Aerial Survey</p>
                    </div>

                    <div className="col-md-3">
                        <h3>START A PROJECT</h3><br/>
                        <p>
                            Ready to bring your construction or engineering vision to life? Get a free consultation from our team.
                        </p>
                        <br/>
                        <FlatButton title='Free Consultation' icon={<ArrowRightOutlined/>} className='btn btn-lg btnPrimary'/><br/>
                        <a href='/#projects'>View Our Projects <ArrowRightOutlined/> </a><br/>
                    </div>


                </div>
                <hr/>
                <p >All Rights Reserved © Ynux construction {year}</p><br/>
                <a style={{color:"var(--light-green)"}} href='https://jozzycodes.com'target='_blank' rel='no-referrer'><small>Website created by jozzycodes</small></a>

            </div>
        </footer>
    )
}