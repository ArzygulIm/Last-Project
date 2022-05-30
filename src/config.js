const API_AUTH_REG = 'https://jwt-ulios-test.herokuapp.com'
export const AUTHORIZATION_API = API_AUTH_REG + '/auth/sign-in'
export const REGISTRATION_API = API_AUTH_REG + '/auth/reg'

const API_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/'
export const GET_ALL_COCKTAILS = API_COCKTAILS + 'filter.php?c=Cocktail'
export const SEARCH_COCKTAILS_BY_NAME = API_COCKTAILS + 'search.php?s='
export const FILTER_COCKTAILS_BY_ALCOHOL = API_COCKTAILS + 'filter.php?a='
export const GET_DETAIL_BY_ID_COCKTAILS = API_COCKTAILS + 'lookup.php?i='
export const GET_INGREDIENT_INFO_COCKTAILS = API_COCKTAILS + 'search.php?i='

export const YOUTUBE_KEY = 'AIzaSyAHQHL9wztiTQVtHB2gnHVx8T9UufyexZU'
const YOUTUBE_RESULTS = 10
export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + YOUTUBE_RESULTS + '&key=' + YOUTUBE_KEY + '&q='
export const GET_INFO_BY_ID_YOUTUBE = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + YOUTUBE_KEY + '&id='

export const MOVIES_API_KEY = "dc1dc13e-ac8d-4b2d-9e77-ffd87bc9f0a8";
export const MOVIES_API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
export const MOVIES_API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
export const MOVIES_API = "https://kinopoiskapiunofficial.tech/api/v2.2/films/"

export const GITHUB_API = 'https://api.github.com/users/'

export const GIPHY_API = 'https://api.giphy.com/v1/gifs/search?api_key=WSqWCUpmqr5YsO9X1hzEhUYifimn35je&limit='

export const NEWS_API = 'http://hn.algolia.com/api/v1/search?'

export const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'

const TODO_API = 'https://jwt-ulios-test.herokuapp.com'
export const  CREATE_TODO_API = TODO_API+'/create-todo'
export const GET_TODO_API = TODO_API+'/get-all-todo'
export const DELETE_TODO_API = TODO_API+'/delete-todo/'
export const DONE_TODO_API = TODO_API+ '/done/'
export const EDIT_TODO_API = TODO_API+'/update-todo/'
export const GET_USERNAME_API = TODO_API+'/get-user-name'

export const RANDOM_USER_API = 'https://randomuser.me/api/?results='

export const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q='
export const WEATHER_KEY = '&appid=6bfff6c8edba06c7670ff71ac6c6cf7c'
export const GOOGLE_API = "https://www.google.com/maps/d/embed?mid=1onWkyiHWR3hl2iPTdCSvm2Ti5Ogj3P8q&ll="








