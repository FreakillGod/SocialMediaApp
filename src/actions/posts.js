import * as api from '../api';

//actions creators: fuctions that returns an action

export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchPosts();

        dispatch({type:'FETCH_ALL',payload:data})
    } catch (error) {
        console.log(error.message);
    }


    // const action = {type:'FETCH_ALL',payload:[]}

    // dispatch(action);
}