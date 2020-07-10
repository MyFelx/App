import React from "react";
import Grid from "../UI/grid";

const Home = (props) => {
  const moviesData = [
    {
      title: "dawdwd",
      posterSrc:
        "https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg",
    },
    {
      title: "dawdwd",
      posterSrc:
        "https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg",
    },
  ];
  return (
    <Grid
      movieList={moviesData}
      // ID={2}
      // InTheList={true}
      // ThePosterImage={
      //   "https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg"
      // }
      // // TheMovieRating={8.4}
    />
  );
};

export default Home;

// <div
//   style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
// >
//   <MovieCard id={3} isInList={true} posterSrc={NoImage} movieRating={8.2} />
//   <MovieCard
//     isInList={true}
//     posterSrc={
//       "https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg"
//     }
//     movieRating={8.4}
//   />
//   <MovieCard
//     id={3}
//     isInList={false}
//     removeFromList={(idssdcadw) => console.log(idssdcadw)}
//     posterSrc={
//       "https://m.media-amazon.com/images/M/MV5BZjNlZmUyYmMtNjNjMS00NzQ5LTlmYjktNDVkMmRjMTQyMmVjXkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
//     }
//     title={"ShinshaShinsha masshta 2 Mashta"}
//     movieRating={8}
//   />
//   <MovieCard
//     isInList={false}
//     posterSrc={
//       "https://m.media-amazon.com/images/M/MV5BMWRmNDRkN2ItYTEyNS00NWVhLWFkNzgtNWJkM2RkOTcyNWRmXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"
//     }
//     // movieRating={""}
//   />
// </div>
