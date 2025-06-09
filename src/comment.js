import './style.css';
import LikeButton from './LikeButton';
const Comment = (props) => {
 return(
 <div style={{backgroundColor:props.bgColor}} className="comment">
 <div>
 <img className="comment-user-img"
alt={props.userName} src={props.avatarUrl}></img>
 <div className="comment-user">
 ID:{props.userName}
 </div>
 </div>
 <div className="comment-text">
 {props.text}
 </div>
 <div className='Comment-likeBtn'>
 <LikeButton />
 </div>
 </div>
 )
}
export default Comment