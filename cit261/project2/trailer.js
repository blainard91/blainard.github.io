var movies = [
    {
        "title": "Victoria and Abdul",
        "release": "September 22, 2017",
        "genre": "drama",
        "src": "https://www.youtube.com/embed/T504u17Ao9A?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/T504u17Ao9A?rel=0&autoplay=1;showinfo=0",
        "poster": "http://crosshandshallandcinema.co.uk/wp-content/uploads/2017/09/VIC1.jpg"
    },
    {
        "title": "Battle of the Sexes",
        "release": "September 22, 2017",
        "genre": "drama",
        "src": "https://www.youtube.com/embed/5AWP1K7FaFI?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/5AWP1K7FaFI?rel=0&autoplay=1;showinfo=0",
        "poster": "http://www.joblo.com/posters/images/full/battle-sexes-poster-lareg.jpg"
    },
    {
        "title": "The Lego Ninjago Movie",
        "release": "September 22, 2017",
        "genre": "kids",
        "src": "https://www.youtube.com/embed/F5JV3nVOLMA?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/F5JV3nVOLMA?rel=0&autoplay=1;showinfo=0",
        "poster":"https://media.baselineresearch.com/images/1760107/1760107_medium.jpg"
    },
    {
        "title": "Flatliners",
        "release": "September 29, 2017",
        "genre": "horror",
        "src": "https://www.youtube.com/embed/a1S52y5ZVlY?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/a1S52y5ZVlY?rel=0&autoplay=1;showinfo=0",
        "poster": "https://highlandernews.org/wp-content/uploads/flatliners-poster.jpg"
    },
    {
        "title": "My Little Pony: The Movie",
        "release": "October 6, 2017",
        "genre": "kids",
        "src": "https://www.youtube.com/embed/kIv_ConaZ1c?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/kIv_ConaZ1c?rel=0&autoplay=1;showinfo=0",
        "poster": "https://1.bp.blogspot.com/-Ga_KSwC6s_0/WVPx9v35U9I/AAAAAAAAEcY/36Ki50lnZAsWzxOjzj-9xr1G5tEFqV_DwCLcBGAs/s1600/mylittleponyposter.jpg"
    },
    {
        "title": "The Mountain Between Us",
        "release": "October 6, 2017",
        "genre": "romance",
        "src": "https://www.youtube.com/embed/3jyzGKXBOxA?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/3jyzGKXBOxA?rel=0&autoplay=1;showinfo=0",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxNjQzMDk5NV5BMl5BanBnXkFtZTgwNjI0NjM2MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        "title": "Breathe",
        "release": "October 13, 2017",
        "genre": "drama",
        "src": "https://www.youtube.com/embed/JycCFypvgmI?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/JycCFypvgmI?rel=0&autoplay=1;showinfo=0",
        "poster": "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Breathe-new-poster.jpg?ssl=1"
    },
    {
        "title": "Geostorm",
        "release": "October 20, 2017",
        "genre": "action",
        "src": "https://www.youtube.com/embed/EuOlYPSEzSc?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/EuOlYPSEzSc?rel=0&autoplay=1;showinfo=0",
        "poster": "https://cdn.traileraddict.com/content/warner-bros-pictures/geostorm-poster-2.jpg"
    },
    {
        "title": "Only the Brave",
        "release": "October 20; 2017",
        "genre": "action",
        "src": "https://www.youtube.com/embed/mQj4BkYf-HM?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/mQj4BkYf-HM?rel=0&autoplay=1;showinfo=0",
        "poster": "https://ewedit.files.wordpress.com/2017/08/otb_online_1sht_fnl_aoj_0862.jpg?w=1800&h=2700"

    },
    {
        "title": "Murder on the Orient Express",
        "release": "November 2, 2017",
        "genre": "drama",
        "src": "https://www.youtube.com/embed/Mq4m3yAoW8E?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/Mq4m3yAoW8E?rel=0&autoplay=1;showinfo=0",
        "poster": "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/2017/09/unnamed.jpg?itok=LJ_5DrKV"
    },
    {
        "title": "Thor: Ragnarok",
        "release": "November 3, 2017",
        "genre": "action",
        "src": "https://www.youtube.com/embed/ue80QwXMRHg?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/ue80QwXMRHg?rel=0&autoplay=1;showinfo=0",
        "poster": "http://www.joblo.com/posters/images/full/thor-ragnarok-poster-main.jpg"
    },
    {
        "title": "Daddy's Home 2",
        "release": "November 10, 2017",
        "genre": "comedy",
        "src": "https://www.youtube.com/embed/yyW_EX7iRW0?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/yyW_EX7iRW0?rel=0&autoplay=1;showinfo=0",
        "poster": "https://cdn.flickeringmyth.com/wp-content/uploads/2017/09/daddys-home-2-poster.jpg"

    },
    {
        "title": "Paddington 2",
        "release": "November 10, 2017",
        "genre": "kids",
        "src": "https://www.youtube.com/embed/52x5HJ9H8DM?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/52x5HJ9H8DM?rel=0&autoplay=1;showinfo=0",
        "poster": "https://cdn.eventcinemas.com.au/cdn/resources/movies/10812/images/largeposter.jpg"
    },
    {
        "title": "Justice League",
        "release": "November 17, 2017",
        "genre": "action",
        "src": "https://www.youtube.com/embed/DblEwHkde8U?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/DblEwHkde8U?rel=0&autoplay=1;showinfo=0",
        "poster": "https://i0.wp.com/batman-news.com/wp-content/uploads/2017/10/Justice-League-Poster-UK.jpg?quality=85&strip=info&ssl=1&w=800"
    },
    {
        "title": "Coco",
        "release": "November 22, 2017",
        "genre": "kids",
        "src": "https://www.youtube.com/embed/suBMEBxZal8?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/suBMEBxZal8?rel=0&autoplay=1;showinfo=0",
        "poster": "https://3.bp.blogspot.com/-EmaSa5meQtc/WYikA0cPEUI/AAAAAAAAUoY/BjwURoypyUAwGys9y_HCJLpYz5PUyvZUQCLcBGAs/s1600/Coco-Family-Poster-Pixar.jpg"
    },
    {
        "title": "Star Wars: The Last Jedi",
        "release": "December 15, 2017",
        "genre": "sci-fi",
        "src": "https://www.youtube.com/embed/Q0CbN8sfihY?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/Q0CbN8sfihY?rel=0&autoplay=1;showinfo=0",
        "poster": "https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/Last-Jedi-Poster.jpeg"
    },
    {
        "title": "Jumanji: Welcome to the Jungle",
        "release": "December 20, 2017",
        "genre": "fantasy",
        "src": "https://www.youtube.com/embed/A3f1Tvev010?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/A3f1Tvev010?rel=0&autoplay=1;showinfo=0",
        "poster": "http://www.joblo.com/posters/images/full/jumanji-poster.jpg"
    },
    {
        "title": "Pitch Perfect 3",
        "release": "December 22, 2017",
        "genre": "comedy",
        "src": "https://www.youtube.com/embed/qZkuyLsN3gM?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/qZkuyLsN3gM?rel=0&autoplay=1;showinfo=0",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODUzMmRlYTEtZjVmMC00MTM5LWI2ZWUtZTM5MTBhODcyNjA2XkEyXkFqcGdeQXVyNjQ4NTMyMTg@._V1_SY1000_CR0,0,620,1000_AL_.jpg"
    },
    {
        "title": "Maze Runner: The Death Cure",
        "release": "January 26, 2018",
        "genre": "action",
        "src": "https://www.youtube.com/embed/S_9OSktlm6s?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/S_9OSktlm6s?rel=0&autoplay=1;showinfo=0",
        "poster": "https://i.pinimg.com/736x/d8/b8/c2/d8b8c21352910d0ae8d4b518900ba915--maze-runner-series-the-maze-runner.jpg"
    },
    {
        "title": "Black Panther",
        "release": "February 16, 2018",
        "genre": "action",
        "src": "https://www.youtube.com/embed/xjDjIWPwcPU?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/xjDjIWPwcPU?rel=0&autoplay=1;showinfo=0",
        "poster": "http://cdn2-www.superherohype.com/assets/uploads/gallery/black-panther_1/bpposter2017.jpg"
    },
    {
        "title": "A Wrinkle in Time",
        "release": "March 9, 2018",
        "genre": "fantasy",
        "src": "https://www.youtube.com/embed/E4U3TeY2wtM?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/E4U3TeY2wtM?rel=0&autoplay=1;showinfo=0",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE4ODI4NzcyMV5BMl5BanBnXkFtZTgwMzY0NjE5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        "title": "Tomb Raider",
        "release": "March 16, 2018",
        "genre": "action",
        "src": "https://www.youtube.com/embed/8ndhidEmUbI?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/8ndhidEmUbI?rel=0&autoplay=1;showinfo=0",
        "poster": "https://pre00.deviantart.net/21ba/th/pre/i/2017/106/6/9/tomb_raider__2018____teaser_poster_by_netoribeiro89-db61lvb.jpg"
    },
    {
        "title": "Pacific Rim: Uprising",
        "release": "March 23, 2018",
        "genre": "sci-fi",
        "src": "https://www.youtube.com/embed/_EhiLLOhVis?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/_EhiLLOhVis?rel=0&autoplay=1;showinfo=0",
        "poster": "https://pbs.twimg.com/media/DKq0_cVXkAAE2er.jpg"
    },
    {
        "title": "Ready Player One",
        "release": "March 30, 2018",
        "genre": "sci-fi",
        "src": "https://www.youtube.com/embed/LiK2fhOY0nE?rel=0&amp;showinfo=0",
        "full": "https://www.youtube.com/embed/LiK2fhOY0nE?rel=0&autoplay=1;showinfo=0",
        "poster": "https://pics.filmaffinity.com/ready_player_one-558307493-large.jpg"
    },
];

