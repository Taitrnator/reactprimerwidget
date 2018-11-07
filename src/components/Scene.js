import React, { Component } from 'react';
import Stepper from './Stepper';
import pageContent from '../JSON/pageContent';
import './Scene.css';
import Visualization from "./Visualization";

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.switchActivePage = this.switchActivePage.bind(this);
    }

    switchActivePage(page) {
        this.setState({activePage: page});
    }
    componentDidMount() {

    }

    render() {
        let contentIndex = this.state.activePage;
        return(
            <div className="Scene">
                <section>
                    <Visualization activePage={this.state.activePage} />
                </section>
                <section>
                <Stepper activePage={this.state.activePage} switchActivePage={this.switchActivePage} />
                <div className="Scene-Content">
                    <h3>{pageContent.scenes[contentIndex].headline}</h3>
                    <p>{pageContent.scenes[contentIndex].text}</p>
                    <small>{pageContent.scenes[contentIndex].subtext}</small>
                </div>
                </section>
            </div>
        )
    }
}

export default Scene;