let array = [{"id":1,"title":"The Shawshank Redemption","release_year":1994,"genre":"Drama","rating":9,"budget":25000000},{"id":2,"title":"The Godfather","release_year":1972,"genre":"Crime","rating":9,"budget":6500000},{"id":3,"title":"The Godfather: Part II","release_year":1974,"genre":"Crime","rating":9,"budget":13000000}];

function film(arr) { 
    return arr.map(x => x.title).join(', ');
}

let filmTitles = film(array);
console.log(filmTitles);
