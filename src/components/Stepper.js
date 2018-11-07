import React, { Component } from 'react';
import './Stepper.css';

class Stepper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageLimit: 5,
            localPages: [1, 2, 3, 4, 5],
        };
        // this.getActivePages = this.getActivePages.bind(this);
    }

    componentDidMount() {
        // const newPages = this.getActivePages();
        // this.setState({localPages: newPages});
    }

    componentDidUpdate() {
        if(this.props.activePage >= this.state.pageLimit){
            setTimeout((e) => { this.props.switchActivePage(1, e)}, 2000);
        }
    }

    // getActivePages() {
    //     const pageIndex = this.props.activePage;
    //     //fancy way to make sure the paginator has the correct pages every time, based on index of activePage;
    //     const newPages = [...Array(this.state.pageLimit).keys()].map(i => i + pageIndex);
    //     return newPages;
    // }

    render() {
        const listItems = this.state.localPages.map((page, index) =>
            <li key={index} className={(this.props.activePage === page) ? "Active" : ""}
                onClick={(e) => this.props.switchActivePage(page, e)}>
                {page}
            </li>
        );
        return(
            <div className="Stepper">
                <ul className="Switcher">
                    {listItems}
                    <li className={(this.props.activePage >= this.state.localPages[this.state.localPages.length -1]) ? "Disabled" : ""}
                        onClick={(e) => this.props.switchActivePage(this.props.activePage+1, e)}>
                        Next
                    </li>
                </ul>
            </div>
        )
    }
}
export default Stepper;