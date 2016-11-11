var React = require('react');
var ReactDOM = require('react-dom');
var fetchQuestion = require("../action/actions").fetchQuestion;
var connect = require('react-redux').connect;

var French = function(prop) {
    
    if (prop.frenchWord === null) {
        return <div></div>
    }
   
   return (
    <div className="frenchWord">
        {prop.frenchWord}
    </div>
    );
};

var Question = React.createClass({

    render: function(props) {
        return (
            <div id = "french" className = "top-half half-width">
                <h1 id = "french-heading" className ="language">French</h1>
                <French frenchWord={this.props.currentQuestion} />
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        currentQuestion: state.currentQuestion
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuestion: function(accessToken) {
                dispatch(fetchQuestion(accessToken))
    }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Question);