localStorage.genre1 = "";
localStorage.genre2 = "";

window.onload = function() {

    var trailer1Over = document.getElementById("trailer1Over");
    var trailer2Over = document.getElementById("trailer2Over");
    var trailer3Over = document.getElementById("trailer3Over");
    var trailer1 = document.getElementById("trailer1");
    var trailer2 = document.getElementById("trailer2");
    var trailer3 = document.getElementById("trailer3");
    var pickedTrailer = document.getElementById("pickedTrailer");

    var randomTrailer1 = movies[Math.floor(Math.random() * movies.length)];
    var randomTrailer2 = movies[Math.floor(Math.random() * movies.length)];
    var randomTrailer3 = movies[Math.floor(Math.random() * movies.length)];

    if (localStorage.genre1 == ""){

        while (randomTrailer2.src == randomTrailer1.src || randomTrailer2.src == randomTrailer3.src){
            randomTrailer2 = movies[Math.floor(Math.random() * movies.length)];
        }

        while (randomTrailer3.src == randomTrailer1.src || randomTrailer3.src == randomTrailer1.src){
            randomTrailer3 = movies[Math.floor(Math.random() * movies.length)];
        }

    } else {
        while (randomTrailer1.genre != localStorage.genre1 || randomTrailer1.genre != localStorage.genre2){
            randomTrailer1 = movies[Math.floor(Math.random() * movies.length)];
        }

        while (randomTrailer2.src != localStorage.genre1 || randomTrailer2.genre != localStorage.genre1){
            randomTrailer2 = movies[Math.floor(Math.random() * movies.length)];
        }
        while (randomTrailer3.src != localStorage.genre1 || randomTrailer3.genre != localStorage.genre1){
            randomTrailer3 = movies[Math.floor(Math.random() * movies.length)];
        }
    }


    trailer1.src = randomTrailer1.src;
    trailer2.src = randomTrailer2.poster;
    trailer3.src = randomTrailer3.poster;


    trailer1.addEventListener('touchstart', function(){

        localStorage.genre2 = localStorage.genre1;

        if (trailer1.src == randomTrailer2.full){
            localStorage.genre1 = randomTrailer2.genre;
        } else if (trailer1.src == randomTrailer3.full){
            localStorage.genre1 = randomTrailer3.genre;
        } else {
            localStorage.genre1 = randomTrailer1.genre;
        }
    })

    trailer2Over.addEventListener('touchstart', function(){
            trailer1.src = randomTrailer2.full;
    })

    trailer3Over.addEventListener('touchstart', function(){
            trailer1.src = randomTrailer3.full;
    })
}


