import React from 'react';
import dayjs from 'dayjs';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import * as relativeTime from 'dayjs/plugin/relativeTime';

const useStyles = makeStyles()((theme) => {
  return {
    text: {
      fontWeight: 'bold',
      fontSize: '0.825rem',
      color: theme.palette.common.black,
      alignSelf: 'flex-start',
    },
  };
});

const ViewCategoryDetails = ({ tableCaption, categories }) => {
  const { classes } = useStyles();
  dayjs.extend(relativeTime);

  return (
    <Box>
      {categories?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='category details table'>
            <caption>{tableCaption}</caption>
            <TableHead>
              <TableRow>
                <TableCell className={classes.text}>Title</TableCell>
                <TableCell className={classes.text} align='right'>
                  Description
                </TableCell>
                <TableCell className={classes.text} align='right'>
                  Last Updated At
                </TableCell>
                <TableCell className={classes.text} align='right'>
                  Last Updated By
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories?.map((v, index) => (
                <TableRow key={index}>
                  <TableCell component='th' scope='row'>
                    {v.title}
                  </TableCell>
                  <TableCell align='right'>{v?.description}</TableCell>
                  <TableCell align='right'>
                    {dayjs(v?.lastUpdatedAt).fromNow()}
                  </TableCell>
                  <TableCell align='right'>{v?.lastUpdatedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </Box>
  );
};

export default ViewCategoryDetails;
