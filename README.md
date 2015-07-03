ReactDataTables
A simple and easy to use Sortable table component built with [jQuery Datables](http://datatables.net), it was built as a simple easy to use option that can be quickly customized.


### Quick Start
----------------

__Via NPM__
 - `npm i @shawnsandy/rts-datatables`

 ```js

 var React = require("react");
 var DataTables = require('rts-datatables');

 var cols = ['ID','First Name','Last Name'];
 var colsTables = ['id','first_name','last_name'];

 React.render(<DataTables dataUrl="data/users.json" cols={cols} colTables={colsTables} />, document.getElementById('component'));

 ```

__Via GitHub Download__

 - Download the [latest release herepete (zip/tarball)](https://github.com/shawnsandy/datatables/releases)


 ### Contribute

 1. [Submit an issue](https://github.com/AdeleD/react-paginate/issues)
 2. Fork the repository
 3. Create a dedicated branch (never ever work in `master`)
 4. Fix bugs or implement features
 5. Always write tests

### History

__0.2.0__

- Updated Readme, fixed Typos
- added tableCaption prop
- Removed webpack from NPM (run) scripts

__0.1.0__

Beta release
- Refactored the component(s) structure
- Added props cols / colTables
- Propotypes / Validation
  - cols : //table cols
  - colTables: // the table names for cols
  - dataUrl : // url of your json data

__0.0.1__

- Development started


### TODO

- Add error checking
- DataTables options
- Add better styling options / props

### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
