import React from 'react';
import { useHistory } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
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
          <h3>
            {(post && post.title) ? post.title : <Skeleton />}
          </h3>
        </div>
        <div className="details-body">
          {(post && post.body) ? post.body : <Skeleton count="3" />}
        </div>
      </div>
    </div>
  )
}