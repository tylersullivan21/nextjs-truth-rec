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
/************** MAIN CONTENT STYLES ***************/
h3{
    font-size: 24px;
}
.main-about{
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 25% 1fr 25%;
    grid-template-columns: 25% 1fr 25%;
        grid-template-areas: ". title ." ". about-content .";
        margin-top:50px;
}

.title-about{
    -ms-grid-row:1;
    -ms-grid-column:2;
    grid-area:title;
}

.about-content{
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: about-content;
}

.motions{
line-height: 2em;
}

.motions li {
    margin: 30px 0;
}

ol {
    margin: 0 0 1.5em;
    padding: 0;
    counter-reset: item;
  }
  
  ol > li {
    margin: 0;
    padding: 0 0 0 2em;
    text-indent: -2em;
    list-style-type: none;
    counter-increment: item;
  }
  
  ol > li:before {
    display: inline-block;
    width: 1em;
    padding-right: 0.5em;
    font-weight: bold;
    text-align: right;
    content: counter(item) ".";
  }
 ul.a {
      list-style-type: none;
  }


@media screen and (max-width: 1024px) {
  
    .main-about{
        -ms-grid-columns: 10% 1fr 10%;
        grid-template-columns: 10% 1fr 10%;
    }
}

/* CODE FOR MAIN CONTENT AREA STARTS HERE

#main-section{

    display:grid;
    grid-template-columns: 22% 1fr 22%;


}

#main-content{
    grid-column: 2/3;
    
}

*/




`