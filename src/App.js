import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//load components
import NavBar from './components/NavBar.js';
import Exerciseview from './views/Exerciseview.js';
import Diaryview from './views/Diaryview.js';
import Reportview from './views/Reportview.js';
import Profileview from './views/Profileview.js';
import Dietview from './views/Dietview.js';
import SubMenu from './components/SubMenu.js';

const App = () =>{
    return (
        <div>
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={Profileview}/>
                        <Route path='/record' exact component={Exerciseview}/>
                        <Route path='/record/diet' exact component={Dietview}/>
                        <Route path='/record/exercise' exact component={Exerciseview}/>
                        <Route path='/diary' exact component={Diaryview}/>
                        <Route path='/report' exact component={Reportview}/>
                        <Route path='/profile' exact component={Profileview}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;