import {useParams } from 'react-router-dom';



function BlogPage () {
    let { blogTitle } = useParams();

    return (
        <div style = {{marginTop: 100, textAlign: "center"}}>
            <h1>صفحة {blogTitle}</h1>
        </div>
    )
    
}


export default BlogPage; 