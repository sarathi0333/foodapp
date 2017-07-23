import React from 'react';
import TopBarContainer from './TopBarContainer.jsx';
import './Wrapper.css';

class Wrapper extends React.Component {

    constructor(props){
        super(props);

        this.state = { height : "700px" };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions(){
        this.setState( { width:window.innerWidth, height:window.innerHeight });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    render() {
        const { height } = this.state;
        return(
            <div className="container" style={{height:`${height}`}}>
                <TopBarContainer />
            </div>
        )
    }
} 
export default Wrapper;