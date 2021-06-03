import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleContent from '../../components/singleContent/singleContent';
import CustomPagination from '../../components/paginaion/customPagination';

import './trending.scss';

const Trending = () => {

  const [ content, setContent ] = useState([]);
  const [ page, setPage ] = useState(1);

  const fetchTrending = async() => {
    const { data } = await axios.get(
      //b1f8bbd623ddb1028d2d921f7ee936c2  ${process.env.REACR_APP_API_KEY}
      `https://api.themoviedb.org/3/trending/all/day?api_key=b1f8bbd623ddb1028d2d921f7ee936c2&page=${page}`
    );
    setContent(data.results);
  }

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page])

    return (
      <div>
        <div className='pageTitle'>Trending</div>
        <div className='trending'>
          {
            content && content.map((c) => (
              <SingleContent key={c.id} item={c}/>
            ))
          }
        </div>

        <CustomPagination setPage={ setPage } />
      
      </div>
    );
}

export default Trending;
