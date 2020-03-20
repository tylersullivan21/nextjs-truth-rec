import css from 'styled-jsx/css'

export default css `


/*************************************************/
         /*UNIQUE MAIN GRID STYLES START HERE*/
/************************************************/
#events-main{

    display:-ms-grid;

    display:grid;
    -ms-grid-columns: 22% 1fr 22%;
    grid-template-columns: 22% 1fr 22%;
        grid-template-areas: ". content .";
}
@media screen and (max-width:920px){
    #events-main {
        -ms-grid-columns: 12% 1fr 12%;
        grid-template-columns: 12% 1fr 12%;
    }
}

@media screen and (max-width: 780px) {
    #events-main {
        -ms-grid-columns: 12% 1fr 12%;
        grid-template-columns: 12% 1fr 12%;

    }
}

@media screen and (max-width:480px){
    #events-main {
        -ms-grid-columns: 10% 1fr 10%;
        grid-template-columns: 10% 1fr 10%;
    }
}
#main-content{
    -ms-grid-row:1;
    -ms-grid-column:2;
    grid-area:content; 
}

/*************************************************/
         /*UNIQUE MAIN GRID STYLES END HERE*/
/************************************************/



`