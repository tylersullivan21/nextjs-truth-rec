import Navigation from "../components/Navigation";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import linksStyles from "../public/jsx-styles/links-styles"
class LinksPage extends React.Component{

render(){
    return(

    <Layout>
    <div id="links-main">
        <div className="link-intro">
        <h1 className="title">Links</h1>

<hr></hr>
        <div>
            <p><a href="https://oral.history.ufl.edu/" target="blank"><strong>Samuel Proctor Oral History Program</strong></a></p>
             <p>SPOHP is an award-winning, social-justice research center engaged in experiential learning initiatives all over the world.</p>
        </div>
        <hr></hr>
        <div>
            <p><a href="https://eji.org/" target="blank"><strong>Equal Justice Initiative - EJI</strong></a></p>
            <p>The Equal Justice Initiative is committed to ending mass incarceration and excessive punishment in the United States, to challenging racial and economic injustice, and to protecting basic human rights for the most vulnerable people in American society.</p>

        </div> 
        <hr></hr>
        <div className="fourth">
            <p><a href="http://www.alachuaclerk.org/archive/CFDocs/TransSearchsolr.cfm" target="blank"><strong>Alachua County Ancient Records Transcription Search</strong></a></p>
            <p>Search the volunteer provided transcriptions of Alachua County's Record Book images.</p>
        </div>
        </div>
    </div>
    <style jsx>{linksStyles}</style>
    </Layout>
)
    }
}
export default LinksPage;