import { useState } from "react";
const Omikuji = () => {
 const [username, setUsername] = useState('');
 const [birthday, setBirthday] = useState('');
 const [department, setDepartment] = useState('');
 const handleClick = () =>{
 const items = ['大吉','中吉','小吉','吉','凶'];
 const index = Math.floor(Math.random() * items.length);
 alert(username + 'さんの運勢は' + items[index] + 'です。');
 setUsername('');
 setBirthday('');
 setDepartment('開発');
 };
 const handleChange = (event) => { setUsername(event.target.value); };
 const handleBirthdatChange = (event) => { setBirthday(event.target.value); };
 const handleDepartment = (event) => { setDepartment(event.target.value); };
 return(
 <div>
 <h2>{username}さんの今日の運勢は？</h2>
 <h2>生年月日：{birthday}</h2>
 <h2>部署：{department}</h2>
 <label>
 お名前：<input type="text" value={username} onChange={handleChange} />
 </label>
 <label>
 生年月日：
<input type="text" value={birthday} onChange={handleBirthdatChange} />
 </label>
 <br />
 <label>
 開発：<input type="radio" value="開発" 
onChange={handleDepartment} checked={department==='開発'}/>
 </label>
 <br />
 <label>
 総務：<input type="radio" value="総務"
onChange={handleDepartment} checked={department==='総務'}/>
 </label>
 <br />
 <label>
 営業：<input type="radio" value="営業"
onChange={handleDepartment} checked={department==='営業'}/>
 </label>
 <button onClick={handleClick}>おみくじを引く</button>
 </div>
 );
}
export default Omikuji;