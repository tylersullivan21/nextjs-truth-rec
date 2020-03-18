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
                    <a class="on" href="#">
                        <span class="bar one"></span>
                        <span class="bar two"></span>
                        <span class="bar three"></span>
                    </a> 
                </div>
                <ul class="modal-children">
                    <li class="menu1"> <Link href="/about"><a>About</a></Link></li>
                    <li class="menu2"><Link href="/resources"><a>Resources</a></Link></li>
                    <li class="menu3"><Link href="/reparations"><a>Reparations</a></Link></li>
                    <li class="menu4"><Link href="/events"><a>Events</a></Link></li>
                    <li class="menu5"><Link href="/contact"><a>Contact</a></Link></li>
                </ul> 
            </div>

        );
    }
}

export default Modal;

