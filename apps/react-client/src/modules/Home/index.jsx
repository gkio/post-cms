import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import usePost from '../../hooks/usePost';
import './styles.scss';

export default function Home(props) {
  const [id, setId] = useState('');
  const history = useHistory();
  const [post, getPost] = usePost();

  useEffect(() => {
    if(post.data) {
      history.push({
        pathname: '/details',
        state: { post: post.data }
      })
    }
  }, [post, history])

  const sendRequest = () => {
    if(isNumber(id)){
      getPost(id)
    }
  }

  const isNumber = (value) => {
    const re = /^[0-9\b]+$/; //rules
    return re.test(value)
  }
  
  const onChangeInput = ({ target: { value } }) => {
    if (value == '' || isNumber(value)) {
      setId(value);
    }
  }

  return (
    <div className="home">
      <div className="home-block">
        <div className={`home-error ${post.error ? 'visible' : ''}`}>
          {post.error}
        </div>
        <input 
          className="home-searchbar"
          type="text"
          value={id}
          placeholder="Type some id"
          onChange={onChangeInput}
        />
        <button
        className="home-searchbar__button"
        onClick={sendRequest}
        >
          send
        </button>
      </div>
    </div>
  )
}