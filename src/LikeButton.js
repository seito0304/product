import { useState } from "react";
const LikeButton = () =>{
 const [isLiked,setLiked] = useState(false)
 const toggleLiked = () => {setLiked(!isLiked)};
 return (
 <button onClick={toggleLiked}>{isLiked ? 'いいね済み':'いいね前'}</button>
 )
}
export default LikeButton