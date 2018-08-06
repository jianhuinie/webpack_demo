import React, { PropTypes } from 'react';
// import { Route } from 'react-router';
// 所有route在这里加
// import demoRoutes from './demo/routes';
import { Switch, Route } from 'react-router-dom';
import DemoComponent from './demo/index';
class HomePage extends React.Component {
    render() {
        return (
            <h3>
                this is home page ～～～～
            </h3>
        );
    }
}

class App extends React.Component {
    // static propTypes = {
    //     children: PropTypes.node
    // };
    // static defaultProps = {
    //     children: ''
    // };
    render() {
        return (
            <div className="main">
                <h1>webpack demo</h1>
                <main>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/demo" exact component={DemoComponent} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;