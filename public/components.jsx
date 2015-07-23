/**
 * Created by shawnsandy on 6/4/15.
 */

//var React = require("react");
//var DataTables = require('../src/libs/rts-datatables.jsx');

import React from 'react';
import DataTables from '../src/libs/rts-datatables.jsx';

var cols = ['ID','First Name','Last Name'];
var colsTables = ['id','first_name','last_name'];

React.render(<DataTables dataUrl="data/users.json" cols={cols} colTables={colsTables} />, document.getElementById('component'));
