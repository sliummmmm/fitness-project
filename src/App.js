import React from 'react';
import Recordview from './views/Recordview.js';
import Diaryview from './views/Diaryview.js';
import Profileview from './views/Profileview.js';

class App extends React.Component{

    render(){
        return (
            <div>
                <div className="ui four item menu">
                    <a className="item">Record</a>
                    <a className="item">Report</a>
                    <a className="item">Diary</a>
                    <a className="item active">Profile</a>
                </div>
                <div>
                    <Diaryview/>
                    {/* <Recordview/> */}
                </div>
            </div>
        );
    }
}

export default App;