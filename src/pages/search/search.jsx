import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";

import SingleContent from '../../components/singleContent/singleContent';
import CustomPagination from '../../components/paginaion/customPagination';
import './search.scss';

const Search = () => {
    
    const [ type, setType ] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState([]);

    const darkTheme = createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
          },
        },
    });

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
              `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=b1f8bbd623ddb1028d2d921f7ee936c2&
               language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
            setContent(data.results);
            setNumberOfPages(data.total_pages);
            //console.log(data);
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page]);

    return (
        <div className='container'>
        <ThemeProvider theme={ darkTheme }>
            <div className='search-input'>
                <TextField
                className='searchBox' 
                label="search" 
                variant="filled"
                onChange={(e) => {
                    setSearchText(e.target.value) 
                    fetchSearch();
                }}
                />
                <Button variant='contained' className='search-button' onClick={ fetchSearch }>
                    <SearchIcon />
                </Button>
            </div>

            <Tabs 
                className='tabs' 
                value={type} 
                indicatorColor='primary' 
                textColor='primary'
                onChange={ (event, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}
            >

                <Tab className='tab' label='Search Movies' />
                <Tab className='tab' label='Search TV Series' />
            </Tabs>

        </ThemeProvider>
        <div className='search-result'>
        {
            content && content.map((c) => {
                c.media_type = `${type ? "tv" : "movie"}`;
                return(
                <SingleContent key={c.id} item={c}/>
                );
            })
        }
        </div>
        { numberOfPages > 1 && (
            <CustomPagination numberOfPages={numberOfPages} setPage={ setPage } />
        )}
        </div>
    )
}

export default Search;
