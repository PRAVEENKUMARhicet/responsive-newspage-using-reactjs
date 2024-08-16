import './menu.css';
import {Component} from "react";

class Menu extends Component {
    state={clicked : false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return (
        <div id="menu">
            <div className="header">
                <div className="logo-section">
                    <img src="house-solid.svg" alt="Home" />
                    <h2>Welcome to WEB NEWS</h2>
                </div>
                <ul id="nav-links" className={this.state.clicked ? "#nav-links active" : "#nav-links"}>
                    <li>Home</li>
                    <li>Topics</li>
                    <li>In-depth</li>
                    <li>General</li>
                </ul>
                <div id="mobile" onClick={this.handleClick}> 
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
            <div className="channel-name">
                <img src="W.png" alt="W Logo" className="channel-logo"/>
                <h2><span className="gold">WEB</span><br/><span>NEWS</span></h2>
                <div className="line">
                    <div class="global">
                        <h3>WN NEWS</h3>
                        <p>Global perspective, Human stories</p>
                    </div>
                    <div className="search-bar-container">
                        <input type="text" placeholder="Search..." className="search-bar"/>
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Menu;
