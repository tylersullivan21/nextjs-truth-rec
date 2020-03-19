import Navigation from '../Navigation'
import Modal from '../Modal'
import Footer from '../Footer'
import layoutStyles from './layout-styles'


class Layout extends React.Component {

    render(){
        return (
            <div className="grid-container">
            <Navigation/>
            <Modal/>
            {this.props.children}
            <Footer/>
            <style jsx>
                {layoutStyles}
            </style>
            </div>

        );
    }
} 

export default Layout;