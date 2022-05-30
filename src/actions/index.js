import {
    MOVIES_DETAILS,
    MOVIES_LIST,
    YOUTUBE_DETAILS,
    YOUTUBE_LIST,
    GITHUB_GET_USER,
    GITHUB_GET_FOLLOWERS,
    GITHUB_GET_FOLLOWINGS,
    LIST_GIF,
    LIST_COCKTAILS,
    LIST_SEARCH_COCKTAILS,
    LIST_COCKTAIL_DETAILS,
    FILTER_COCKTAILS,
    NEWS_LIST,
    POKEMON_LIST,
    CREATE_TO_DO,
    TO_DO_LIST,
    DONE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    RANDOM_USER_LIST, GET_WEATHER
} from "./type";
import axios from "axios";
import {
    YOUTUBE_API,
    GET_INFO_BY_ID_YOUTUBE,
    MOVIES_API_URL_POPULAR,
    MOVIES_API_KEY,
    MOVIES_API_URL_SEARCH,
    MOVIES_API,
    GITHUB_API,
    GIPHY_API,
    GET_ALL_COCKTAILS,
    SEARCH_COCKTAILS_BY_NAME,
    GET_DETAIL_BY_ID_COCKTAILS,
    FILTER_COCKTAILS_BY_ALCOHOL,
    NEWS_API,
    CREATE_TODO_API,
    GET_TODO_API,
    DONE_TODO_API,
    DELETE_TODO_API,
    EDIT_TODO_API,
    RANDOM_USER_API, WEATHER_API, WEATHER_KEY
} from "../config";

export const getVideosByName = (item) =>{
    return async (dispatch) =>{
        const res = await axios.get(YOUTUBE_API+item)
        dispatch({
            type:YOUTUBE_LIST,
            payload:res.data.items
        })
    }
}

export const getYoutubeDetails = (id) =>{
    return async(dispatch)=>{
        const res = await axios.get(GET_INFO_BY_ID_YOUTUBE+id)
        dispatch({
            type:YOUTUBE_DETAILS,
            payload:res.data.items[0]
        })
    }
}

export const clearYoutubeDetails = () =>{
    return async(dispatch)=>{
        dispatch({
            type:YOUTUBE_DETAILS,
            payload:{}
        })
    }
}

export const getPopularMovies = () =>{
    return async(dispatch) =>{
        const req = await fetch(MOVIES_API_URL_POPULAR,{
            headers:{
                "Content-Type" : "application/json","X-API-KEY":MOVIES_API_KEY
            }
        })
        const res = await req.json()
        dispatch({
            type:MOVIES_LIST,
            payload:res.films
        })
    }
}

export const getMovies = (name) =>{
    return async(dispatch) =>{
        const req = await fetch(MOVIES_API_URL_SEARCH+name,{
            headers:{
                "Content-Type" : "application/json","X-API-KEY":MOVIES_API_KEY
            }
        })
        const res = await req.json()
        dispatch({
            type:MOVIES_LIST,
            payload:res.films
        })
    }
}

export const getMoviesDetails = (id) =>{
    return async(dispatch)=>{
        const req = await fetch(MOVIES_API+id,{
            headers:{
                "Content-Type" : "application/json","X-API-KEY":MOVIES_API_KEY
            }
        })
        const res = await req.json()
        dispatch({
            type:MOVIES_DETAILS,
            payload:res
        })
    }
}

export const clearMoviesDetails = () =>{
    return async(dispatch)=>{
        dispatch({
            type:MOVIES_DETAILS,
            payload:{}
        })
    }
}

export const getUserByName = (name) =>{
    return async (dispatch) => {
        const req = await fetch(GITHUB_API+ name, {
            headers: {
                'Authorization': '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',
            },
            method: 'GET',
        })
        const res = await req.json()

        dispatch({
            type:GITHUB_GET_USER,
            payload:res
        })
    }
}

export const getGithubFollowers = (login)=>{
    return async (dispatch) => {
        const req = await fetch(GITHUB_API + login + '/followers', {
            headers: {
                'Authorization': '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',
            },
            method: 'GET',
        })
        const res = await req.json()
        dispatch({
            type:GITHUB_GET_FOLLOWERS,
            payload:res
        })
    }
}

