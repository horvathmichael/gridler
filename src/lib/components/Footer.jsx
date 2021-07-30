import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
  },
  flexGrow: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
  },
  autocomplete: {
    padding: theme.spacing(1),
    width: '150px',
  },
}));

export default function Footer({
  localization,
  rows,
  filteredRows,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  const classes = useStyles();
  const countPages = () => {
    const pages = [];
    for (let index = 1; index <= (filteredRows.length / pageSize); index += 1) {
      pages.push(`${index}`);
    }
    if (filteredRows.length % pageSize > 0) {
      pages.push(`${pages.length + 1}`);
    }
    return pages;
  };

  return (
    <div className={classes.footer}>
      <Typography className={classes.text}>
        {`${localization.rows}: ${filteredRows.length} / ${rows.length}`}
      </Typography>
      <div className={classes.flexGrow} />
      <Autocomplete
        className={classes.autocomplete}
        value={`${pageSize}`}
        options={['10', '20', '50']}
        onChange={onPageSizeChange}
        disableClearable
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label={`${localization.pageSize}: `}
          />
        )}
        renderOption={(option, { selected }) => (
          selected ? (
            <Box style={{ width: '100%' }} display="flex" justify="center">
              {option}
            </Box>
          ) : (
            option
          )
        )}
      />
      {page > 1 && (
        <Button onClick={() => onPageChange(undefined, `${page - 1}`)}><ArrowLeftIcon /></Button>
      )}
      <Autocomplete
        className={classes.autocomplete}
        value={`${page}`}
        options={countPages()}
        onChange={onPageChange}
        disableClearable
        renderInput={(params) => {
          const lastPage = countPages()[countPages().length - 1] || 1;
          return (
            <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              label={`${localization.page} (${params.inputProps.value}/${lastPage}): `}
            />
          );
        }}
        renderOption={(option, { selected }) => (
          selected ? (
            <Box style={{ width: '100%' }} display="flex" justify="center">
              {option}
            </Box>
          ) : (
            option
          )
        )}
      />
      {page < (filteredRows.length / pageSize) && (
        <Button onClick={() => onPageChange(undefined, `${page + 1}`)}><ArrowRightIcon /></Button>
      )}
    </div>
  );
}

Footer.propTypes = {
  localization: PropTypes.shape({
    rows: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
  }).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filteredRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};
