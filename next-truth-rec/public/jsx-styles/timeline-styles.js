import css from 'styled-jsx/css'

export default css `
/***************************/
/*THESE ARE BASE STYLES FOR ALL THE SITE*/
/***************************/

.cd-container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    background: #fff;
    padding: 0 10%;
    border-radius: 2px;
  }
  .cd-container::after {
    content: '';
    display: table;
    clear: both;
  }
  
  /* -------------------------------- 
  
  Main components 
  
  -------------------------------- */
  .main {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% 1fr 10%;
    grid-template-columns: 10% 1fr 10%;
        grid-template-areas: ". title . " ". timeline ."  ;
    margin-top: 40px !important;
  }
  h1.title {
    -ms-grid-row:1;
    -ms-grid-column:2;
    margin: auto;
    grid-area:title;
  }
  #cd-timeline {
    -ms-grid-row:2;
    -ms-grid-column:2;
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
    grid-area:timeline;
  }
  #cd-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: #00283C;
  }
  @media only screen and (min-width: 1170px) {
    #cd-timeline {
      margin-top: 3em;
      margin-bottom: 3em;
    }
    #cd-timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }
  
  .cd-timeline-block {
    position: relative;
    margin: 2em 0;
  }
  .cd-timeline-block:after {
    content: "";
    display: table;
    clear: both;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1170px) {
    .cd-timeline-block {
      margin: 4em 0;
    }
    .cd-timeline-block:first-child {
      margin-top: 0;
    }
    .cd-timeline-block:last-child {
      margin-bottom: 0;
    }
  }
  .cd-timeline-block.cd-year {
      display: block;
      position: relative;
      height: 45px;
      width: 100%;
  }
  .cd-year .cd-year-content {
    position: absolute;
    left: 50px;
    font-size: 1.5em;
    font-weight: bold;
  }
  .cd-timeline-img {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0 4px #00283C, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
            box-shadow: 0 0 0 4px #00283C, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    background: #9F895D
  }
  .cd-timeline-block.cd-year .cd-timeline-img {
      background: #00283C;
  }
  @media only screen and (min-width: 1170px) {
    .cd-timeline-img {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
      margin-top: 15px;
      /* Force Hardware Acceleration in WebKit */
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
    }
  }
  
  .cd-timeline-content {
    position: relative;
    margin-left: 60px;
    margin-right: 30px;
    background: #00283C;
    border-radius: 2px;
    padding: 1em;
  }
    .timeline-content-info {
      background: #00283C;
      padding: 5px 10px;
      color: rgba(255,255,255,0.7);
      font-size: 12px;
      -webkit-box-shadow:  inset 0 2px 0 rgba(0, 0, 0, 0.08);
              box-shadow:  inset 0 2px 0 rgba(0, 0, 0, 0.08);
      border-radius: 2px;
    }
      i {
        margin-right: 5px;
      }
      .timeline-content-info-title, .timeline-content-info-date {  
        width: calc(50% - 2px);
        display: inline-block;
      }
      @media (max-width: 500px) {
        .timeline-content-info-title, .timeline-content-info-date {  
          display: block;
          width:100%;
        } 
      }
    
    .content-skills {
      font-size: 12px;
      padding:0;
      margin-bottom: 0;
      display:-webkit-box;
      display:-moz-box;
      display:-ms-flexbox;
      display:flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-pack: center;
         -moz-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }
      li {
        background: #40484D;
        border-radius: 2px;
        display: inline-block;
        padding: 2px 10px;
        color: rgba(90,90,90,1);
        margin: 3px 2px;
        text-align: center;
        -webkit-box-flex: 1;
           -moz-box-flex: 1;
            -ms-flex-positive: 1;
                flex-grow: 1;
      }
    
  
  .cd-timeline-content:after {
    content: "";
    display: table;
    clear: both;
  }
  .cd-timeline-content h2 {
    color: rgba(255,255,255,.9);
    margin-top:0;
    margin-bottom: 5px;
  }
  .cd-timeline-content p, .cd-timeline-content .cd-date {
    color: rgba(255,255,255,.7);
    font-size: 13px;
    font-size: 0.8125rem;
  }
  .cd-timeline-content .cd-date {
    display: inline-block;
  }
  .cd-timeline-content p {
    margin: .5em 0;
    line-height: 1.6;
  }
  
  .cd-timeline-content::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #00283C;
  }
  
  @media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }
    .cd-timeline-content p {
      font-size: 16px;
      font-size: 1rem;
    }
    .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
      font-size: 14px;
      font-size: 0.875rem;
    }
  }
  @media only screen and (min-width: 1170px) {
    .cd-timeline-content {
      color: white;
      margin-left: 0;
      padding: .8em;
      width: 24%;
      margin: 0 17%
    }
    .cd-timeline-content::before {
      top: 30px;
      left: 100%;
      border-color: transparent;
      border-left-color: #00283C;
    }
    .cd-timeline-content .cd-date {
      color: rgba(90,90,90,1);
      position: absolute;
      width: 100%;
      left: 150%;
      top: 26px;
      font-size: 16px;
      font-size: 1rem;
      font-weight: bold;
    }
    .cd-timeline-block.cd-year {
      height:auto;
    }
    .cd-timeline-block.cd-year .cd-timeline-img {
      position: relative;
      width: 100px;
      height: 100px;
      margin: auto;
      left: auto;
      border: 5px #fff solid;
      background: #9F895D;
    }
    .cd-year-content {
      color: white;
      height: auto;
      width: 100%;
      font-size: 16px;
      font-size: 2rem;
      font-weight: bold;
      position: relative;
      margin: auto;
      display: block;
      text-align: center;
      line-height: 100px;
    }
    .cd-year .cd-year-content {
      font-size: 2rem;
      left: auto;
  }
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
      top: 30px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #00283C;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
      left: auto;
      right: 150%;
      text-align: right;
    }
  }
`