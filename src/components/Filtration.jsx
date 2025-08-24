import { Component } from "react";
import '../styles/Filtration.css';

export class Filtration extends Component {
    handleChange = (e) => {
        this.props.setFilter(e.target.value);
    }


    render() {
        return (
            <div className="filtration">
                <h2 className="filtration-title">Filtr</h2>
                <input
                    type="text"
                    placeholder="Text"
                    value={this.props.filtr}
                    onChange={this.handleChange}
                    className="filtration-input"
                />
            </div>
        )
    }
}