/**
 * Created by shawnsandy on 6/4/15.
 */

var React = require("react");
//var $ = require('jquery');

/**
 * webpack compiled components sample file
 */

var DataTables = require('../src/libs/rts-datatables.jsx');

var cols = ['id','first_name','last_name'];

React.render(<DataTables dataUrl="data/users.json" cols={cols} />, document.getElementById('component'));

