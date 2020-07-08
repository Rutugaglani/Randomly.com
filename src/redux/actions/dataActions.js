import {
    LOADING_DATA,
    GET_NASA,
    GET_IMAGES,
    GET_POSTS,
    GET_ALBUMS,
    SEARCH_IMAGES,
    GET_POST,
    GET_COMMENTS,
    GET_PHOTOS

} from '../types';

import axios from 'axios'
const clientId = 'UMiSJNsTlR22RGONiq6z-kaafXQ68XHBN9LHWlgtvI4'

export const getImages =()=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=28&query=space&client_id="+clientId+"&orientation=portrait")
    .then(res=>{
        dispatch({
            type:GET_IMAGES,
            payload:res.data.results
        })
        
    }).catch(err=>console.log(err))

}
export const searchImages =(search)=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=28&query=${search}&client_id=${clientId}`)
    .then(res=>{
        dispatch({
            type:SEARCH_IMAGES,
            payload:res.data.results
        })
        
    }).catch(err=>console.log(err))

}
export const getPosts =()=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        dispatch({
            type:GET_POSTS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err=>console.log(err))
}
export const getPost =(id)=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        dispatch({
            type:GET_POST,
            payload:res.data
        })
        console.log(res.data)
    }).then(()=>
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then(res=>{
        dispatch({
            type:GET_COMMENTS,
            payload:res.data
        })
        console.log(res.data)
    })
    )
    .catch(err=>console.log(err))
}

export const getAlbums=()=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then(res=>{
        dispatch({
            type:GET_ALBUMS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err=>console.log(err))

}
export const getPhotos=()=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res=>{
        dispatch({
            type:GET_PHOTOS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err=>console.log(err))

}
export const getNasa=()=>dispatch=>{
    dispatch({ type: LOADING_DATA });
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=fR208KhPtZSYsKJ1vEpg87CTVZQEM20Blkxar0yu`)
    .then(res=>{
        dispatch({
            type:GET_NASA,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err=>console.log(err))

}



