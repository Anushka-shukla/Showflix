import { Link } from 'react-router-dom';
// this class is js object where all the css classes will be property of  this obj
import classes from './MainNav.module.css';

function MainNav() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Showflix</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>

                    {/* <li>
                        <Link to='/shows'>TV Shows</Link>
                    </li>

                    <li>
                        <Link to='/my-list'>My List</Link>
                    </li> */}
                    
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;