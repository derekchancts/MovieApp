import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


export default function SimpleBottomNavigation() {
  let navigate = useNavigate();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);


  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        // backgroundColor: "#2d313a",
        zIndex: 100,

        '& .MuiBottomNavigation-root': {
          // backgroundColor: '#2d313a',  
          // backgroundColor: `var(--test-bg-color)`,
          backgroundColor: `var(--secondary-bg-color)`,
        },
        '& .MuiBottomNavigationAction-root': {
          // color: 'white'
          color: `var(--primary-text-color)`
        },
        '& .MuiBottomNavigationAction-root.Mui-selected': {
          // color: "#1976d2"
          color: `var(--selected-text-color)`
        },
        // '& .MuiBottomNavigationAction-root .Mui-selected .MuiSvgIcon-root ': {
        //   color: "#1976d2"
        // }
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
