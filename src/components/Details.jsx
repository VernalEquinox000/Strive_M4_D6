/* import React, { Component } from 'react'

export default class details extends Component {

    state = {}
    
    componentDidMount() { 
    myfetch = async (query) => {
        try {
            let response = await fetch(
                `http://www.omdbapi.com/?i=tt3896198&apikey=41290999&s=${query}`
            );

            let arraymovies = await response.json();

            let movies = arraymovies.Search;
        }
    //fetch + props.id nel componentDidMount

 //response tramite id --> info necessarie 
    
    
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
 */