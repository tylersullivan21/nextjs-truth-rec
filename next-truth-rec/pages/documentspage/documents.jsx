import Layout from "../../components/Layout";
import documentsStyles from "./documents-styles";

class DocumentsPage extends React.Component{

render(){
    return(
<Layout>
<section className="documents-main" >
            <section className="intro">
                <h1>Documents</h1>
                    
            </section>

            <section className="search">

            </section>

            <section className="minutes-title">
                <div>
                    <h1>Meeting Minutes</h1>
                </div>
            </section>
            <section className="items">
                <div className="item">
                    <h3 className="item__headline">June 1, 1863 - Board of County Commission Minutes</h3>
            
                    <p className="item__text">At a meeting of the board of County Commissioners, met pursuant to adjournment, Present Mathew Hinson, Enoch T. Geiger, J.M. Sparkman C. Rain &amp; E.H. Jordan PresclassNameent of the board. Ordered that J.R.W. Grissoms account of One dollar for altering Table in Judge of probates Office be paclassName.</p>
            
                    <a href="https://www.alachuaclerk.org/archive/Clerk/Ancient/FrontPage.cfm?DclassName=171&amp;BclassName=620&amp;Trans=171" target="blank" className="item__button">Learn More »</a>
                    <img className="item__image" src="../img/doc.png" alt="Document"/>
                </div>
            
                <div className="item">
                    <h3 className="item__headline">May 7, 1866 - Board of County Commission Minutes</h3>
            
                    <p className="item__text">At a meeting of the board of County Commissioners, met pursuant to adjournment, Present Mathew Hinson, Enoch T. Geiger, J.M. Sparkman C. Rain &amp; E.H. Jordan PresclassNameent of the board.</p>
            
                    <a href="http://www.alachuaclerk.org/archive/Clerk/Ancient/FrontPage.cfm?DclassName=202&amp;BclassName=620&amp;Trans=202" target="blank" className="item__button">Learn More »</a>
                    
                    <img className="item__image" src="../img/doc.png" alt="Document"/>
                </div>
            </section>
      </section>

        <style jsx>{documentsStyles}</style>
        </Layout>
)
    }
}
export default DocumentsPage;