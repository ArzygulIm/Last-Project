import {combineReducers} from "redux";
import videos from "./youtube_reducer"
import youtubeDetails from "./Youtube_details"
import movies from "./movies_reducer";
import moviesDetails from "./movies_details"
import githubUser from "./github_reducer"
import githubFollows from "./githubFollow_reducer"
import cocktails from "./cocktails_reducer"
import cocktailDetails from "./cocktailDetails_reducer"
import githubRepos from "./githubRepos_reducer"
import giphy from "./giphy_reducer"
import news from "./news_reducer"
import pokemon from "./pokemon_reducer"
import createTodos from "./createTodo_reducer"
import todos from "./todo_reducer"
import message from "./todoMessages_reducer"
import user from "./randomUser_reducer"
import weather from "./weather_reducer"


const rootReducer = combineReducers({
    videos,
    youtubeDetails,
    movies,
    moviesDetails,
    githubUser,
    githubFollows,
    githubRepos,
    cocktails,
    cocktailDetails,
    giphy,
    news,
    pokemon,
    createTodos,
    todos,
    message,
    user,
    weather,



})
export default rootReducer

