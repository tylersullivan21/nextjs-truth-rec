//import React from 'react';
//import "./index.css";

import Link from "next/link";

class Modal extends React.Component{

    componentDidMount() {

        var toggle = document.getElementsByClassName('openModalBtn')[0];
        var modal = document.getElementById('modal');
        function openModal() {
           
            modal.classList.toggle("modalVisible");
                     
        }
        toggle.onclick = openModal;
        var closeModalBtn = document.getElementById('closeModalBtn');
        function closeModal() {

            modal.classList.toggle("modalVisible");
        }
        closeModalBtn.onclick = closeModal;
      }


    render(){

        return(
            <div id="modal">
                <div id="closeModalBtn">         
                    <a className="on" href="#">
                        <span className="bar one"></span>
                        <span className="bar two"></span>
                        <span className="bar three"></span>
                    </a> 
                </div>
                <ul className="modal-children">
                    <li className="menu1"> <Link href="/about"><a>About</a></Link></li>
                    <li className="menu2"><Link href="/resources"><a>Resources</a></Link></li>
                    <li className="menu3"><Link href="/reparations"><a>Reparations</a></Link></li>
                    <li className="menu4"><Link href="/events"><a>Events</a></Link></li>
                    <li className="menu5"><Link href="/contact"><a>Contact</a></Link></li>
                </ul> 
                <style jsx>{`

ul.modal-children{
    padding-left:120px;
}

@media screen and (max-width: 400px){
    ul.modal-children{
        padding-left:60px;
    }
}

ul.modal-children li a{
    border-bottom: 1px solid grey;
}

@-webkit-keyframes myModal {
    from{opacity: 0}
    to{opacity:1}
   
}

@keyframes myModal {
    from{opacity: 0}
    to{opacity:1}
   
}
#modal{
    background-color:#00283C;
    display: none;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: 10% 1fr 0.5fr;
    grid-template-rows: 10% 1fr 0.5fr; 
        grid-template-areas: 
    "close-modal"
    "nav-list"
    ".";

    position: fixed;
    top: 0;
    left:0;
    z-index:99999999;
    width: 100%;
    height: 100%;
    -webkit-animation-name: myModal;
            animation-name: myModal;
    -webkit-animation-duration: .5s;
            animation-duration: .5s;

}   

#modal.modalVisible{
    display: -ms-grid;
    display: grid;
}

.modal-children{
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    grid-area: nav-list;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
       -moz-box-orient: vertical;
       -moz-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    justify-items: left;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    font-size: 35px;
    list-style-type: none;

}
#closeModalBtn{
    -ms-grid-row:1;
    -ms-grid-column:1;
    color: white;
    -ms-grid-column-align: end;
        justify-self: end;
    -ms-grid-row-align: center;
        align-self: center;
    grid-area:close-modal;
}
 .bar {
    display: block;
    margin-right: 20px;
    width: 25px;
    margin-bottom: 5px;
    height: 4px;
    background-color: #fff;
    border-radius: 1px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
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

#closeModalBtn{
    -ms-grid-column-align: end;
        justify-self: end;
}

.on .one {
    -webkit-transform: rotate(45deg) translate(6px, 6px);
            transform: rotate(45deg) translate(6px, 6px);
}

.on .two {
    opacity: 0;
}

.on .three {
    -webkit-transform: rotate(-45deg) translate(6px, -6px);
            transform: rotate(-45deg) translate(6px, -6px);
}



                `}</style>
            </div>

        );
    }
}

export default Modal;

