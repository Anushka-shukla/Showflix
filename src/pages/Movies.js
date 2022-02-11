import MovieItemList from "../component/movie/MovieItemList";

// holds array of dummy meetups
const DUMMYY_DATA =   [

{
    "id": "1",
    "movieName": "The Shawshank Redemption",
    "image": "https://source.unsplash.com/600x400/?movie",
    "rating": "9.2",
    "releaseYr": "1994",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "cast": "Tom Robins, Morgan Freeman, Bob Guntun"
},

{
    "id": "2",
    "movieName": "The Godfather",
    "image": "https://source.unsplash.com/600x400/?godfather, movie",
    "rating": "9.2",
    "releaseYr": "1972",
    "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    "cast": "Marlon Brando, James Caan"
},

{
    "id": "3",
    "movieName":  "The Dark Knight",
    "image": "https://source.unsplash.com/600x400/?knight, movie",
    "rating": "9.0",
    "releaseYr": "2008",
    "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "cast": "Christian Bale, Gary Oldman, Mggie, Monique "
},

{
    "id": "4",
    "movieName": "Inception",
    "image": "https://source.unsplash.com/600x400/?inception, movie",
    "rating": "8.8",
    "releaseYr": "2010",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "cast": "Leonardo Di Caprio, Page Li"
},

{
    "id": "5",
    "movieName": "Star Wars: Episode V - The Empire Strikes Back",
    "image": "https://source.unsplash.com/600x400/?starwars, movie",
    "rating": "8.7",
    "releaseYr": "1980",
    "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    "cast": "Mark Hamill, Carrie Fisher, Harrison"
},

{
    "id": "6",
    "movieName": "The Matrix",
    "image": "https://source.unsplash.com/600x400/?matrix, movie",
    "rating": "9.7",
    "releaseYr": "1999",
    "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "cast": "Keanu Reevs,  Laurence Fishburne"
},

{
    "id": "7",
    "movieName": "Spider-Man: No Way Home",
    "image": "https://source.unsplash.com/600x400/?spiderman, movie",
    "rating": "8.7",
    "releaseYr": "2021",
    "description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    "cast": "Tom Holland, Zendaya, Benedict Cumberbatch "
},

{
    "id": "8",
    "movieName": "The Lion King",
    "image": "https://source.unsplash.com/600x400/?lion king, movie",
    "rating": "8.5",
    "releaseYr": "1994",
    "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "cast": "Metthew Broderic(voice), Jeremy Irons (voice)"
},

{
    "id": "9",
    "movieName": "Gladiator",
    "image": "https://source.unsplash.com/600x400/?gladiator, movie",
    "rating": "8.5",
    "releaseYr": "2000",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "cast": "Russel Crowe , Juaquin Phoenix, Connie Nielsen"
},

{
    "id": "10",
    "movieName": "Avengers: Infinity War",
    "image": "https://source.unsplash.com/600x400/?avengers, movie",
    "rating": "8.4",
    "releaseYr": "2018",
    "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "cast": "Robert Downey Jr., Chris Hemsworth"
},

{
    "id": "11",
    "movieName": "WALL·E",
    "image": "https://source.unsplash.com/600x400/?cartoon, movie",
    "rating": "8.4",
    "releaseYr": "2008",
    "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "cast": "Ben Burtt, Jeff Garlin"
},

{
    "id": "12",
    "movieName": "Joker",
    "image": "https://source.unsplash.com/600x400/?joker, movie",
    "rating": "8.4",
    "releaseYr": "2019",
    "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "cast": "Juaquin Phoenix, Zazzie Beetz, Robert De Niro"
}

]


function Movies() {
    return <div>
        <h2> Movies</h2>
       
        <ul>
        <MovieItemList movies={DUMMYY_DATA} />
        </ul>
        
    </div>

}

export default Movies;