
import Layout from "../components/Layout";
import Link from "next/link";
import resourceStyles from "../public/jsx-styles/resources-styles"


class ResourcesPage extends React.Component{

render(){
    return(
    <Layout>
    <section id="resources-section" className="resources-main">
        <div className="resources-content">
            <div className="grid-item title">
                <h1 className="title-resources">Resources</h1>
            </div>
            <div className="grid-items">
                <div className="image-grid">
                   
                    <div className="media">
                    <Link href="/media"><a><img className="resource" src="/img/cotton-club-overlay.png" alt="Image-left" /><div className="overlay"></div><div className="span-text"><div className="text"><p>Media</p></div></div><div className="description-text"><div className="text-2"><p>Photos, Videos</p></div></div></a></Link>
                    </div>
                    <div className="documents">
                    <Link href="/documents"><a><img className="resource" src="/img/document-overlay.png" alt="Image-left" /><div className="overlay"></div><div className="span-text"><div className="text"><p>Documents</p></div></div><div className="description-text"><div className="text-2"><p>Meeting Minutes</p></div></div></a></Link>
                    </div>
          
                    <div className="landmarks">
                    <Link href="/landmarks"><a><img className="resource" src="/img/landmark-resource-overlay.png" alt="Image-left" /><div className="overlay"></div><div className="span-text"><div className="text"><p>Landmarks</p></div></div><div className="description-text"><div className="text-2"><p>Marker Locations, National Register Sites</p></div></div></a></Link>
                    </div>
                 
                    <div className="links">
                    <Link href="/links"><a><img className="resource" src="/img/links-overlay.png" alt="Image-left" /><div className="overlay"></div><div className="span-text"><div className="text"><p>Links</p></div></div><div className="description-text"><div className="text-2"><p>Related links, Historical Organizations</p></div></div></a></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <style jsx>{resourceStyles}</style>
    </Layout>
)
    }
}
export default ResourcesPage;