import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';

const DefaultTable = ({ columns, datas }) => (
  <Table>
    <TableHead>
      <TableRow>
        {_.map(columns, (item, key) => (
          <TableCell key={key}>{item}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {_.map(datas, (item, key) => (
        <TableRow key={key}>
          {_.map(columns, column => (
            <TableCell component="th" scope="row">
              {item[column]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
DefaultTable.propTypes = {
  columns: PropTypes.array,
  datas: PropTypes.array
};
export default DefaultTable;
