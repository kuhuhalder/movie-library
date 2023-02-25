const MovieCard = (props) => {
    const movie = props.movie;
  
    return (
      <div className='card-container'>
        <img
          src='https://unsplash.com/photos/atsUqIm3wxo/download?force=true&w=640'
          alt='Movies'
          height={200}
        />
        <div className='desc'>
          <h2>
            {movie.title}
          </h2>
          <h3>{movie.review}</h3>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  