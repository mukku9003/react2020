import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

class Demo extends Component {
    render(){
        return <div className="main_divstyle"> <h1> Hello {this.props.name} </h1>
        <p>Welcome To My Youtube</p>
    </div>
    }
}

export default Demo;