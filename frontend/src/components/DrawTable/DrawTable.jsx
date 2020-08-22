import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow
        ,CircularProgress } from '@material-ui/core'
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

import styles from './DrawTable.module.css';

const useStyles = makeStyles({
    tableContainer: {
      maxHeight: 440,
    },
    head: {
        backgroundColor : "'black'",
        color :"white",

    }
});

const descendingComparator = (a, b, orderBy) =>{
    return b[orderBy] - a[orderBy];
}

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? 
        (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
  
const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// const EnhancedTableHead = (props) => {
//     const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//     const createSortHandler = (property) => (event) => {
//       onRequestSort(event, property);
//     };
  
//     return (
//       <TableHead>
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell
//               key={column.id}
//               align={column.numeric ? 'right' : 'left'}
//               sortDirection={orderBy === column.id ? order : false}
//             >
//               <TableSortLabel
//                 active={orderBy === column.id}
//                 direction={orderBy === column.id ? order : 'asc'}
//                 onClick={createSortHandler(column.id)}
//               >
//                 {columnDict[c] ? columnDict[c] : c }

//                 {orderBy === column.id ? (
//                   <span className={classes.visuallyHidden}>
//                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                   </span>
//                 ) : null}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//     );
// }

const DrawTable = ({region, category}) => {
    const classes = useStyles(); 
    if(!region || !region.length) 
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
            <CircularProgress color="secondary"/>
            <h5>Loading table..</h5>
        </div>);



    var columns = Object.keys(region[0]); 
    columns.shift();

    const columnDict = {
        'rank' : '순위',
        'region_name' : '지역구',
        'murder' : '살인',
        'robber' : '강도',
        'rape': '강간',
        'theft':'절도',
        'violence' : '폭력',
        'arr_total' : '검거횟수',
        'arrest' : '검거율',
        'household' :'가구수',
        'total_male' : '남(전체)',
        'total_female' : '여(전체)',
        'for_male' : '남(외국인)',
        'for_female' : '여(외국인)',
        'total' : category,
    }
    const makeNumFomat = (num) =>{
        return (
            <NumberFormat value = {num} thousandSeparator={true} displayType={'text'} />
        )
    }


    const alignDecision = (c)=>{
        return c ==='region_name' || c === 'rank' ? 'left' :'right'
    }

//     <EnhancedTableHead
//     classes={classes}
//     numSelected={selected.length}
//     order={order}
//     orderBy={orderBy}
//     onSelectAllClick={handleSelectAllClick}
//     onRequestSort={handleRequestSort}
//     rowCount={rows.length}
//   />

    // make dict and assign that to columns arr
    // to Make beautiful column name
    return(
        <div >
            <Paper className={styles.container}>
                <TableContainer className={classes.tableContainer}>
                    <Table stickyHeader aria-label="sticky table">

                        <TableHead className={classes.head}>
                            <TableRow>
                                <TableCell key={'rank'} align={'left'}>{'순위'}</TableCell>
                                {columns.map(c=>(
                                    <TableCell key = {c} align={ alignDecision(c) }>
                                        {columnDict[c] ? columnDict[c] : c }
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {region.map((row,i)=>{ // # of row
                                return(
                                <TableRow hover role="checkbox" tabIndex={-1} key= {row.region_code}>
                                    <TableCell key={'rank'} align={'left'}>{i}</TableCell>
                                    {columns.map((c)=>{ // # of col
                                        let isNum = Number.isInteger(row[c]);
                                        return(
                                        <TableCell key={c} align={alignDecision(c)} >
                                            { isNum ? makeNumFomat(row[c]) : row[c]}
                                        </TableCell>
                                        );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
    
}


export default DrawTable;