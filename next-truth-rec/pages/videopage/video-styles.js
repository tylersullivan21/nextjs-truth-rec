import css from 'styled-jsx/css'


export default css `
.container{
display:grid;
grid-template-areas:
"video"
"about-video related"
}

.video{
    grid-area: video;
    background-color: grey;
}
.about-video{
    grid-area: about-video;
    background-color:orange;
}

.related{
    grid-area: related;
    background-color: green;
}
`