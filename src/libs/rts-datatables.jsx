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

    propTypes: {
        cols: React.PropTypes.array.isRequired,
        dataUrl: React.PropTypes.string.isRequired
    },

    getDefaultProps() {

        return {
            dataUrl: '',
            selector: 'table table-hover',
            cols: []
        }

    },

    componentDidMount() {

        $.ajax({
            type: "GET",
            url: this.props.dataUrl,
            dataType: "json",
            success: function (data) {
                this.setState({data: data});
                //console.log(this.state.data[0])
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

        var tr = this.state.data;
        //console.log(tr[0]);
        var cols = this.props.cols;
        var rows = tr.map(function (row, key) {
          //  console.log(key);
          return(
                  <RtsDataTable.Rows key={key} data={row} cols={cols} />

              )

        });

        return (
            <div>
                <table id="datatable" ref="dataTable" className={this.props.selector}>
                    <RtsDataTable.Caption />
                    <RtsDataTable.Header cols={this.props.cols } />
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }


});


RtsDataTable.Rows = React.createClass({

    propTypes: {
        data: React.PropTypes.object,

    },

    getDefaultProps(){
        return {
            cols: ['id','first_name']
        }
    },

    render: function () {


        var data = this.props.data;
       //
        var rows = this.props.cols.map(function(d,k){
            console.log(d);
            return (
            <td key={k}>
               {data[d]}
            </td>
                );

        })
        return(
            <tr>
                {rows}
            </tr>
        )

    }

});


RtsDataTable.Caption = React.createClass({

    getDefaultProps() {
        return {
            caption: ""
        }
    },

    render: function () {
        return (
            <caption>{ this.props.caption }</caption>
        );
    }

});

RtsDataTable.Header = React.createClass({

    getDefaultProps() {
        return {

            cols: []

        }
    },

    render: function () {

        var cols = this.props.cols;
        var header = cols.map(function (names, key) {

            return (
                <th key={key}>
                    {names}
                </th>
            );
        });

        return (
            <thead>
            <tr>
                {header}
            </tr>
            </thead>
        );
    }


});


/**
 * export the element
 */
module.exports = RtsDataTable;
