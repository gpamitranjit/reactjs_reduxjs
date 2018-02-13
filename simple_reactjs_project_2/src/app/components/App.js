import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        var i =1;
        return (
            <div>
                Name: {this.props.name} <br/>
                myarray: {this.props.myarray.map((name, i) => name + ", ")}<br/>
                myfunc: {this.props.myfunc()}<br/>
            </div>
        );
    }

}


App.defaultProps = {
    name: "Amit",
    myarray: ["sonu", "ranjit"],
    myfunc: function(e) {
        return this.name;
    }
}

App.propTypes = {
    name: PropTypes.string,
    myarray:  PropTypes.array.isRequired,
    myfunc: PropTypes.func
};

export default App;