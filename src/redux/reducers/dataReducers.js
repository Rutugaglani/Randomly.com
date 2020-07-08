import {
    LOADING_DATA,
    GET_NASA,
    GET_IMAGES,
    GET_POSTS,
    GET_POST,
    GET_ALBUMS,
    SEARCH_IMAGES,
    GET_COMMENTS,
    GET_PHOTOS
} from '../types';

const initState={
    nasa:{},
    images:[],
    posts:[],
    albums:[],
    comments:[],
    post:{},
    photos:[],
    loading:false
}

export default function (state=initState,action){
    switch(action.type)
    {
        case LOADING_DATA:
            return{
                ...state,
                loading:true
            }
         case GET_IMAGES:
            return{
                 ...state,
                 images:action.payload
            }
            case SEARCH_IMAGES:
                return{
                     ...state,
                     images:action.payload
                }            
         case GET_POSTS:
            return{
                 ...state,
                posts:action.payload
                }
        case GET_POST:
            return{
                 ...state,
                post:action.payload
                }
        case GET_COMMENTS:
            return{
                 ...state,
                comments:action.payload
                     }
        case GET_ALBUMS:
            return{
                 ...state,
                 albums:action.payload
                } 
        case GET_PHOTOS:
             return{
                 ...state,
                 photos:action.payload
                        } 
        case GET_NASA:
            return{
                ...state,
                nasa:action.payload
                 } 
                 default:
                    return state;               
    }
}