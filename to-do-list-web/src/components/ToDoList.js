import React, { Component } from 'react';

class ToDoList extends Component {
    state = {
        value: '',
        items: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const currentItem = this.state.value;
        const newItem = currentItem !== '' && !this.state.items.includes(currentItem);

        if (newItem) {
            this.setState({
                value: '',
                items: [...this.state.items, this.state.value]
            })
        }

    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleItemClick = (event) => {
        const removedItem = event.target.value;
        const items = this.state.items.filter(item => {
            return item !== removedItem;
        })

        this.setState({
            items: items
        })

    }

    handleClearAllClick = () => {
        this.setState({
            items: []
        })
    }

    renderClearAll = () => {
        return (
            this.state.items.length > 0
                ?
                (
                    <button onClick={this.handleClearAllClick}>Clear All?</button>
                )
                : ''
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What do you need to do today?
                    <input type="text" value={this.state.value} onChange={this.handleInputChange}></input>
                    </label>
                    <input type='submit' value='Add'></input>
                </form>

                <div style={{ textAlign: 'left' }}>
                    Current items:  {this.renderClearAll()}
                    <ul>
                        {this.state.items.map(item => {
                            return (
                                <div style={{ padding: '10px' }} key={item}>
                                    <button style={{ display: 'inline', marginRight: '20px' }} value={item} onClick={this.handleItemClick}>X</button>
                                    <li style={{ display: 'inline' }}>{item}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}

export default ToDoList;