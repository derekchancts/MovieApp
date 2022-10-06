import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { searchTheme } from "../../Mui/theme";
import { purple, green, red, yellow, orange, blue, pink } from '@mui/material/colors';
import useDebounce from '../../components/hooks/useDebounce'


const Search = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [PageTotal, setPageTotal] = useState(0);
  const [type, setType] = useState(0); // 0 (false) for movie, 1 (true) for tv
  const [searchText, setSearchText] = useState("");

  const tempSearchText= useDebounce(searchText, 400);
  // console.log({type})


  const fetchSearch = async () => {
    if (searchText === '' || searchText === '') return;
     
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchText}&page=${page}`
      );
      setContent(data.results);
      setPageTotal(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  // eslint-disable-next-line
  }, [type, page, tempSearchText]);


  useEffect(() => {
    if (searchText === ''){
      setContent([]);
      setPageTotal(0);
    }
  },[searchText])


  return (
    <>
      <ThemeProvider theme={searchTheme}>

        <div className="search">
          <TextField
            sx={{ flex: 1 }}
            variant="filled"
            className="searchBox"
            label="Search"
            onChange={(e) => setSearchText(e.target.value)}

            onKeyPress={(e) => {
              if (e.key === "Enter") {
                console.log(e.target.value);
                setSearchText(e.target.value)
              }
            }}
          />

          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>

        <Tabs
          value={type}
          // indicatorColor="secondary"
          // textColor="secondary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          // sx={{ paddingBottom: 30 }}
          // centered
        >
          <Tab sx={{ minWidth: "50%", maxWidth: '100%' }} label="Search Movies" />
          <Tab sx={{ minWidth: "50%", maxWidth: '100%' }} label="Search TV Series" />
        </Tabs>

      </ThemeProvider>

      <div className="trending">
        {content && content.map(item => (
          <SingleContent
            key={item.id}
            item={item}
            media_type={type ? "tv" : "movie"}
          />
        ))}

        {searchText.length > 0 && searchText.trim().length !== 0 && 
          content.length === 0 && 
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)
        }
      </div>

      {PageTotal > 1 && (
        <CustomPagination setPage={setPage} numOfPages={PageTotal} />
      )}

    </>
  )
}

export default Search