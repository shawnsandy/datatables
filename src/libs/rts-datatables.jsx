/**
 * Created by shawnsandy on 6/13/15.
 */

/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react');
var $ = require('jquery');
var DataTable = require('datatables');
/**
 * Briefly describe your Element here
 */

var RtsDataTable = React.createClass({

    getDefaultProps(){

        return {
            dataUrl: '',
            selector: 'table table-hover'
        }

    },

    componentDidMount(){

        $.ajax({
            type: "GET",
            url: this.props.dataUrl,
            dataType: "json",
            success: function (data) {
                this.setState({data: data});
                //console.log(this.state.data)
            }.bind(this)
        });
        $(React.findDOMNode(this.refs.dataTable)).DataTable({});
    },
    componentWillUpdate: function () {
        var table = $(React.findDOMNode(this.refs.dataTable)).DataTable();
        table.destroy();
    },
    componentDidUpdate: function () {
        $(React.findDOMNode(this.refs.dataTable)).DataTable();
    },
    componentWillUnmount: function () {
        var table = $(React.findDOMNode(this.refs.dataTable)).DataTable();
        table.destroy();
    },
    getInitialState: function () {
        return {
            'data': []
        }
    },

    render: function () {

        var rows = this.state.data.map(function (row) {
            return (
                <tr key={row.id}>
                    <td>{row.first_name} {row.last_name} </td>
                    <td>{row.username}</td>
                    <td>{row.password} </td>
                    <td>{row.ssn} </td>
                    <td>{row.gender} </td>
                    <td>{row.updated_at} </td>
                </tr>
            );
        })

        return (
            <div>
                <table id="datatable" ref="dataTable" className={this.props.selector}>
                    <RtsDataTable.Caption />
                    <RtsDataTable.Header />

                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }

});


RtsDataTable.Body = React.createClass({
    render: function () {
        return (
            <div>Table Body</div>
        )
    }
});


RtsDataTable.Caption = React.createClass({

    getDefaultProps(){
        return {
            caption: "UI DATATABLE"
        }
    },

    render: function () {
        return (
            <caption>{ this.props.caption }</caption>
        );
    }

});

RtsDataTable.Header = React.createClass({

    getDefaultProps(){
        return {

            tag: 'thead',
            pagingType: 'full_numbers'

        }
    },

    render: function () {

        var tag = this.props.tag;

        if (tag == 'tfoot')
            return (
                <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Office</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Updated</th>
                </tr>
                </tfoot>
            );
        else
            return (
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Office</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Updated</th>
                </tr>
                </thead>
            );


    }

});



/**
 * export the element
 */
module.exports = RtsDataTable;
