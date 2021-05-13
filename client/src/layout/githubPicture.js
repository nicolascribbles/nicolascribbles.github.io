import { useState, useEffect } from 'react';

export default function GithubPicture(){
  const [avatar, setAvatar] = useState('');
  
  useEffect(() => {
    fetch("http://api.github.com/users/nicolascribbles")
      .then(res => res.json())
      .then(data => {
        console.log(setData(data));
        console.log(data);
    });
  }, [])
  
  const setData = ({ avatar_url}) => {
    setAvatar(avatar_url);
  }
  return(
    <figure className="px-4 text-xs mb-5">
      <img src={avatar} className="w-52 h-52 mt-2 mx-auto rounded-lg shadow-dark mb-3 z-2" wrapped="true" alt="GithubProfile Avatar" />
      <figcaption>Github Profile Picture</figcaption>
    </figure>
  )
}