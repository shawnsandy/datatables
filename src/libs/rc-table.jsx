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
//var React = require('react');
//var $ = require('jquery');
//var DataTable = require('datatables');

import React from 'react';
import $ from 'jquery';


/**
 * Briefly describe your Element here
 */

var RcTable = React.createClass({


  propTypes: {
    cols: React.PropTypes.array.isRequired,
    colTables: React.PropTypes.array.isRequired,
    dataUrl: React.PropTypes.string.isRequired
  },

  getDefaultProps() {

    return {
      dataUrl: '',
      selector: 'table table-hover',
      cols: [],
      colTables: [],
      tableCaption: ''
    }
  },

  componentDidMount() {

    $.ajax({
      type: "GET",
      url: this.props.dataUrl,
      dataType: "json",
      success: function(data) {


        this.setState({
          data: data
        });
//console.log(this.state.data[0])
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {
      'data': []
    }
  },

  render: function() {

    var tr = this.state.data;
//console.log(tr[0]);
    var cols = this.props.colTables;
    var rows = tr.map(function(row, key) {
//  console.log(key);
      return (
        <RcTable.Rows colsTables={cols} data={row} key={key}/>

      )
    });

    return (
      <div>
        <table className={this.props.selector} id="datatable" ref="dataTable">
          <RcTable.Caption caption={this.props.tableCaption}/>
          <RcTable.Header cols={this.props.cols }/>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }

});

RcTable.Rows = React.createClass({

  propTypes: {
    data: React.PropTypes.object.isRequired,
    colsTables: React.PropTypes.array.isRequired

  },

  getDefaultProps() {
    return {

      colsTables: []
    }
  },

  render: function() {

    var data = this.props.data;
//
    var rows = this.props.colsTables.map(function(d, k) {
//console.log(d);
      return (
        <td key={k}>
          {data[d]}
        </td>
      );

    })
    return (
      <tr>
        {rows}
      </tr>
    )
  }

});

RcTable.Header = React.createClass({

  getDefaultProps() {
    return {

      cols: [
        'Id', 'First Name', 'Last Name'
      ]
    }
  },

  render: function() {

    var cols = this.props.cols;
    var header = cols.map(function(names, key) {

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
 *
 */
RcTable.Caption = React.createClass({

  getDefaultProps() {
    return {
      caption: ""
    }
  },

  render: function() {
    return (
      <caption>{ this.props.caption }</caption>
    );
  }

});

/**
 * export the element
 */
//module.exports = RcTable;
export default RcTable;