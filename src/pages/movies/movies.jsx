import axios from 'axios';
import { useEffect, useState } from 'react';

import SingleContent from '../../components/singleContent/singleContent';
import CustomPagination from '../../components/paginaion/customPagination';
import Genres from '../../components/genres/genres';
import useGenres from '../../hooks/useGenres';
import './movies.scss';
const Movies = () => {

    const [ page, setPage ] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchMovies = async () => {
        //b1f8bbd623ddb1028d2d921f7ee936c2  ${process.env.REACR_APP_API_KEY}
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b1f8bbd623ddb1028d2d921f7ee936c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        
        setContent(data.results);
        //console.log(data , data.results)
        setNumberOfPages(data.total_pages);
    }


    useEffect(async() => {
        await fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL]);

    return (
        <div>
            <div className='pageTitle'>Movies</div>

            <Genres key={1}
                type='movie' 
                selectedGenres={ selectedGenres } 
                genres={ genres }
                setSelectedGenres={ setSelectedGenres }
                setGenres={ setGenres }
                setPage={ setPage }
            />

            <div className='movies'>
            {
                content && content.map((c) => (
                <SingleContent key={c.id} item={c}/>
                ))
            }
            </div>
            { numberOfPages > 1 && (
                <CustomPagination numberOfPages={numberOfPages} setPage={ setPage } />
            )}
        </div>
    )
}

export default Movies;
