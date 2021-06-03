import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './customPagination.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

const customPagination = ({setPage, numberOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='pagination'>
            <ThemeProvider theme={ darkTheme }>
                <Pagination count={ numberOfPages } 
                    onChange={ (e) => handlePageChange(e.target.textContent) } 
                    color='primary'
                />   
            </ThemeProvider>
        </div>
    );
}

export default customPagination;
