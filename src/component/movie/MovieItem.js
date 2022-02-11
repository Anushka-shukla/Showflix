import classes from './MovieItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
    return (
        <div className={classes.grid_container}>
            <Card>

                <div className={classes.image}>
                    <img src={props.image} alt={props.movieName} />
                </div>

                <div className={classes.content}>

                    <h3 className={classes.name}>
                        {props.movieName}
                    </h3>
                    <h5 className={classes.yr}>
                        {props.releaseYr}
                    </h5>
                    <small className={classes.rating}>
                        {props.rating}
                    </small>
                    <p className={classes.description}>
                        {props.description}
                    </p>
                    <h4 className={classes.cast}>
                        {props.cast}
                    </h4>

                </div>
            </Card>
        </div>
    );
}

export default MeetupItem;