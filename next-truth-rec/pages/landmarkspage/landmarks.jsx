import Layout from "../../components/Layout";
import landmarksStyles from "./landmarks-styles"

var hiddenStyle = {display:'none'};

class LandmarksPage extends React.Component{



render(){
    return(
   <Layout>
    <section id="landmarks-main">

            <div className="title">
                <h1>Landmarks</h1>
            </div>

            <div className="first-intro">
                <h2>State Historical Marker Locations</h2>
                <p>The history of Alachua County’s settlement includes many contributions by, and struggles of, the
                    African American community. State Historic Markers focused on the resilience of the community
                    including those commemorating Josiah T. Walls, the Serenola Settlement, and the lynching history
                    of Newberry.
                </p>
                </div>
            <div className="markers">
                <article className="walls-sign">
                    <div className="image-top">
                        <a data-toggle="modal" data-target="#NewberryLynchingMarker">
                            <img src="../img/landmark-img/Newberry-Lynching-Marker.jpg" className="resource" alt="Newberry Lynching Marker" />
                        </a>
                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#NewberryLynchingMarker"><strong>Newberry Lynching
                                        Marker</strong></a></p>

                        </div>
                    </div>
                </article>
                <article className="walls-sign">
                    <div className="image-top">
                        <a data-toggle="modal" data-target="#Josiah">
                            <img src="../img/landmark-img/walls.png" className="resource" alt="Walls Lankdmark Image" />
                        </a>
                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#Josiah"><strong>Josiah T. Walls</strong></a></p>

                        </div>
                    </div>


                </article>


                <article className="serenola">
                    <div className="image-top">
                        <a href="#img2">
                            </a><a data-toggle="modal" data-target="#Serenola">
                                <img src="../img/landmark-img/serenola.png" className="resource" alt="Image pf Serenola Landmark" />
                            </a>
                        

                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#Serenola"><strong>Serenola Plantation</strong></a>
                            </p>

                        </div>
                    </div>


                </article>
                <p>Other Florida State Historic Markers in Alachua County that discuss African American history include the Bland Community; Douglass High School; Alachua County Training School; and the Archer School Gymnasium. In Gainesville markers include Mt. Carmel Baptist Church; Chestnut Funeral Home; Shady Grove Primitive Church and Porters Quarters; The Home of A. Quinn Jones, Sr., Educator; The Ball Park; Mt. Pleasant United Methodist Church; and Mt. Pleasant Cemetery.  There are also markers in the County that mention the work of enslaved persons at Historic Haile Homestead at Kanapaha Plantation; Daniel Scott Plantation; and the Moses Elias Levy marker (near Micanopy).</p>
            
            </div>

            <div className="second-intro">
                <h1>National Register Sites</h1>
                <p>National Register (NR) Sites for our African American History are A Quinn Jones House, Liberty Hill
                    School House, Shady Grove Primitive Baptist Church and Pleasant Street Historic District.</p>
            </div>

            <div className="register-sites">
                <article className="quinn">
                    <div className="image-top">

                        <a data-toggle="modal" data-target="#quinn">
                            <img src="../img/landmark-img/quinn-jones.png" className="resource" alt="Image of Quinn Jones Landmark" />
                        </a>


                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#quinn"><strong>A. Quinn Jones House</strong></a></p>
                        </div>
                    </div>


                </article>

                <article className="liberty">
                    <div className="image-top">

                        <a data-toggle="modal" data-target="#liberty">
                            <img src="../img/landmark-img/liberty-hill.png" className="resource" alt="Image of Liberty Hill Landmar" />
                        </a>



                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#liberty"><strong>Liberty Hill School
                                        House</strong></a></p>

                        </div>
                    </div>


                </article>

                <article className="shady-grove">
                    <div className="image-top">

                        <a data-toggle="modal" data-target="#shady-grove">
                            <img src="../img/landmark-img/shady-grove.png" className="resource" alt="Image of Shady Grove Baptist Church" />
                        </a>




                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#shady-grove"><strong>Shady Grove Primitive Baptist
                                        Church</strong></a></p>

                        </div>
                    </div>

                </article>
                <article className="pleasant">
                    <div className="image-top">

                        <a data-toggle="modal" data-target="#pleasant">
                            <img src="../img/landmark-img/pleasant-street.png" className="resource" alt="Image of pleasant street historic district" />
                        </a>



                        <div className="shadow-text">
                            <p><a data-toggle="modal" data-target="#pleasant"><strong>Pleasant Street Historic
                                        District</strong></a></p>

                        </div>
                    </div>


                </article>
            </div>

    <div className="bs-example">
    <div id="NewberryLynchingMarker" className="modal fade" style={hiddenStyle}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Newberry Lynching Marker</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>The marker tells the story of Stella Young, James Dennis, Mary Dennis, Bert Dennis, Reverend J.J. Baskins and Andrew McHenry who were lynched in Newberry, Alachua County, Florida, on August 18,
                            1916.</p>
                    </div>

                    <img className="modal-landmark" src="/img/landmark-img/Newberry-Lynching-Marker.jpg" alt="Newberry Lynching Marker"/>

                </div>
            </div>
        </div>
    </div>
</div>


<div className="bs-example">

    <div id="Josiah" className="modal fade" style={hiddenStyle}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                   <h4 className="modal-title">Josiah T. Walls</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>Born in 1842 to slave parents in Winchester, Va., little is known of Josiah T. Walls’
                            early life. After a short term of Confederate service, he enlisted in the Third
                            Regiment, U.S. Colored Troops in 1863. </p>
                        <p>For more info, <a href="http://www.explorehistoricalachuacounty.com/location/josiah-t-walls/" target="blank">Click Here</a></p>
                    </div>

                    <img className="modal-landmark" src="/img/landmark-img/walls.png" alt=""/>


                </div>
            </div>
        </div>
    </div>
</div>

<div className="bs-example">
    <div id="Serenola" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">Serenola Plantation</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>In 1857, David Rogerson Williams II (1822-1907) of Darlington Co., SC, purchased 1,000
                            acres, including this site bordering Payne’s Prairie, and developed them as a plantation
                            known as “Serenola.” The 1860 census shows 120 slaves lived in 24 houses on the
                            plantation, where cotton, sugar cane, and corn were grown. </p>
                        <p>For more info, <a href="http://www.explorehistoricalachuacounty.com/location/serenola-plantation-historical-marker/" target="blank">Click Here</a></p>
                    </div>
                    <img className="modal-landmark" src="/img/landmark-img/serenola.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="bs-example">
    <div id="quinn" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">A. Quinn Jones House</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>A. Quinn Jones, Sr. (1893-1997), teacher, educational leader, and prominent
                            African-American advocate, lived here from 1925 to 1997. </p>
                        <p>For more info, <a href="http://www.explorehistoricalachuacounty.com/location/a-quinn-jones-house/" target="blank">Click Here</a></p>
                    </div>


                    <img className="modal-landmark" src="/img/landmark-img/quinn-jones.png" alt=""/>


                </div>
            </div>
        </div>
    </div>
</div>




<div className="bs-example">

    <div id="liberty" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">Liberty Hill School House</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>Liberty Hill Schoolhouse is on the list of Florida’s Historic Black Public Schools and
                            was established in 1875, historically significant for its 110-year association with
                            education and for its importance to the cultural heritage of the African American
                            community in Gainesville. </p>
                        <p>For more info, <a href="http://www.explorehistoricalachuacounty.com/location/liberty-hill-schoolhouse/" target="blank">Click Here</a></p>
                    </div>


                    <img className="modal-landmark" src="/img/landmark-img/liberty-hill.png" alt=""/>


                </div>
            </div>
        </div>
    </div>
</div>


<div className="bs-example">
    <div id="shady-grove" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">Shady Grove Primitive Baptist Church</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>Shady Grove Primitive Baptist Church is a landmark in Porters Quarters, one of
                            Gainesville’s oldest and most historic African-American neighborhoods.</p>
                        <p>For more info, <a href="http://www.explorehistoricalachuacounty.com/location/shady-grove-primitive-baptist-church-and-porters-quarters/" target="blank">Click Here</a></p>
                    </div>


                    <img className="modal-landmark" src="/img/landmark-img/shady-grove.png" alt=""/>


                </div>
            </div>
        </div>
    </div>
</div>



<div className="bs-example">
    <div id="pleasant" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">Pleasant Street Historic District</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                </div>
                <div className="modal-body">
                    <div className="modal-description">
                        <p>Mount Pleasant Methodist Episcopal Church was founded on July 16, 1867, with the Reverend
                            Isaac Davis serving as the first pastor. The Board of Trustees of the oldest black
                            congregation in Gainesville purchased the lot on which the present church still stands
                            for $160 from Charles W. Brush. </p>
                        <p>For more info, <a href="http://www.explorehistoricalachuacounty.com/location/mt-pleasant-united-methodist-church/" target="blank">Click Here</a></p>
                    </div>

                    <img className="modal-landmark" src="/img/landmark-img/pleasant-street.png" alt=""/>

                </div>
            </div>
        </div>
    </div>
</div>



    </section>
    <style jsx>{landmarksStyles}</style>
 
    </Layout>
)
    }
}
export default LandmarksPage;