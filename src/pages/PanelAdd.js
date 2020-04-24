import React, { Component } from 'react';

class PanelAdd extends Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {title, image, rating} = this.state;
        this.props.onAdd({
            title,
            image,
            rating,
        });

        this.props.onCancel();
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.name === 'rating' ? parseInt(e.target.value) : e.target.value
        });
    }

    render(){
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Título del libro</label><br />
                            <input onChange={this.handleChange} type="text" name="title" className="input"  />
                        </p>

                        <p>
                            <label>Nombre de imagen</label><br />
                            <input onChange={this.handleChange} type="text" name="image" className="input"  />
                        </p>

                        <p>
                            <label>Calificación</label><br />
                            <select name="rating" onChange={this.handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default PanelAdd;