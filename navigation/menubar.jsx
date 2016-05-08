/**
 * Created by philiplipman on 1/13/16.
 */
var React = require('react');
var Link = require('react-router').Link;

var MenuItem = require('./menuitem.jsx');


var MenuBar = React.createClass({
    displayName: 'MenuBar',
    propTypes: {
        items: React.PropTypes.array.isRequired,
        activeMenuItemUid: React.PropTypes.number
    },
    getInitialState: function () {
        return {
            activeMenuItemUid: '1'
        };
    },
    setActiveMenuItem: function (uid) {
        //this.setState({activeMenuItemUid: uid});
    },
    preventDefault: function (event) {
        event.preventDefault();
    },
    render: function () {
        //var currentActiveMenuItemUid = this.state.activeMenuItemUid;
        //console.info(this.state.activeMenuItemUid);

        var menuItems = this.props.items.map(function (menuItem) {

            return (
                <MenuItem
                    //active={currentActiveMenuItemUid === menuItem.uid}
                    key={menuItem.uid}
                    uid={menuItem.uid}
                    text={menuItem.text}
                    url={menuItem.url}
                    classes={menuItem.classes}
                    onSelect={this.setActiveMenuItem}
                />
            );

        }, this);

        return (

            <nav className="nav">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3 className="masthead-brand">Cover</h3>
                        </div>
                        <div className="col-sm-8 ">
                            <div className="nav-masthead nav-inline">
                                {menuItems}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
});

module.exports = MenuBar;