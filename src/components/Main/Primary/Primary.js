import React, {useState} from 'react';
import {Link} from "react-router-dom";
import news from "../../../images/news.png"
import youtube from "../../../images/youtube.png"
import weather from "../../../images/weather.png"
import randomUser from "../../../images/user.png"
import giphy from "../../../images/giphy.png"
import github from "../../../images/github.png"
import toDo from "../../../images/to-do-list.png"
import kinopoisk from "../../../images/movie.png"
import cocktails from "../../../images/cocktail-glass.png"
import pokemon from "../../../images/pokemon.png"


const Primary = () => {
    const open = "<"
    const close = "/>"

    const [textNews, setTextNews] = useState(false)
    const [textYoutube, setTextYoutube] = useState(false)
    const [textWeather, setTextWeather] = useState(false)
    const [textRandomUser, setTextRandomUser] = useState(false)
    const [textGiphy, setTextGiphy] = useState(false)
    const [textGithub, setTextGithub] = useState(false)
    const [textTodo, setTextTodo] = useState(false)
    const [textMovies, setTextMovies] = useState(false)
    const [textCocktails, setTextCocktails] = useState(false)
    const [textPokemon, setTextPokemon] = useState(false)


    return (
        <section id={"primary"}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div onMouseOver={e => setTextNews(true)} onMouseLeave={e => setTextNews(false)}
                             className="primary-box">
                            <button>
                                <Link to={"/news"}>
                                    <img src={news} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textNews?"100px":"0"}} className="text">
                                            {textNews?"News":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextYoutube(true)} onMouseLeave={e => setTextYoutube(false)} className="primary-box">
                            <button>
                                <Link to={"/youtube"}>
                                    <img src={youtube} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textYoutube?"100px":"0"}} className="text">
                                            {textYoutube?"Youtube":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextWeather(true)} onMouseLeave={e => setTextWeather(false)} className="primary-box">
                            <button>
                                <Link to={'/weather'}>
                                    <img src={weather} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textWeather?"100px":"0"}} className="text">
                                            {textWeather?"Weather":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextRandomUser(true)} onMouseLeave={e => setTextRandomUser(false)} className="primary-box">
                            <button>
                                <Link to={'/random-user'}>
                                    <img  src={randomUser} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textRandomUser?"100px":"0"}} className="text">
                                            {textRandomUser?"Random User":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextGiphy(true)} onMouseLeave={e => setTextGiphy(false)} className="primary-box">
                            <button>
                                <Link to={'/giphy'}>
                                    <img src={giphy} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textGiphy?"100px":"0"}} className="text">
                                            {textGiphy?"Giphy":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextGithub(true)} onMouseLeave={e => setTextGithub(false)} className="primary-box">
                            <button>
                                <Link to={'/github'}>
                                    <img src={github} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textGithub?"100px":"0"}} className="text">
                                            {textGithub?"Github":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextTodo(true)} onMouseLeave={e => setTextTodo(false)} className="primary-box">
                            <button>
                                <Link to={'/todo'}>
                                    <img src={toDo} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textTodo?"100px":"0"}} className="text">
                                            {textTodo?"ToDo":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextMovies(true)} onMouseLeave={e => setTextMovies(false)} className="primary-box">
                            <button>
                                <Link to={'/movies'}>
                                    <img src={kinopoisk} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textMovies?"100px":"0"}} className="text">
                                            {textMovies?"Kinopoisk":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextCocktails(true)} onMouseLeave={e => setTextCocktails(false)} className="primary-box">
                            <button>
                                <Link to={'/cocktails'}>
                                    <img src={cocktails} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textCocktails?"100px":"0"}} className="text">
                                            {textCocktails?"Cocktails":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div onMouseOver={e => setTextPokemon(true)} onMouseLeave={e => setTextPokemon(false)} className="primary-box">
                            <button>
                                <Link to={'/pokemon'}>
                                    <img src={pokemon} alt=""/>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                         className="text-wrap">
                                        <h3>{open}</h3>
                                        <div style={{width:textPokemon?"100px":"0"}} className="text">
                                            {textPokemon?"Pokemon":""}
                                        </div>
                                        <h3>{close}</h3>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Primary;