import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//load components
import NavBar from './components/NavBar.js';
import Recordview from './views/Recordview.js';
import Diaryview from './views/Diaryview.js';
import Reportview from './views/Recordview.js';
import Profileview from './views/Profileview.js';

const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                </div>
                <div>
                    <Route path='/' exact component={Profileview}/>
                    <Route path='/record' exact component={Recordview}/>
                    <Route path='/diary' exact component={Diaryview}/>
                    <Route path='/report' exact component={Reportview}/>
                    <Route path='/profile' exact component={Profileview}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;