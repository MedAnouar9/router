import React,{useState} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Trailer from './components/Trailer';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [movies, setMovies] = useState([
    
    {
      id:1,
      title: "The Shawshank Redemption",
      Description:
        "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.",
      rating: 6.9,
      
      image:
        " https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        link:"https://www.youtube.com/watch?v=NmzuHjWmXOc&t=16s&ab_channel=MovieclipsClassicTrailers"
    },
    {
      id:2,
      title: " Fight Club (1999)",
      Description:
        "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique.",
      rating: 6.8,
      
      image:
        "https://cinemadetective.com/wp-content/uploads/2020/04/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link:"https://www.youtube.com/watch?v=qtRKdVHc-cE&ab_channel=MovieclipsClassicTrailers"
    },
    {
      id:3,
    title: "Fury",
    Description:
      "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    rating: 7.6,
    
    image:
      "https://img3.cdn.cinoche.com/images/05df333d8640fba563f929bf855244b2.jpg",
      link: "http://www.youtube.com/watch?v=DNHuK1rteF4&ab_channel=MovieclipsTrailers"
    },
    {
      id:4,
      title: "Matrix (1999) ",
      Description:
        "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. À cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ?",
      rating: 9.2,
      
      image:
        "https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg",
    },
    {
    id:6,
    title: "Troy",
    image:
      'https://d3tvwjfge35btc.cloudfront.net/Assets/02/074/L_p0001707402.jpg',
    rating: 7.3,
    
    
    Description:
      "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
  },
    {
    id:7,
    title: 'Gladiator',
    image:
      'https://fr.web.img6.acsta.net/medias/nmedia/18/68/64/41/19254510.jpg',
    rating: 8.5,
    Description:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
  },
    {
    id:8,
    title: ' La Cité de Dieu (2002)',
    image:
      'https://fr.web.img5.acsta.net/medias/nmedia/18/35/05/63/affiche.jpg',
    rating: 8.6,
    Description:
      'À Rio de Janeiro, un jeune homme et son meilleur ami forment un gang qui passe du vol au meurtre pour finir dans le trafic de drogue.',
  },
    {
    id:9,
    title: 'The Equalizer',
    image:
      'https://fr.web.img5.acsta.net/pictures/14/08/28/16/00/452053.jpg',
    rating: 7.2,
    Description:
      'A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.',
  },
    {
    id:10,
    title: 'Interstellar (2014)',
    image:
      'https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg',
    rating: 6.7,
    Description:
      'Dans un proche futur, la Terre est devenue hostile pour l homme. Les tempêtes de sable sont fréquentes et il n y a plus que le maïs qui peut être cultivé, en raison d un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale.',
  },
    {
      id:12,
      title: 'The Revenant',
      image:
        'https://fr.web.img5.acsta.net/c_310_420/o_club300-310x420.png_0_se/pictures/15/11/10/09/30/165611.jpg',
      rating: 8.5,
      Description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team."
      
    },
    {
      id:13,
      title: 'John Wick Parabellum',
      image:
        'https://fr.web.img5.acsta.net/pictures/19/05/21/15/23/4992794.jpg',
      rating: 7.5,
      Description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
      
    },
  ])
  
  const [search, setSearch] = useState("");
  


  /* get what we type in search box*/ 
  
  const searchMovie = (event) => {
    setSearch(event.target.value);
  }

  
  /*create a new array for the new movie */
  
  const handelAdd = (newMovie) => {
    setMovies([...movies,newMovie])
    
  }
  /*Filter movie list by id as a primairy key*/
  
  const deleteHAndeler = (ID) => {
    setMovies(movies.filter((e) => e.id !== ID));
  };

  
  /* Sort by Title of movies*/ 
  const sortHandler = () => {

   setMovies ([...movies].sort((a, b) => a.title > b.title ? 1 : -1))
  }
  /*Sort by Rating Descendant*/
 const sortByRateDown = () => {

  setMovies ([...movies].sort((a, b) => b.rating - a.rating))
 }
  /*Sort by Rating Ascendant*/
 const sortByRateUp = () => {

  setMovies ([...movies].sort((a, b) => a.rating - b.rating))
 }
 
  
  return (
       
      <div className='container-fluid'>
      <div className='row'>     
        {/* Nav bar*/}
        <Filter searchMovie={searchMovie} />
        
        {/* Router*/ }
         <Routes>
         <Route path="/" element={<MovieList movies={movies}  search={search} deleteHAndeler={deleteHAndeler}  searchMovie={searchMovie} sortHandler={sortHandler} sortByRateUp={sortByRateUp} sortByRateDown={sortByRateDown} />} />
         <Route path="add" element={<AddMovie handelAdd={handelAdd}  />} />
         <Route path="trailer/:IdMovie" element={<Trailer movies={movies} />} />
         </Routes>
      </div>
      </div>
      
  ) 
}

export default App;