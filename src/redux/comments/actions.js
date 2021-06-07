import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from './types';

const fetchCommentSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  }
}

const fetchCommentFailre = (err) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: err,
  }
}

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST
  }
}

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentRequest())
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(respone => respone.json())
    .then(comments => 
      dispatch(fetchCommentSuccess(comments)))
    .catch(err => dispatch(fetchCommentFailre(err)))
  }
}