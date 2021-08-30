import styles from '../../styles/Podcast.module.css'
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const Podcast = (props) => {

    const data = props.data;

    return ( 
        <div className={styles.podcastWrapper}>
            <div className={styles.podcastPhoto}>
                <img src={`http://localhost:5000/api/photos/${data.imageName}`} alt="" className={styles.podcastImage}/>
            </div>

            <div className={styles.podcastContent}>
                <p className={styles.podcastAuthor}>{data.author}</p>
                <h2>{data.title}</h2>
            </div>

            <div className={styles.podcastSettings}>
                <div className={styles.podcastBtn}><PlayArrowOutlinedIcon className={styles.podcastBtnIcon}/></div>
                <div className={styles.podcastBtn}><BookmarkBorderOutlinedIcon className={styles.podcastBtnIcon}/></div>
            </div>
        </div>
     );
}
 
export default Podcast;