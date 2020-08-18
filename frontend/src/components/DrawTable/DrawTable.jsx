import React from 'react';
import { Table, Paper, TableBody, TableCell, TableContainer, TableHead,
        TableRow } from '@material-ui/core'

import styles from './DrawTable.module.css';
const DrawTable = ({data}) => {

    const columns = [
        { id : 'region_name', label : 'Region', minWidth : '10vw' },
        { id : 'region_code', label : 'Code', minWidth : '10vw' },
        { id : 'pop_sum', label :'Domain', minWidth : '12vw', align : 'right' },
    ]
    // const coulmns = Object.keys(data[0])
    /*
        data = [{},{},{},{}...]
    */
    // const columns = data.map(d=>{
    //     Object.keys(d).map(key=>{
    //         return { key : }
    //     })
    // })
    return(
        <div className={styles.container}>
        <Paper>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column=>(
                                <TableCell
                                    key = {column.region_code}
                                    // style ={{minWidth : column.minWidth, background : "#dedede"}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row=>(
                            <TableRow hover role="checkbox" tabIndex={-1} key= {row.region_code}>
                                {columns.map(column=>{
                                    const value = row[column.id]
                                    return (
                                        <TableCell key ={column.id} align = {column.align}>
                                            {typeof value ==='number' ? parseInt(value) : value}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        </div>
    )
    
}

export default DrawTable;