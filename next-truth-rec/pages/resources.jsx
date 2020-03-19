import Navigation from "../components/Navigation";
import Modal from "../components/Modal";
import Footer from "../components/Footer";


class ResourcesPage extends React.Component{

render(){
    return(
<div>
    <Navigation/>
    <Modal/>
    <section id="resources-section" class="resources-main">
        <div class="resources-content">
            <div class="grid-item title">
                <h1 class="title-resources">Resources</h1>
            </div>
            <div class="grid-items">
                <div class="image-grid">
                   
                    <div class="media">
                        <a href={this.props.links[9].link}>
                            <img class="resource" src={cottonClub} alt="Image-left" />
                        
                            <div class="overlay">

                            </div>
                            <div class="span-text">
                                    <div class="text">
                                        <p>{this.props.links[9].title}</p>
                                    </div>
                                </div>

                                <div class="description-text">
                                    <div class="text-2">
                                        <p>Photos, Videos</p>
                                    </div>
                                </div>
                            </a>
                    </div>
                    <div class="documents">
                        <a href={this.props.links[10].link}>
                            <img class="resource" src={documentImg} alt="Image-left" />
                        

                        <div class="overlay">    
                        </div>

                        <div class="span-text">
                            <div class="text">
                                <p>{this.props.links[10].title}</p>
                            </div>
                        </div>

                        <div class="description-text">
                            <div class="text-2">
                                <p>Meeting Minutes</p>
                            </div>
                        </div>
                    </a>
                    </div>
          
                    <div class="landmarks">
                        <a href={this.props.links[11].link}>
                            <img class="resource" src={landmarkImg} alt="Image-left" />
                        
                        <div class="overlay">       
                        </div>
                        
                        <div class="span-text">
                                <div class="text">
                                    <p>{this.props.links[11].title}</p>
                                </div>
                            </div>

                            <div class="description-text">
                                <div class="text-2">
                                    <p>Marker Locations, National Register Sites</p>
                                </div>
                            </div>
                        </a>
                    </div>
                 
                    <div class="links">
                        <a href={this.props.links[13].link}>
                            <img class="resource" src={linksImg} alt="Image-left" />
                        
                        <div class="overlay">      
                        </div>

                        <div class="span-text">
                                <div class="text">
                                    <p>{this.props.links[13].title}</p>
                                </div>
                            </div>

                            <div class="description-text">
                                <div class="text-2">
                                    <p>Related links, Historical Organizations</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</div>
)
    }
}
export default ResourcesPage;