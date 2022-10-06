import { useState, useEffect } from 'react';
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from '../../components/Genres/Genres';
import useGenre from "../../components/hooks/useGenre";


const Series = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [PageTotal, setPageTotal] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  // console.log({selectedGenres})
  // console.log({genreforURL})   // "12,16,10770"


  const fetchSeries = async () => {

    // const { data } = await axios(`https://api.themoviedb.org/3/tv/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`)
    const { data } = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    // console.log({data})
    setContent(data.results);
    setPageTotal(data.total_pages);
  };
  

  useEffect(() => {
    fetchSeries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page, genreforURL])



  return (
    <>
      <span className="pageTitle">TV Series</span>

      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />

      <div className="trending">
        {content &&
          content.map((item) => <SingleContent key={item.id} item={item} media_type="tv" />)}
      </div>

      {PageTotal > 1 && (
        <CustomPagination page={page} setPage={setPage} PageTotal={PageTotal} />
      )}

    </>
  )
}

export default Series