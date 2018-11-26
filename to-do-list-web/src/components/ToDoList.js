import React, { Component } from 'react';

class ToDoList extends Component {

    submitItem = () => {
        console.log("CLICKED")
        const opts = {
            "first": "testing",
            "second": "also"
        }

        console.log({opts});

        fetch('http://localhost:8080/test/', {
            method: 'post',
            body: opts
        })
    }

    render() {
        return (
            <button style={{ height: 50, width: 100 }} onClick={this.submitItem}>
                INPUT FIELDS
            </button>
        )
    }
}

export default ToDoList;