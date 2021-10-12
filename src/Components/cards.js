import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cards.css';

export default function Cards() {
    
    const [todos, settodos] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const searchHandler = (e) =>{
        setSearch(e.target.value);
        if(search !== ''){
            const results = todos.filter((each)=>{
                return each.title.toLowerCase().includes(search.toLowerCase());
            })
            setSearchResult(results);
        }        
    }

    useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en%02US&sort_by=popularity.desc&page=1').then((response) => {
        settodos(response.data.results)
    },[])
    .catch(err =>console.log(err))
    }, [])

return (
<div>
    <div className="main">
    <div className="tbox"> <input className="tbox-input" placeholder="search" type="text" value={search} onChange={searchHandler} /> </div>
    {     
        search==="" ?
        todos.map((one) => {
        return (
            <div className="cards" key={one.id}>
            <p>  
                <img  className="title_img" src={`https://image.tmdb.org/t/p/w500/${one.backdrop_path}`} alt="Movie Image" /> 
                <h3> {one.title} </h3>
                <h3 className="tag"> {one.vote_average} </h3> <br/>
                Rating Count : {one.vote_count} <br/> 
                Release Date : {one.release_date} <br/> <br/>
            </p>
            </div>
        ) }) :
        searchResult.map((oney) => {
            return (
                <div className="cards" key={oney.id}>
                <p>  
                    <img  className="title_img" src={`https://image.tmdb.org/t/p/w500/${oney.backdrop_path}`} alt="Movie Image" /> 
                    <h3> {oney.title} </h3>
                    <h3 className="tag"> {oney.vote_average} </h3> <br/>
                    Rating Count : {oney.vote_count} <br/> 
                    Release Date : {oney.release_date} <br/> <br/>
                </p>
                </div>
            ) }) 
    } 
    </div> 
</div>
)
}