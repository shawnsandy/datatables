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
import Table from '@shawnsandy/rc-tables';
import DataTable from 'datatables';


/**
 * Briefly describe your Element here
 */

var RtsDataTable = React.createClass({

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
      //console.log(this.state.data)
      }.bind(this)
    });
    //$(React.findDOMNode(this.refs.dataTable)).DataTable({});
    
  },

  componentWillUpdate: function() {
    var table = $(React.findDOMNode(this.refs.dataTable)).DataTable();
    table.destroy();
  },

  componentDidUpdate: function() {
    $(React.findDOMNode(this.refs.dataTable)).DataTable();
  },

  componentWillUnmount: function() {
    var table = $(React.findDOMNode(this.refs.dataTable)).DataTable();
    table.destroy();
  },

  getInitialState: function() {
    return {
      'data': []
    }
  },

  render: function() {
    
    var data = this.state.data;
    console.log(data);
    return (
      <div>
        <Table data={data} cols={ this.props.cols } colTables={ this.props.colTables } />
      </div>
    );
  }

});

/**
 * export the element
 */
export default RtsDataTable;