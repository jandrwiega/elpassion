import styles from '../../styles/Podcast.module.css'
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const Podcast = () => {
    return ( 
        <div className={styles.podcastWrapper}>
            <div className={styles.podcastPhoto}>
                <img src="https://placeimg.com/150/150/any" alt="" className={styles.podcastImage}/>
            </div>

            <div className={styles.podcastContent}>
                <p className={styles.podcastAuthor}>sdaosakoaskdok kasdokoaskdasokok </p>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
            </div>

            <div className={styles.podcastSettings}>
                <div className={styles.podcastBtn}><PlayArrowOutlinedIcon className={styles.podcastBtnIcon}/></div>
                <div className={styles.podcastBtn}><BookmarkBorderOutlinedIcon className={styles.podcastBtnIcon}/></div>
            </div>
        </div>
     );
}
 
export default Podcast;