import axios from 'axios';
import { useEffect, useState } from 'react';

import SingleContent from '../../components/singleContent/singleContent';
import CustomPagination from '../../components/paginaion/customPagination';
import Genres from '../../components/genres/genres';
import useGenres from '../../hooks/useGenres';
import './series.scss';
const Series = () => {

    const [ page, setPage ] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchSeries = async () => {
        //b1f8bbd623ddb1028d2d921f7ee936c2  ${process.env.REACR_APP_API_KEY}
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=b1f8bbd623ddb1028d2d921f7ee936c2&
        language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        
        setContent(data.results);
        setNumberOfPages(data.total_pages);
    }


    useEffect(() => {
        fetchSeries();
        // eslint-disable-next-line
    }, [page, genreforURL]);

    return (
        <div className='container'>
            <div className='pageTitle'>TV Series</div>

            <Genres key={1}
                type='tv' 
                selectedGenres={ selectedGenres } 
                genres={ genres }
                setSelectedGenres={ setSelectedGenres }
                setGenres={ setGenres }
                setPage={ setPage }
            />

            <div className='series'>
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

export default Series;
