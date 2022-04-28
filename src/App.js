import React from 'react';
import NavBar from './components/NavBar.js';
import Recordview from './views/Recordview.js';
import Diaryview from './views/Diaryview.js';
import Profileview from './views/Profileview.js';

class App extends React.Component{

    render(){
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    {/* <Diaryview/> */}
                    <Recordview/>
                    {/* <Profileview/> */}
                </div>
            </div>
        );
    }
}

export default App;