import { img_300, unavailable } from '../../config/config';
import Badge from '@material-ui/core/Badge';
import './singleContent.scss';

const SingleContent = ({item}) => {

    const { id, poster_path, title, name, release_date, first_air_date, media_type, vote_average } = item; 

    return (
        <div className='card'>
            <Badge badgeContent={ vote_average } 
                color={ vote_average > 6 ? 'primary': 'secondary' }
            />

            <img alt={ title || name } className='poster'
                src={ poster_path ? `${img_300}/${poster_path}` : unavailable } 
            />

            <b className='title'>{ title || name }</b>

            <span className='subTitle'> 
                {media_type === 'movie' ? 'Movie' : 'TV Series' }   
                
                <span className='subTitle'>
                    {release_date || first_air_date}
                </span>
            </span> 

            
        </div>
    )
}

export default SingleContent;
