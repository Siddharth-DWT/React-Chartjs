import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TestRouting from './Routing/ReactRoute'
import App from './App';
import WebApp from './Component/Main'
//import registerServiceWorker from './registerServiceWorker';
class Home extends Component {
    render(){
        return(
            <div><WebApp/></div>
        )
    }
}

ReactDOM.render(<TestRouting />, document.getElementById('root'));
/*registerServiceWorker();*/
