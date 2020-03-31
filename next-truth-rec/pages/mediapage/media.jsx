import Layout from "../../components/Layout";
import mediaStyles from "./media-styles";

class MediaPage extends React.Component{


render(){
    return(
<Layout>
    <section id="media-main" className="main">
            <div className="grid-item intro">
                <h1>Historical Media Gallery</h1>
            </div>
         
            <div className="grid-item video-title">
                <h1>Videos</h1>
            </div>

 
            <section className="video-content">
                <article className="shadow-plantations-card">
                    <a data-toggle="modal" data-target="#myModal1">
                    <div className="image-top-left">

                            <img data-toggle="modal" src="../img/shadows.png" className="resource" alt="in the shadows image"/>

                    </div>

                    <div className="card-text">
                        <p><strong>In the Shadows of Plantations</strong></p>
                        <p>30:00</p>
                    </div>
                </a>
                    
                </article>

                <article className="bo-diddley-card">
                    <a data-toggle="modal" data-target="#myModal2">
                    <div className="image-top-left">

                            <img src="../img/bo-diddley.png" className="resource" alt="image of Bo Diddley Memorial 2008"/>
                    
                    </div>

                    <div className="card-text">
                        <p><strong>Bo Diddley Memorial 2008</strong></p>
                        <p>08:21</p>
                    </div>
                </a>
                </article>
                <article className="baseball-card">
                    <a data-toggle="modal" data-target="#myModal3">
                    <div className="image-top">

                            <img src="../img/baseball-league.png" className="resource" alt="image of baseball players"/>

                    </div>

                    <div className="card-text">
                        <p><strong>Negro Baseball League Players visit Alachua County</strong></p>
                        <p>09:22</p>
                    </div>
                </a>
                </article>


                <article className="verdell-washington-card">
                    <a data-toggle="modal" data-target="#myModal4">
                    <div className="image-top">

                            <img src="../img/verdell.png" className="resource" alt="image of Verdell Washington" />
    
                    </div>

                    <div className="card-text">
                        <p><strong>Alachua County Talks: Verdell Washington Robinson</strong></p>
                        <p>25:01</p>
                    </div>
                </a>
                </article>


                <article className="cotton-club-card">
                    <a data-toggle="modal" data-target="#myModal6">
                    <div className="image-top">

                            <img src="../img/cotton-club.png" className="resource" alt="image of chari person of cotton club museum"/>


                     
                    </div>

                    <div className="card-text">
                        <p><strong>Cotton Club Museum and Cultural Center</strong></p>
                        <p>28:30</p>
                    </div>
                </a>
                </article>
            </section>


            <div className="bs-example"> 
        <div id="myModal1" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">In the Shadows of Plantations</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body-2">

                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/AMjWEjQy7yI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="bs-example"> 
        <div id="myModal2" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Bo Diddley Memorial 2008</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                       
                    </div>
                    <div className="modal-body-2">

                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/uQoD2sS5S6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="bs-example"> 
        <div id="myModal3" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Negro Baseball League Players visit Alachua County</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body-2">

                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/7BppYvSvLrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="bs-example">  
        <div id="myModal4" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Alachua County Talks: Verdell Washington Robinson</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body-2">

                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/9FtJSvUeIPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="bs-example">
        <div id="myModal6" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Cotton Club Museum and Cultural Center</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body-2">

                        <iframe width="100%" height="400px" src="https://player.vimeo.com/video/9700903" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>
        

        </section>
        <style jsx>{mediaStyles}</style>
 </Layout>
)
    }
}
export default MediaPage;