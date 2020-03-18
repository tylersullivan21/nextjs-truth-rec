//import React from 'react';
//import "./index.css";
//import logo from "../../img/truth-logo.png";
import Link from "next/link";

class Navigation extends React.Component{


    render(){

        return(
              <section className="nav">
                                
                    <div className=" grid-item logo">
                        <Link href="/"><a><img className="logo-img" src="/img/truth-logo.png" alt="truth logo"/></a></Link>
                    </div>
                    <div className=" grid-item elements">
                        <ul className="element-children">
                            <li className="menu"> <Link href="/about"><a>About</a></Link></li>
                            <li id = "explore" className="menu"><Link href="/resources"><a>Resources</a></Link></li>
                            <li className="menu"><Link href="/reparations"><a>Reparations</a></Link></li>
                            <li className="menu"><Link href="/events"><a>Events</a></Link></li>
                            <li className="menu"><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                    <div className="hamburger-menu">
                        <a href="#" className="openModalBtn">
                            <span className="bar one"></span>
                            <span className="bar two"></span>
                            <span className="bar three"></span>
                        </a>
                    </div>

                    <div className="grid-item subnav">
                        <ul className="sub-elements">
                            <li><Link href="/resources"><a>Resources</a></Link></li>
                            <li><Link href="/landmarks"><a>Landmarks</a></Link></li>
                            <li><Link href="/timeline"><a>Timeline</a></Link></li>
                        </ul>
                    </div>


                    <style jsx>{`

.nav {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
     display: -ms-grid;
    display: grid;    
    grid-area: nav;
    -ms-grid-columns: 1fr 250px 5fr;
    grid-template-columns: 1fr 250px 5fr;
    -ms-grid-rows: 2fr 1fr;
    grid-template-rows: 2fr 1fr;
        grid-template-areas: 
    ". nav-logo main-nav"
    "sub-nav sub-nav sub-nav";
    background-color: #00283C;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
}
.logo {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: nav-logo;
    -ms-grid-row:1;
    -ms-grid-row-span:2;
    grid-row:1/3;
}
a .logo-img {
    position: relative;
    max-height: 134px;
    display: block;
}
.elements {
    -ms-grid-row:1;
    -ms-grid-column:3;
    display:-ms-grid;
    display:grid;
    grid-area:main-nav;
    text-transform: uppercase;
    -ms-grid-columns: 5% 1fr;
    grid-template-columns: 5% 1fr;
        grid-template-areas:
    ". mnav-ul";
    font-size: 24px;
    margin-top: auto;
    margin-bottom: auto;
}
.element-children{
   -ms-grid-row: 1;
   -ms-grid-column: 2;
   grid-area: mnav-ul;
   margin-top: 24px!important;
}

.hamburger-menu {
    display: none;
    grid-area: ham-menu;
}
.subnav {
    -ms-grid-row:2;
    -ms-grid-column:1;
    -ms-grid-column-span:3;
    display: -ms-grid;
    display: grid;
    grid-area:sub-nav;
    text-transform: uppercase;
    -ms-grid-columns: 1fr 250px 7% 5fr;
    grid-template-columns: 1fr 250px 7% 5fr;
        grid-template-areas: 
    ". . . snav-ul";
    background-color: black;
    border-top: 3px solid #9F895D;
}
.sub-elements {
    -ms-grid-row:1;
    -ms-grid-column:4;
    grid-area:snav-ul;
    margin-top: auto;
    margin-bottom: auto;
}

.sub-elements li {
    padding-right: 30px;
}
a {
    text-decoration: none;
}
ul {
    list-style-type: none;

}



ul li {
    display: inline;

}

ul.modal-children li {
    display: inline;
    height:45px;

}



ul li a {
    color: #fff;


}
.menu{
    padding-right: 30px;
}
.card {
    width: 100%;
}


  .hamburger-menu {
    color: white;  
    display: none;
    -ms-grid-column-align: end;
        justify-self: end;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
}

.menu_toggle {
    border-radius: 3px;
    display: block;     
    margin-bottom: 0;
}

.openModalBtn{
    display: block;
}



@media screen and (max-width: 1340px){
    .elements .menu , .subnav ul li{
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 1230px){

    .menu{
        padding-right: 25px;
    }
    .sub-elements li{
        padding-right: 25px;
    }
}
@media screen and (max-width: 1175px){

    .menu{
        padding-right: 15px;
    }
    .sub-elements li{
        padding-right: 15px;
    }
}
@media screen and (max-width: 1134px){

    .menu{
        padding-right: 10px;
    }
    .sub-elements li{
        padding-right: 10px;
    }
    .elements .menu , .subnav ul li{
        font-size: 1rem;
    }

}




@media screen and (max-width: 1050px) {

    a .logo-img {
        width: 100%;
        display: block;
    }

    .elements ul .menu {
        margin-top: auto;
        margin-bottom: auto;
    }

    .sub-elements{
        margin-top:6px;
    }

    .sub-elements li{
        -ms-grid-column-align: center;
            justify-self: center;
    }

    .elements .menu , .subnav ul li{

        font-size: .9rem;
    }


}

@media screen and (max-width: 950px){


    .nav {
        -ms-grid-columns: 1fr 215px 5fr;
        grid-template-columns: 1fr 215px 5fr;
    }

    .elements{
        -ms-grid-columns: 0px 1fr;
        grid-template-columns: 0px 1fr;
    }

    .subnav {
        -ms-grid-columns: 1fr 215px 2% 5fr;
        grid-template-columns: 1fr 215px 2% 5fr;
    }


}


/* was prev at 810px */
@media screen and (max-width: 860px) {
    

    .nav {
        -ms-grid-columns: 180px 1fr;
        grid-template-columns: 180px 1fr;
            grid-template-areas: 
        "nav-logo ham-menu"
        "sub-nav sub-nav"
        ;

    }

    .logo {

         -ms-grid-row: 1;

         -ms-grid-column: 2;

         grid-area: nav-logo;
         -ms-grid-row:1;
         -ms-grid-row-span:1;
         grid-row:1/2;
     }



    .elements {
        display: none;
    }

    
    .subnav {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
            grid-template-areas: 
        " snav-ul";

    }

    .sub-elements {
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:flex;
        -ms-flex-pack: distribute;
            justify-content: space-around;
        -webkit-box-pack: space-evenly;
           -moz-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;

    }

    .menu a , .subnav ul li{
        padding: 8px !important;
        font-size: 1rem;
    }

    .sub-elements li{
        padding-right: 8px;
    }

    .hamburger-menu{
        display:block;
        grid-area: ham-menu;
    }
    

    .logo {
        -ms-grid-row: 1;
        -ms-grid-column: 1;

    }
    

    .hamburger-menu {
        -ms-grid-row: 1;
        -ms-grid-column: 2;

    }
    

    .subnav {
        -ms-grid-row:2;
        -ms-grid-column:1;
        -ms-grid-column-span:2;

    }

    
    .sub-elements {
        -ms-grid-row:1;
        -ms-grid-column:1;

    }


}
@media screen and (max-width: 860px){
    

    .logo {
        -ms-grid-row: 1;
        -ms-grid-column: 1;

    }
    

    .hamburger-menu {
        -ms-grid-row: 1;
        -ms-grid-column: 2;

    }
}
                
                    `}</style>

                </section>

        );
    }
}

export default Navigation;


