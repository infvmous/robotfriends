import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from './SearchBox';


 class App extends Component { 
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    } 

    render () {

        const  filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    
        return (
        <div className="tc ml5">
        <h1>RoboBuds</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
        </div>
    )
}
}



export default App