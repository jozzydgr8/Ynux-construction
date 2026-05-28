import { leaders } from "../../../data"

export const Leadership = ()=>{
    return(
        <section id="leaderhsip">
            <div className="container-fluid">
                <div className='text-center'>
                                    
                    <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                        Our Leadership
                    </span>
                    
                </div>

                <br/>
                <h2 className='text-center animate-up'>
                    Led by Experience,
                    <span style={{ color: 'var(--light-green)', display:'block' }}>Driven by Excellence</span>
                    
                </h2>
                <p className='subtopic text-center animate-up '>
                    Our leadership team combines 
                    decades of engineering expertise with a passion for building Nigeria's infrastructure.
                </p>
                <div className="row">
                    {
                        leaders.map((leader,index)=>(
                            <div key={index} className="col-md-4 animate-up">
                                <div className="leadershipCard">
                                    <div
                                        style={{
                                        height: "250px",
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#fffaf0",
                                        overflow: "hidden"
                                        }}
                                        >
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain"
                                        }}
                                    />
                                    </div>

                                <br/>
                                    <div style={{padding:'10px 30px'}}>
                                        <h3>{leader.name}</h3>
                                        <h5 style={{color:'var(--primary-green)'}}>{leader.position}</h5>
                                        <p>{leader.description}</p>
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