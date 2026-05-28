import {projects} from '../../../data'
export const Projects = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className='text-center'>
                                    
                    <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                        Our Projects
                    </span>
                    
                </div>

                <br/>
                <h2 className='text-center animate-up'>
                    Delivering Excellence
                    <span style={{ color: 'var(--light-green)', display:'block' }}>Across Nigeria</span>
                    
                </h2>
                <p className='subtopic text-center animate-up '>
                    A portfolio of completed and ongoing civil engineering, infrastructure,
                     and construction projects delivered to the highest standards.
                </p>

                <div className="row">
                    {
                        projects.map((project, index)=>(
                            <div className='col-md-4 d-flex mb-4' key={index}>
                                <div className="projectCard">
                                    <div
                                    style={{height:"150px", width:"100%",backgroundImage:`url(${project.image})`,
                                    backgroundSize:"cover", backgroundPosition:'center', backgroundRepeat:'no-repeat'}}></div>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <br/>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}