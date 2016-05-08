/**
 * Created by philiplipman on 1/13/16.
 */

var React = require('react');
var Link = require('react-router').Link;

var MenuItem = React.createClass({
    displayName: 'MenuItem',
    propTypes: {
        onSelect: React.PropTypes.func,
        uid: React.PropTypes.string,
        //active: React.PropTypes.bool,
        classes: React.PropTypes.array,
        url: React.PropTypes.string,
        text: React.PropTypes.string
    },
    handleClick: function (event) {
        //event.preventDefault();
        this.props.onSelect(this.props.uid);
    },
    render: function () {
        return (

            <Link
                to={this.props.url}
                activeClassName="active"
                className={this.props.classes}
                onClick={this.handleClick}>
                {this.props.text}

            </Link>

        );
    }
});

module.exports = MenuItem;