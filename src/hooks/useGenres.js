const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return '';

    const GenreIds = selectedGenres.map((genre) => genre.id);
    return GenreIds.reduce((accumulator, currentValue) => 
        accumulator + ',' + currentValue);

}

export default useGenres;
