  
/*index.jsx*/
//import React from "react";
//import img1 from "/img/courthouse-overlay.png";
//import img2 from "/img/road-overlay.png";
//import img3 from "/img/map-overlay.png";
//import '../css/TruthRec.css';
//import "../css/main.css";
//import { render } from "@testing-library/react";
import Link from "next/link";
import Layout from "../components/Layout";

//Functional Component 
const MainPage  = () => (

    <Layout> 
          <section class="index-main main">
  
                <div class="hero grid-item">
                    <img class="hero-img" src="img/cropped-cover-image.png" alt="downtown gainesville image"/>
                </div>
  
                <div id="truth-rec-info">
                    <div class="truth-info-head">
                        <h2>What is Truth &amp; Reconcilation?</h2>
                    </div>
                    <div class="truth-info-text">
                        <p>On June 26, 2018 the Alachua County Board of County Commissioners (BoCC) began discussion of a process for Truth and Reconciliation, to recall our history of racial injustice, and repair what we can.  
                            The process was prompted by research completed by the Alachua County Historical Commission (ACHC) in response to the national Equal Justice Initiative (EJI) lynching research including Alachua County. 
                            Local research confirmed the EJI list and more (since EJI begins at end of Reconstruction in 1877) documenting 46 lynchings that occurred between 1867 and 1926.
                        </p>
                    </div>
                    <div class="tagline grid-item" id="tagline">
                        <h2 class="explore">Explore Our History</h2>
                    </div>
                </div>
  
                <section id="img-quote">
                    
                        <div class="images">
                            <div class="img-left">
                               <Link href="/resources"><a><img class="img1" src="/img/courthouse-overlay.png" alt=""/><div class="span-text"><div class="overlay-text"><p>Resources</p></div></div></a></Link>
                              </div>

                              <div class="img-center">
                                  <Link href="/timeline"><a><img class="img2" src="/img/road-overlay.png"  alt=""/><div class="span-text"><div class="overlay-text"><p>Timeline</p></div></div></a></Link>
                                </div>
                    
                                <div class="img-right">
                                    <Link href="/events"><a><img class="img3" src="/img/map-overlay.png" alt=""/><div class="span-text"><div class="overlay-text"><p>Events</p></div></div></a></Link>
                          </div>
                          </div>
                  <div class="roosevelt-quote">

                      <p>“We are a nation of many nationalities, many races, many religions -- bound together by a single
                          unity,
                          the unity of freedom and equality. Whoever seeks to set one nationality against another seeks
                          to
                          degrade all nationalities. Whoever seeks to set one race against another seeks to enslave all
                          races.
                          Whoever seeks to set one religion against another, seeks to destroy all religion.”</p>
                  </div>
                  <div class="quote">
                          <p class="quotee"> Franklin D. Roosevelt<br/>November 1, 1940 </p>
                  </div>
              </section>
          </section>
    </Layout>          
)


export default MainPage;