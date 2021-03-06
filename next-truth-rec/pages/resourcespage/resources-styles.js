import css from 'styled-jsx/css'


export default css `
h1 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
.grid-container{
    -ms-grid-rows: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
}
.title{
    font-size: 1.5rem;
    align-self:center;
    margin-bottom: 2%;
    text-align:center;
}
.resources-main{

    grid-area:main-section;
    margin: 40px 0;
}

.resources-content{
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    margin-top:20px;
margin-bottom:80px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
       -moz-box-orient: vertical;
       -moz-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.image-grid{
    display: -ms-grid;
    display: grid;
   
    -ms-grid-columns: 45% 5% 45%;
    grid-template-columns: 45% 45%;
    -ms-grid-rows: 45% 5% 45%;
    grid-template-rows: 50% 50%;
    gap: 8%;
        grid-template-areas: "res1 res2" "res3 res4";

}
.image-grid > *, .image-grid a {
    display: block;
    position: relative;
}


.media{
    -ms-grid-row: 1;
    -ms-grid-column: 1;

    grid-area: res1;
}
.documents{
     -ms-grid-row: 1;
     -ms-grid-column: 3;

     grid-area: res2;
}
.landmarks{
      -ms-grid-row: 3;
      -ms-grid-column: 1;

      grid-area: res3;
}
.links{
    -ms-grid-row: 3;
    -ms-grid-column: 3;

    grid-area: res4;
}

.resource{
    width: 100%;
}

/* code for the overlays start here*/
.span-text{
    position: absolute;
    height: 100%;  
    width: 100%;   
    top: -14px;   
    left: 0;
}
.text{
   position: absolute;
   top:50%;
   left:50%;
   -webkit-transform: translateY(-50%) translateX(-50%);
           transform: translateY(-50%) translateX(-50%);
   
}
.text p{
    color: white;
    text-decoration: underline;
    font-size: 35px;
}
.description-text{
    position: absolute;
    height: 100%;  
    width: 100%;   
    top: -10px;   
    left: 0;
}

.text-2{
   position: absolute;
   top:67%;
   left:50%;
   -webkit-transform: translateY(-50%) translateX(-50%);
           transform: translateY(-50%) translateX(-50%);
   
}

.text-2 p{
    color: white;
    font-size: 18px;
    white-space: nowrap;
    -webkit-margin-before: 1em;
            margin-block-start: 1em;
-webkit-margin-after: 0em;
        margin-block-end: 0em;
-webkit-margin-start: 0px;
   -moz-margin-start: 0px;
        margin-inline-start: 0px;
-webkit-margin-end: 0em;
   -moz-margin-end: 0em;
        margin-inline-end: 0em;
}
p{
    display: block;
    -webkit-margin-before: 0em;
            margin-block-start: 0em;
    -webkit-margin-after: 0em;
            margin-block-end: 0em;
    -webkit-margin-start: 0px;
       -moz-margin-start: 0px;
            margin-inline-start: 0px;
    -webkit-margin-end: 0px;
       -moz-margin-end: 0px;
            margin-inline-end: 0px;
}

/*
@media screen and (max-width:1040px){
    .image-grid {
        
        grid-template-rows: repeat(1, 1fr);
        margin-top: 10%;
        grid-gap: 0%;
        justify-content: center;
        -ms-grid-column-align:center;
        -ms-grid-rows: repeat(1, 1fr);
    }
    .media{
        display: grid;
        grid-row: 1/2;
        margin: 0;
    }
    .documents{
        display: grid;
        grid-row: 2/3;
        margin:0;
    }
    .landmarks{
        display: grid;
        grid-row: 3/4;
        margin: 0;
    }
    .links{
        display: grid;
        grid-row: 4/5;
        margin:0;
    }
    .text-2{
        display: block;
        
     }
     
     .text-2 p{
         font-size: 20px;
    
     }
     .description-text{
         font-size: 10px;
     }
     .text p {
         font-size: 23px;
     }
     .main {
        grid-template-columns: 10% 1fr 10%;
        margin-top: 8px;
        margin-bottom: 29px;
        -ms-grid-column: 10% 1fr 10%;
     }
     h1{
        font-size: 50px;
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-end: 0;
        margin-inline-start: 0px;
        text-align: center;
     }


     }

     */
     @media screen and (max-width:980px){
        .image-grid {
            -ms-grid-rows: 1fr 0% 1fr 0% 1fr 0% 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            -ms-grid-columns: 15% 0% 1fr 0% 15%;
            grid-template-columns: 15% 1fr 15%;
                grid-template-areas: ". res1 ." ". res2 ." ". res3 ." ". res4 .";
            margin-top: 10%;
            grid-gap: 10px;
            -webkit-box-pack: center;
               -moz-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
        }
        .media{

            margin: 0;
        }
        .documents{

            margin:0;
        }
        .landmarks{
  
            margin: 0;
        }
        .links{
 
            margin:0;
        }
        .text-2{
            display: none;
            
         }
         
         .text-2 p{
             font-size: 20px;
        
         }
         .description-text{
             font-size: 10px;
         }
         .text p {
             font-size: 23px;
         }

         h1.title-resources{
            font-size: 50px;
            display: block;
            -webkit-margin-before: 0;
                    margin-block-start: 0;
            -webkit-margin-after: 0;
                    margin-block-end: 0;
            -webkit-margin-end: 0;
               -moz-margin-end: 0;
                    margin-inline-end: 0;
            -webkit-margin-start: 0px;
               -moz-margin-start: 0px;
                    margin-inline-start: 0px;
            text-align: center;
         }
        .media {
        -ms-grid-row: 1;
        -ms-grid-column: 3;

        }
        .documents {
        -ms-grid-row: 3;
        -ms-grid-column: 3;

        }
        .landmarks {
        -ms-grid-row: 5;
        -ms-grid-column: 3;

        }
        .links {
        -ms-grid-row: 7;
        -ms-grid-column: 3;

        }
    
    
         }

         /*
     @media screen and (max-width:480px){
        .image-grid {
            
            grid-template-rows: repeat(1, 1fr);
            margin-top: 10%;
            grid-gap: 2%;
            justify-content: center;
            -ms-grid-row: repeat(1, 1fr);
            -ms-grid-column-align:center;
        }
        .media{
            display: grid;
            grid-row: 1/2;
            margin: 0;
        }
        .documents{
            display: grid;
            grid-row: 2/3;
            margin:0;
        }
        .landmarks{
            display: grid;
            grid-row: 3/4;
            margin: 0;
        }
        .links{
            display: grid;
            grid-row: 4/5;
            margin:0;
        }
        .text-2{
            display: none;
            
         }
         
         .text-2 p{
             font-size: 10px;
        
         }
         .description-text{
             font-size: 10px;
         }
         .text p {
             font-size: 23px;
         }
         .main {
            grid-template-columns: 10% 1fr 10%;
            margin-top: 8px;
            margin-bottom: 29px;
            -ms-grid-columns: 10% 1fr 10%;
         }
         h1{
            font-size: 27px;
            display: block;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-end: 0;
            margin-inline-start: 0px;
            text-align: center;
    
    
         }
     }*/

     
@media screen and (max-width: 860px) {
  
    .resources-main{
        -ms-grid-columns: 10% 1fr 10%;
        grid-template-columns: 10% 1fr 10%;
     
    }
}
`