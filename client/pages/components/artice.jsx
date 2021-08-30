import styles from '../../styles/Article.module.css';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const Article = (props) => {

    const data = props.data;

    return ( 
        <div className={styles.articleWrapper}>
            <div className={styles.bookmarkIcon}>
                <BookmarkBorderIcon />
            </div>

            <div className={styles.articlePhoto}>
                <img src={`http://localhost:5000/api/photos/${data.imageName}`} alt="" className={styles.articleImage}/>
            </div>
            <div className={styles.articleContent}>
                <h2 className={styles.header}>{data.title}</h2>
                <p className={styles.author}>{data.author} <span className={styles.addTime}>{data.publishDate}</span></p>
                <div className={styles.tag}>
                    {data.genre}
                </div>
            </div>
        </div>
     );
}
 
export default Article;