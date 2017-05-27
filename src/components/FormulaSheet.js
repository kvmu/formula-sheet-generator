import React, { Component } from 'react';
import '../css/FormulaSheet.css';


var texList = [ '\\theta_{min} = 1.22 \\frac{\\lambda}{D}',
  'T = \\frac{1}{f}',
  '\\omega = 2\\pi f',
  'P = \\frac{F_{\\bot}}{A}',
  'V = \\frac{4}{3} \\pi r^3',
  'A = \\pi r^2',
  'f = \\frac{1}{T}',
  'A_{surface} = 4 \\pi r^2',
  'c = \\frac{\\rho}{\\rho_{water}}',
  'k = \\frac{2 \\pi}{\\lambda}' ]


class FormulaSheet extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }



  render() {

    let test = [];

    for (var i=0; i<texList.length; i=i+3) {
      test.push(
        <tr>
          <td>
            {texList[i]}
          </td>
          <td>
            {texList[i+1]}
          </td>
          <td>
            {texList[i+2]}
          </td>
        </tr>
      )
    }

    return (

      <page size="A4">
        <h1> Welcome to the Formula Sheet Generator </h1>
        <table className="equ">
        {test}
        </table>

      </page>
    );
  };
};

export default FormulaSheet;
