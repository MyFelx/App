import React from "react";
import MovieModal from "../UI/MovieModal";

const MyList = (props) => {
  return (
    <MovieModal
      movieTitle={"Spider-Man: Into the Spider-Verse"}
      poster={
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
      }
      IMDb={8.4}
      appropriateAudiance={"PG"}
      runTime={"1h 57min"}
      genres={"Animation, Action, Adventure"}
      releaseDate={"14 December 2018 (USA)"}
      directors={"Peter Ramsey, Bob Persichetti, Rodney Rothman"}
      cast={"Shameik Moore, Jake Johnson, Hailee Steinfeld"}
      info={
        "Miles Morales is a New York teen struggling with school, friends and, on top of that, being the new Spider-Man. When he comes across Peter Parker, the erstwhile saviour of New York, in the multiverse, Miles must train to become the new protector of his city."
      }
      trailerID={"tg52up16eq0"}
    />
  );
};

export default MyList;
