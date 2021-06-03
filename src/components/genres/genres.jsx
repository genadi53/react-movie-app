import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    //b1f8bbd623ddb1028d2d921f7ee936c2  ${process.env.REACR_APP_API_KEY}
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=b1f8bbd623ddb1028d2d921f7ee936c2&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(async () => {
    await fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0", marginBottom: '6px' }}>
      {
        selectedGenres.map((genre) => (
            <Chip
            key={ genre.id }
            style={{ margin: 2 }}
            label={ genre.name }
            color="primary"
            size="small"
            clickable
            onDelete={ () => handleRemove(genre) }
            />
        ))
      }

      {
        genres.map((genre) => (
            <Chip
            key={ genre.id }
            style={{ margin: 2 }}
            label={ genre.name }
            size="small"
            clickable            
            onClick={ () => handleAdd(genre) }
            />
        ))
      }
    </div>
  );
};

export default Genres;