import React from 'react';
import { useHistory } from 'react-router-dom'
import './styles.scss';

export default function Details(props) {
  const history = useHistory()
  const { post } = props;

  const goBack = () => {
    history.push('/')
  }

  return (
    <div className="details">
      <div className="details-block">
        <div className="details-header">
          <div onClick={goBack} className="details-header_back">
            Go Back
          </div>
          <h3>{post.title}</h3>
        </div>
        <div className="details-body">
          {post.body}
        </div>
      </div>
    </div>
  )
}