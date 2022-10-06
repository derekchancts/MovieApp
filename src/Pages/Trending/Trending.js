/* eslint-disable react-hooks/exhaustive-deps */
import "./Trending.css"
import axios from 'axios'
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import { styled } from "@mui/material/styles";
import CustomPagination from "../../components/Pagination/CustomPagination";



const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",

  // [theme.breakpoints.up('md')]: {
  //   backgroundColor: 'red',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   backgroundColor: 'indigo',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   margin: '30px 0'
  // },
}));



const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [PageTotal, setPageTotal] = useState(0);

  const fetchTrending = async () => {
    const { data } = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    // console.log({data})
    setContent(data.results);
    setPageTotal(data.total_pages);
  };
  

  useEffect(() => {
    fetchTrending();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])

  // console.log({content})
  // console.log({page})


  return (
    <>
      <span className='pageTitle'>Trending</span>
      {/* <div className="trending"> */}

        <StyledDiv>
          {
            content && content.map((item) => (
              <SingleContent key={item.id} item={item} media_type={item.media_type}/>
            ))
          }
        </StyledDiv>

        <CustomPagination setPage={setPage} PageTotal={PageTotal} page={page}/>  
      {/* </div> */}
    </>

  )
}

export default Trending