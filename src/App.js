import React from 'react';
import NavBar from './components/NavBar.js';
import Recordview from './views/Recordview.js';
import Diaryview from './views/Diaryview.js';
import Reportview from './views/Recordview.js';
import Profileview from './views/Profileview.js';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state={
            pageLoad: 0
        }
    }

    NavAction(){

    }

    render(){
        return (
            <div>
                <div>
                    <NavBar
                        clickAction={this.NavAction}
                    />
                </div>
                <div>
                    {/* <Diaryview/> */}
                    {/* <Recordview/> */}
                    <Profileview/>
                    {/* <Reportview/> */}
                </div>
            </div>
        );
    }
}

export default App;