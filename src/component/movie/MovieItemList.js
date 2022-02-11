import MovieItem from './MovieItem';
import classes from './MovieItemList.module.css';

 function MovieItemList(props) {

        return (
            <div className={classes.list}>

                {props.movies.map(movie =>

                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        image={movie.image}
                        movieName={movie.movieName}
                        rating={movie.rating}
                        releaseYr={movie.releaseYr}
                        description={movie.description}
                        cast={movie.cast}
    
                    />)}
            </div>
        );
    
    }

export default MovieItemList;




