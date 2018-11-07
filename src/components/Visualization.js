import React, { Component } from 'react';
import data from '../JSON/data';
import * as d3 from "d3";
import "./Visualizations.css"

class Visualization extends Component {
    constructor (props)  {
        super(props);
        this.state = {
            jsonCircles: [
                { "num": 1, "x_axis": 130, "y_axis": 100, "radius": 20, "color" : "green", "active": false },
                { "num": 2, "x_axis": 170, "y_axis": 170, "radius": 20, "color" : "purple", "active": false },
                { "num": 3, "x_axis": 210, "y_axis": 200, "radius": 20, "color" : "red", "active": false }
            ]
        }
        // this.getActiveNodes = this.getActiveNodes.bind(this);
    }

    // getActiveNodes() {
    //     this.state.jsonCircles.forEach((e, index) => {
    //         if(this.props.activePage % e.num === 0) {
    //             this.setState(prevState => ({
    //                 jsonCircles: prevState.jsonCircles.map(
    //                     obj => (obj.num === e.num ? Object.assign(obj, { "active": true }) : obj)
    //                 )
    //             }));
    //         }
    //     })
    // }

    draw(prop) {
        const elem = d3.select('.Visualization').append('svg')
            .attr('height', 400)
            .attr('width', 400)
            .attr('id', 'svg-viz');
        const bubbles = [...Array(prop).keys()].map(i => i + 1);
        console.log(bubbles);
        let min = bubbles[0];
        let max = bubbles[0];
        console.log(`min: ${min}, max: ${max}`);
        for (let i = 1 ; i < bubbles.length; i ++){
            if (bubbles[i] > max) {
                max = bubbles[i]
            }
            if(bubbles[i] < min) {
                min = bubbles[i]
            }
        }
        const simulation = d3.forceSimulation()
            .force('x', d3.forceX(400/3).strength(0.05))
            .force('y', d3.forceY(400/3).strength(0.05))
            .force('charge', d3.forceManyBody().strength(-1300));

        const circles = elem.selectAll('circle')
            .data(this.state.jsonCircles)
            .enter()
            .append('circle')
            .attr('cx', d => d.x_axis)
            .attr('xy', d => d.y_axis)
            .attr('r', d => d.active === true ? 50 : d.radius)
            .style('fill', (d) => d.color ? d.color : 'purple');

        simulation.nodes(prop)
            .on('tick', ticked)

        function ticked() {
            circles
                .attr('cx', d => d.x_axis)
                .attr('cy', d => d.y_axis);
        }
    }

    componentDidMount() {
        // this.updateActiveNodes();
        this.draw(this.props.activePage);

    }
    // componentDidUpdate() {
    //     this.updateActiveNodes();
    //     this.draw(this.props.activePage);
    // }

    render() {

        return (
            <div className="Visualization">
            </div>
        )
    }
}
export default Visualization;