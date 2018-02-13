import React from 'react';
 

class App extends React.Component {
    render() {
        var i =1;
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }

}


class Header extends React.Component {
    
    render() {
        var myStyle = {
            fontSize: 50,
            color: 'green'
        }
        return (
            <h1 style = {myStyle}>Hi, This is some header!</h1>
        );
    }
}

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id": "1",
                    "name": "Amit",
                    "age": "27"
                },
                {
                    "id": "2",
                    "name": "Ranjit",
                    "age": "31"
                },
                {
                    "id": "3",
                    "name": "Smita",
                    "age": "29"
                }
            ]
        }
    }




    render() {
        return (
            <table>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow person={person} key = {i} />)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.person.id} </td>
                <td> {this.props.person.name}</td>
                <td> {this.props.person.age}</td>
            </tr>
        );
    }
}

export default App;