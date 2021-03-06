import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard';



const MovieList = ({movies,search,deleteHAndeler,sortHandler,sortByRateUp,sortByRateDown}) => {
	
	
	return (
		<>
		  <div style={{textAlign:'center'}}  >
          <button style={{background:'transparent',color:'white', borderColor:'transparent' ,marginLeft:'30px',marginTop:'30px'}} onClick={()=>sortHandler() }>Sort by Title </button>
          <button style={{background:'transparent', color:'white',borderColor:'transparent' ,marginLeft:'30px'}} onClick={()=>sortByRateUp() }>Sort by Rate </button> 
          <button style={{background:'transparent',color:'white', borderColor:'transparent' ,marginLeft:'30px'}} onClick={()=>sortByRateDown() }>Sort by Rate  </button>   
			</div>
			
			{/*Filtring movie list with (name and rating)  */}
			
		<div style={{ display: 'flex', flexWrap: 'wrap' }} > 
            
		{movies.filter((ele)=>ele.title.toLowerCase().includes(search.toLowerCase().trim()) || ele.rating.toString().toLowerCase().includes(search.toLowerCase().trim()) ).map((element) => (
			<MovieCard key={element.id} result={element} deleteHAndeler={deleteHAndeler} />
			
			
					
				
		))}
			
				
		
		</div>
			
		</>
			);
};

export default MovieList;