import {useParams } from 'react-router-dom';



function SearchPage () {
    let { query } = useParams();

    return ( 
    <div style = {{marginTop: 100, textAlign: "center"}}>
        <h1>نتائج البحث عن: {query}</h1>
    </div> 
    )
}


export default SearchPage; 