import React from "react";
import MovieCard from '../UI/MovieCard'
const SignUp = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

      <MovieCard id={3} isInList={true} posterSrc={"https://m.media-amazon.com/images/M/MV5BODY1NWE2OTctOTU5MC00NTlmLWI2MzktMmYzMTUzYjk4YjEzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SY1000_CR0,0,701,1000_AL_.jpg"} moveiRating={8.2} />
      <MovieCard isInList={true} posterSrc={"https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg"} moveiRating={8.4} />
      <MovieCard id={3} isInList={false} removeFromList={(idssdcadw) => console.log(idssdcadw)} posterSrc={"https://m.media-amazon.com/images/M/MV5BZjNlZmUyYmMtNjNjMS00NzQ5LTlmYjktNDVkMmRjMTQyMmVjXkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg"} title={"ShinshaShinsha masshta 2 Mashta"} moveiRating={8} />
      <MovieCard isInList={false} posterSrc={"https://m.media-amazon.com/images/M/MV5BMWRmNDRkN2ItYTEyNS00NWVhLWFkNzgtNWJkM2RkOTcyNWRmXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"} moveiRating={8.1} />
      <MovieCard isInList={false} posterSrc={"https://m.media-amazon.com/images/M/MV5BY2Y4MTE2MDEtOTRhNS00Yzk0LTk0M2MtNzJmMGI5YmIxNmE1XkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"} title={"Hello Shanga"} moveiRating={7.7} />
      <MovieCard isInList={false} posterSrc={"https://m.media-amazon.com/images/M/MV5BZjNlZmUyYmMtNjNjMS00NzQ5LTlmYjktNDVkMmRjMTQyMmVjXkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg"} title={"ShinshaShinsha masshta 2 Mashta"} moveiRating={8} />
      <MovieCard isInList={false} posterSrc={"https://m.media-amazon.com/images/M/MV5BODY1NWE2OTctOTU5MC00NTlmLWI2MzktMmYzMTUzYjk4YjEzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SY1000_CR0,0,701,1000_AL_.jpg"} moveiRating={8.2} />
      <MovieCard isInList={true} posterSrc={"https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg"} moveiRating={8.4} />
      <MovieCard isInList={true} posterSrc={"https://m.media-amazon.com/images/M/MV5BMWRmNDRkN2ItYTEyNS00NWVhLWFkNzgtNWJkM2RkOTcyNWRmXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"} moveiRating={8.1} />
      <MovieCard isInList={true} posterSrc={"https://m.media-amazon.com/images/M/MV5BY2Y4MTE2MDEtOTRhNS00Yzk0LTk0M2MtNzJmMGI5YmIxNmE1XkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"} title={"Hello Shanga"} moveiRating={7.7} />
    </div>
  )
};

export default SignUp;
