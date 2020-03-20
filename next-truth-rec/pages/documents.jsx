import Layout from "../components/Layout";
import documentsStyles from "../public/jsx-styles/documents-styles";

class DocumentsPage extends React.Component{

render(){
    return(
<Layout>
<section id="documents-main" >
            <section id="intro">
                <h1>Documents</h1>
                    
            </section>

            <section id="search">

            </section>

            <section id="minutes-title">
                <div>
                    <h1>Meeting Minutes</h1>
                </div>
            </section>
            <section className="items">
                <div className="item">
                    <h3 className="item__headline">June 1, 1863 - Board of County Commission Minutes</h3>
            
                    <p className="item__text">At a meeting of the board of County Commissioners, met pursuant to adjournment, Present Mathew Hinson, Enoch T. Geiger, J.M. Sparkman C. Rain &amp; E.H. Jordan President of the board. Ordered that J.R.W. Grissoms account of One dollar for altering Table in Judge of probates Office be paid.</p>
            
                    <a href="https://www.alachuaclerk.org/archive/Clerk/Ancient/FrontPage.cfm?DID=171&amp;BID=620&amp;Trans=171" target="blank" className="item__button">Learn More »</a>
                    <img className="item__image" src="img/doc.png" alt="Document"/>
                </div>
            
                <div className="item">
                    <h3 className="item__headline">May 7, 1866 - Board of County Commission Minutes</h3>
            
                    <p className="item__text">At a meeting of the board of County Commissioners, met pursuant to adjournment, Present Mathew Hinson, Enoch T. Geiger, J.M. Sparkman C. Rain &amp; E.H. Jordan President of the board.</p>
            
                    <a href="http://www.alachuaclerk.org/archive/Clerk/Ancient/FrontPage.cfm?DID=202&amp;BID=620&amp;Trans=202" target="blank" className="item__button">Learn More »</a>
                    
                    <img className="item__image" src="img/doc.png" alt="Document"/>
                </div>
            </section>
      </section>

        <style jsx>{documentsStyles}</style>
        </Layout>
)
    }
}
export default DocumentsPage;