import { useState } from 'react';
import { fetchPost } from '../utils/postApi';

const DEFAULT_POST_DATA = {}
export default function usePost() {
  const [post, setPost] = useState(DEFAULT_POST_DATA);

  const getPost = async (id) => {
    try {
      setPost(DEFAULT_POST_DATA)
      const data = await fetchPost(id)

      if(!data.body || !data.title) {
        setPost({ error: 'Missing data' })
      } else {
        setPost({ data })
      }
    } catch (error) {
      setPost({ error })
    }
  }

  return [post, getPost]
}