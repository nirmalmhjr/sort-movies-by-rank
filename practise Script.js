/**
 * DONE: Change sortMoviesByRank() function to sort movies list by rank
 * TODO: Sort movies by id, rank, and title through dynamic function
 * TODO: Create helper function called getMaxMovieObject() for finding max movie
 */

let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]



window.onload = function (){
    let sortByAttribute = sortMoviesByAttr(movies, 'rank')
    displayMovies(sortByAttribute)

}

function displayMovies(movies) {
    let table = '<table width =100% border = 1>'
    table += '<tr><th>ID</th><th>Name</th><th>Rating</th></tr>'
    for(i=0;i<movies.length; i++){
        table += '<tr>'
        table += '<td>'+ movies[i].id  +'</td>'
        table += '<td>'+ movies[i].title +'</td>'
        table += '<td>'+ movies[i].rank +'</td>'
        table += '</tr>'
    }
    table += '</table>'
    //showing in the HTML
    document.querySelector('#movies-list').innerHTML = table;
    
}


function sortMoviesByAttrHelper(movies, start, attribute){
    let max_obj = movies[start]
    max_location = start
    
    for (let j = start; j < movies.length; j++) {
        if (movies[j][attribute] > max_obj[attribute]) {
            max_obj = movies[j]
            max_location = j
        }
    }
    return {max_obj, max_location}

}

function sortMoviesByAttr(movies, attribute){
    for(i=0;i<movies.length;i++){
        let max = sortMoviesByAttrHelper(movies, i, attribute)
        max_obj = max.max_obj
        max_location = max.max_location

        //Swap the place between the highest and the lowest
        movies[max_location] = movies[i]
        movies[i] = max_obj
    }
    return  movies
}
