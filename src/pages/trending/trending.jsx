import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleContent from '../../components/singleContent/singleContent';
import './trending.scss';

const Trending = () => {

  const [ content, setContent ] = useState([]);
  const [ page, setPage ] = useState(1);

  const fetchData = async() => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACR_APP_API_KEY}`
    );
    setContent(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [])

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
      </div>
    );
}

export default Trending;
