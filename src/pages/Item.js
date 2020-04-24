import React, { Component } from 'react';
import '../Item.css';

class Item extends Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: '',
            stars: []
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: this.props.rating,
            stars: Array(parseInt(this.props.rating)).fill(0)
        })
    }

    onChangeRating = e => {
        const rating = parseInt(e.target.value);
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        const {id, title, image} = this.state;
        this.props.onUpdateRating({
            id,
            title,
            image,
            rating,
        })
    }

    onRemove = (e) => {
        this.props.onRemove(this.props.id);
    }

    render(){
        return (
            <div className="item">
                <div className="image"><img src={'images/' + this.state.image} width="100%" alt={this.state.title} /></div>
                <div className="title">{this.state.title}</div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(star => <img src="images/star.png" width="32" alt={this.state.title} />)
                        }
                    </p>
                    Calificación:
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onRemove}>Eliminar</button>
                </div>
            </div>
        );
    }
}

export default Item;