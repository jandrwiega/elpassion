import styles from '../../styles/Article.module.css';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const Article = () => {
    return ( 
        <div className={styles.articleWrapper}>
            <div className={styles.bookmarkIcon}>
                <BookmarkBorderIcon />
            </div>

            <div className={styles.articlePhoto}>
                <img src="https://placeimg.com/1000/1000/any" alt="" className={styles.articleImage}/>
            </div>
            <div className={styles.articleContent}>
                <h2 className={styles.header}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iusto harum adipisci amet fugiat sapiente </h2>
                <p className={styles.author}>Piotr jarek <span className={styles.addTime}> 1 godz. temu</span></p>
                <div className={styles.tag}>
                    Hip-Hop
                </div>
            </div>
        </div>
     );
}
 
export default Article;