const movies = [
  {
    title: 'Pulp Fiction',
    year: '1994',
    genre: 'Crime, Drama',
    director: 'Quentin Tarantino',
    actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
    plot:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    imdbRating: '8.9',
  },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: '1983',
    genre: 'Action, Adventure, Fantasy',
    director: 'Richard Marquand',
    actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    plot:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's...",
    poster:
      'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    imdbRating: '8.3',
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
    genre: 'Action, Adventure, Fantasy',
    director: 'Irvin Kershner',
    actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    plot:
      'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    imdbRating: '8.7',
  },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: '1977',
    genre: 'Action, Adventure, Fantasy',
    director: 'George Lucas',
    actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    plot:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    imdbRating: '8.6',
  },
  {
    title: 'Rogue One: A Star Wars Story',
    year: '2016',
    genre: 'Action, Adventure, Sci-Fi',
    director: 'Gareth Edwards',
    actors: 'Felicity Jones, Diego Luna, Alan Tudyk',
    plot:
      "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
    imdbRating: '7.8',
  },
  {
    title: 'Léon: The Professional',
    year: '1994',
    genre: 'Action, Crime, Drama',
    director: 'Luc Besson',
    actors: 'Jean Reno, Gary Oldman, Natalie Portman',
    plot:
      "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    imdbRating: '8.5',
  },
  {
    title: 'Inception',
    year: '2010',
    genre: 'Action, Adventure, Sci-Fi',
    director: 'Christopher Nolan',
    actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    plot:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    imdbRating: '8.8',
  },
  {
    title: 'Shutter Island',
    year: '2010',
    genre: 'Mystery, Thriller',
    director: 'Martin Scorsese',
    actors: 'Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo',
    plot:
      'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    imdbRating: '8.2',
  },
  {
    title: 'The Departed',
    year: '2006',
    genre: 'Crime, Drama, Thriller',
    director: 'Martin Scorsese',
    actors: 'Leonardo DiCaprio, Matt Damon, Jack Nicholson',
    plot:
      'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg',
    imdbRating: '8.5',
  },
  {
    title: 'Limitless',
    year: '2011',
    genre: 'Sci-Fi, Thriller',
    director: 'Neil Burger',
    actors: 'Bradley Cooper, Anna Friel, Abbie Cornish',
    plot:
      "A mysterious pill that enables the user to access 100% of his brain's abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers.",
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    imdbRating: '7.4',
  },
  {
    title: 'All Quiet on the Western Front',
    year: '2022',
    genre: 'Action, Drama, War',
    director: 'Edward Berger',
    actors: 'Felix Kammerer, Albrecht Schuch, Aaron Hilmer',
    plot:
      "A young German soldier's terrifying experiences and distress on the western front during World War I.",
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg',
    imdbRating: '7.8',
  },
  {
    title: 'Rush Hour',
    year: '1998',
    genre: 'Action, Comedy, Crime',
    director: 'Brett Ratner',
    actors: 'Jackie Chan, Chris Tucker, Ken Leung',
    plot:
      "A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way.",
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    imdbRating: '7.0',
  },
  {
    title: 'Rush Hour 2',
    year: '2001',
    genre: 'Action, Comedy, Crime',
    director: 'Brett Ratner',
    actors: 'Jackie Chan, Chris Tucker, John Lone',
    plot:
      'Carter and Lee head to Hong Kong for a vacation, but become embroiled in a counterfeit money scam.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BODhlNGJjMWQtZGMyYS00MzJhLWJhZGMtY2NlNDI5Nzg5NTU2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    imdbRating: '6.6',
  },
  {
    title: 'The Usual Suspects',
    year: '1995',
    genre: 'Crime, Drama, Mystery',
    director: 'Bryan Singer',
    actors: 'Kevin Spacey, Gabriel Byrne, Chazz Palminteri',
    plot:
      'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    imdbRating: '8.5',
  },
];
let main = document.getElementsByTagName('main');

console.log(main);

let input = document.getElementById('myfilter');



console.log(input);

//main.appendChild(input)

for(let i=0; i<movies.length;i++){
  let gridItem  = document.createElement('div');
  gridItem.setAttribute('class','grid-item');

  gridItem.innerHTML = `
                  <h1>title: ${movies[i].title},</h1>
                  <h3>year: ${movies[i].year},</h3>
                  <h3>genre: ${movies[i].genre},</h3>
                  <h3>director: ${movies[i].director},</h3>
                  <h3>actors: ${movies[i].actors},</h3>
                  <p>plot:${movies[i].plot} </p> 
                  <h3>imdbRating: ${movies[i].imdbRating},</h3>
  `
  gridItem.style.backgroundImage = `url(${movies[i].poster})`;
  let gridContainer = document.querySelector('.grid-container');
  //console.log(gridItem);

  input.addEventListener('keypress',function(){
    //const filtred = movies.filter(el => )
  });

  gridContainer.appendChild(gridItem)

}



