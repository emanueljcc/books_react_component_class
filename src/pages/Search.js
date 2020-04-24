import React, { Component } from 'react';

class Search extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();

        this.props.onSearch(query);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeEvent} />
            </div>
        );
    }
}

export default Search;