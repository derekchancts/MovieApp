import { useState, useEffect } from "react";
import axios from "axios";
import Chip from '@mui/material/Chip';
import _ from "lodash";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../Mui/theme'
import Sort from '../hooks/useSort'



const Genres = ({ type, selectedGenres, setSelectedGenres, setPage }) => {
  const [genres, setGenres] = useState([]);


  const handleAdd = (genre) => {
    const newArray = [...selectedGenres, genre];
    const sortedArray = Sort(newArray);
    setSelectedGenres(sortedArray);

    setGenres(genres.filter((g) => g.id !== genre.id));
    
    setPage(1);
  };


  const handleRemove = (genre) => {
    setSelectedGenres( selectedGenres.filter(selected => selected.id !== genre.id) );

    const newArray = [...genres, genre];
    const sortedArray = Sort(newArray);
    setGenres(sortedArray);

    setPage(1);
  };


  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      setGenres(data.genres); 
    };
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
  }, [type]);

  console.log({ genres })


  return (
    <div>

    <ThemeProvider theme={darkTheme}>

      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
          sx={{ margin: "2px" }} 
          label={genre.name}
          key={genre.id}
          clickable
          size='small'
          color="primary"
          onDelete={() => handleRemove(genre)}
          // deleteIcon={<DeleteIcon />}  
        />
      ))}

      {/* { genres && !_.isEmpty(genres) && genres?.map((genre) => ( */}
      {genres && Object.keys(genres).length !== 0 && genres?.map((genre) => (
        <Chip
          sx={{ margin: "2px" }} 
          label={genre.name}
          key={genre.id}
          clickable
          size='small'
          onClick={() => handleAdd(genre)}
        />
      ))}

    </ThemeProvider>

    </div>
  )
}

export default Genres