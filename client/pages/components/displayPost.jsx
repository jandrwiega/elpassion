import Article from "./artice";
import Podcast from "./podcast";

const DisplayPost = (props) => {

    const data = props.data;

    return ( 
        <>
            { data.type === 'article' ? <Article data={data}/> : <Podcast data={data}/> }
        </>
     );
}
 
export default DisplayPost;