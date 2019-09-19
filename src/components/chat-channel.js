import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
/** chips */
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
/** data */
import { rows } from './services/chat-data';

const tableStyling = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

// &nbsp;

export default function SimpleTable() {
  const classes = tableStyling();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }
  return (
    <div className={classes.root}>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Chats</TableCell>
              <TableCell align="right">Users</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Topic</TableCell>
              <TableCell align="right">Recent Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.chats}</TableCell>
                <TableCell align="right">{row.users}</TableCell>
                <TableCell align="right">{row.securityType}</TableCell>
                <TableCell align="right"><Chip label={row.topic} variant="outlined" color="primary" /></TableCell>
                <TableCell align="right">{row.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

    </div>
  );
}
