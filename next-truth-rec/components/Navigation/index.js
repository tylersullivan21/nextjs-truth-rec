//import React from 'react';
//import "./index.css";
//import logo from "../../img/truth-logo.png";
import Link from "next/link";

class Navigation extends React.Component{
    

    render(){

        return(
              <section class="nav">
                                
                    <div class=" grid-item logo">
                        <Link href="/"><a><img class="logo-img" /*src={logo} */ alt="truth logo"/></a></Link>
                    </div>
                    <div class=" grid-item elements">
                        <ul class="element-children">
                            <li class="menu"> <Link href="/about"><a>About</a></Link></li>
                            <li id = "explore" class="menu"><Link href="/resources"><a>Resources</a></Link></li>
                            <li class="menu"><Link href="/reparations"><a>Reparations</a></Link></li>
                            <li class="menu"><Link href="/events"><a>Events</a></Link></li>
                            <li class="menu"><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                    <div class="hamburger-menu">
                        <a href="#" class="openModalBtn">
                            <span class="bar one"></span>
                            <span class="bar two"></span>
                            <span class="bar three"></span>
                        </a>
                    </div>

                    <div class="grid-item subnav">
                        <ul class="sub-elements">
                            <li><Link href="/resources"><a>Resources</a></Link></li>
                            <li><Link href="/landmarks"><a>Landmarks</a></Link></li>
                            <li><Link href="/timeline"><a>Timeline</a></Link></li>
                        </ul>
                    </div>

                </section>

        );
    }
}

export default Navigation;