export const getGithubFollowings = (login)=>{
    return async (dispatch) => {
        const req = await fetch(GITHUB_API + login + '/following', {
            headers: {
                'Authorization': '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',
            },
            method: 'GET',
        })
        const res = await req.json()
        dispatch({
            type:GITHUB_GET_FOLLOWINGS,
            payload:res
        })
    }
}

export const searchGifs = (name,count)=>{
    return async(dispatch) =>{
        const req = await fetch(GIPHY_API+count+'&q='+name)
        const res = await req.json()
        dispatch({
            type:LIST_GIF,
            payload:res.data
        })
    }
}

export const getAllCocktails = () =>{
    return async(dispatch)=>{
        const res = await axios.get(GET_ALL_COCKTAILS)
        dispatch({
            type:LIST_COCKTAILS,
            payload:res.data.drinks
        })
    }
}

export const searchCocktails = (name) =>{
    return async(dispatch)=>{
        const res = await axios.get(SEARCH_COCKTAILS_BY_NAME+name)
        dispatch({
            type:LIST_SEARCH_COCKTAILS,
            payload:res.data.drinks
        })
    }
}

export const getCocktailDetails = (id) =>{
    return async(dispatch)=>{
        const res = await axios.get(GET_DETAIL_BY_ID_COCKTAILS+id)
        dispatch({
            type:LIST_COCKTAIL_DETAILS,
            payload:res.data.drinks[0]
        })
    }
}

export const clearCocktailDetails = () =>{
    return async(dispatch)=>{
        dispatch({
            type:LIST_COCKTAIL_DETAILS,
            payload:{}
        })
    }
}

export const filterCocktails = (value) =>{
    return async(dispatch)=>{
        const res = await axios.get(FILTER_COCKTAILS_BY_ALCOHOL+value)
        dispatch({
            type:FILTER_COCKTAILS,
            payload:res.data
        })
    }
}

export const getNews = (value,page) =>{
    return async(dispatch)=>{
        const res = await axios.get(NEWS_API+`query=${value}&page=${page-1}`)
        dispatch({
            type:NEWS_LIST,
            payload:res.data
        })
    }
}

export const getAllPokemons = (pageurl) =>{
    return async(dispatch) =>{
        const res = await axios.get(pageurl)
        dispatch({
            type:POKEMON_LIST,
            payload:res.data
        })
    }
}

export const createTodo = (name,description) =>{
    return async(dispatch) =>{
        let data = {
            title: name,
            description: description
        }
        const req = await fetch(CREATE_TODO_API, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        const res = await req.json()
        dispatch({
            type:CREATE_TO_DO,
            payload:res
        })
        console.log(res)
    }
}

export const getAllTodos = () =>{
    return async(dispatch)=>{
        const req = await fetch(GET_TODO_API, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: "GET",
        })
        const res = await req.json()
        dispatch({
            type:TO_DO_LIST,
            payload:res
        })
        console.log(res)
    }
}

export const doneTodos = (id) =>{
    return async(dispatch)=>{
        const req = await fetch(DONE_TODO_API + id, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: "POST",

        })

        const res = await req.json()
        dispatch({
            type:DONE_TODO,
            payload:res
        })
        alert('ToDo is completed')
    }
}

export const deleteTodos = (id) =>{
    return async(dispatch)=>{
        const req = await fetch(DELETE_TODO_API + id, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: "DELETE",

        })
        const res = await req.json()

        dispatch({
            type:DELETE_TODO,
            payload:res
        })
    }
}

export const editTodos = (id,title,description) =>{
    return async(dispatch)=>{
        let data = {
            title:title,
            description:description
        }
        const req = await fetch(EDIT_TODO_API+ id, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        const res = await req.json()
        console.log(res)
        dispatch({
            type:EDIT_TODO,
            payload:res
        })
    }
}

export const getRandomUser = (value) =>{
    return async (dispatch) =>{
        const res = await axios.get(RANDOM_USER_API+value)
        dispatch({
            type:RANDOM_USER_LIST,
            payload:res.data.results
        })
    }
}

export const getWeather = (city) =>{
    return async (dispatch) =>{
        const res = await axios.get(WEATHER_API+city+WEATHER_KEY)
        dispatch({
            type:GET_WEATHER,
            payload:res.data
        })
    }
}

