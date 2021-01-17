//array with all tracks in it.
const playlist = []

//construct object with song data
function Tracks (trackname, artist, album, year, playlistname, playlistmonth, playlistyear)
{

    this.track_name = trackname;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.playlist_name = playlistname;
    this.playlist_month = playlistmonth;
    this.playlist_year = playlistyear; 
    playlist.push(this);
};

//January Playlist

let peppers_onions = new Tracks("Pepper and Onions", "Tierra Whack", "Pepper and Onions (Single)", "2020", "Congress", "January", "2020");
let best_rapper = new Tracks("Best Rapper in the Fuckin World", "Goldlink", "Best Rapper in the Fuckin World (Single) ","2020","Congress","January","2020");
let king_torta = new Tracks("King Torta", "Garrott Odom", "The Power of 3", "2015", "Congress", "January","2020");
let dhuaan = new Tracks("Dhuaan", "El Michels Affair", "Dhuaan(Single)", "2020", "Congress", "January", "2020");
let woman = new Tracks("Woman", "Lianne La Havas", "Woman(Single)","2020","Congress","January","2020");
let we_rollin = new Tracks("We Rollin' For You", "Tall Black Guy", "We Rollin' For You (EP)", "2020", "Congress", "January","2020");
let fuego = new Tracks("Fuego", "Channel Tres", "I Can't Go Outside", "2020","Congress","January","2020");
let just_dance = new Tracks("I Just Wanna Dance", "SAULT", "Untitled (Rise)","2020","Congress","January","2020");
let betterX = new Tracks("1000000 x Better, Romare Remix","Griff","1000000 x Better (EP)","2020","Congress","January","2020");
let raro = new Tracks("Raro", "Dan Kye", "Small Moments", "2020", "Congress", "January","2020");
let use_it = new Tracks("Use It","Demae","Life Works Out...Usually","2020","Congress","January","2020");
let like_sand = new Tracks("Like Sand", "Marie Dahlstrom","Like Sand","2020","Congress","January","2020");
let road_of = new Tracks("Road Of the Lonely Ones","Madlib","Sound Ancestors","2020","Congress","January","2020");
let simple_dreams = new Tracks("Simple Dreams of Simple Days", "Mike Slott", "Vignettes", "2020", "Congress","January","2020");
let good_days = new Tracks("Good Days", "SZA", "Good Days (Single)","2020","Congress","January","2020");


console.log(playlist)