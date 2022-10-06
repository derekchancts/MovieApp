import { img_300, unavailable } from "../../config/config";
import './SingleContent.css'
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import { singletonTheme } from "../../Mui/theme";
import { ThemeProvider } from "@mui/material/styles";
import ContentModal from "../ContentModal.js/ContentModal";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 20,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: 5,
    fontSize: 14,
    height: 20,
  },
}));


const SingleContent = ({ item, media_type }) => {
  // console.log({item})
  // console.log(item.media_type)
  // console.log(media_type)

  return (
    <>
      <ContentModal media_type={media_type} id={item.id}>

        <div className="media">

          {/* <Badge 
            badgeContent={Math.round(item.vote_average * 10) / 10}
            color={item.vote_average > 7 ? "primary" : "secondary"}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          /> */}

          <ThemeProvider theme={singletonTheme}>
            <StyledBadge 
              badgeContent={Math.round(item.vote_average * 10) / 10}
              color={item.vote_average >= 7 ? "primary" : "secondary"}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            />
          </ThemeProvider>

          <img
            className="poster"
            src={item.poster_path ? `${img_300}/${item.poster_path}` : unavailable}
            alt={item.title || item.name}
          />

          <div className="content">
            <b className="title">{item.title || item.name}</b>

            <span className="subTitle">
              {media_type === "tv" ? "TV Series" : "Movie"}
              <span>{item.first_air_date || item.release_date}</span>
            </span>
          </div>

        </div>

      </ContentModal>
    </>
  )
}

export default SingleContent