import React, { useState } from 'react';
import './App.css';

const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={props.onSearch} />
            <label htmlFor="author">Auteur :</label>
            <input id="author" type="text" onChange={props.onAuthorSearch} />
            <label htmlFor="points">Points minimum :</label>
            <input id="points" type="number" onChange={props.onPointsSearch} />
        </div>
    );
};

const App = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://react.dev/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
        {
            title: 'React-router',
            url: 'https://react-router.com/',
            author: 'Jordan Jojo',
            num_comments: 2,
            points: 3,
            objectID: 2,
        },
    ];

    // state remonté ici
    const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem('search') ?? "");
    const [authorTerm, setAuthorTerm] = useState(() => localStorage.getItem('author') ?? "");
    const [minPoints, setMinPoints] = useState(() => localStorage.getItem('points') ?? 0);

    React.useEffect(() => {localStorage.setItem('search', searchTerm);}, [searchTerm]);
    React.useEffect(() => {localStorage.setItem('author', authorTerm);}, [authorTerm]);
    React.useEffect(() => {localStorage.setItem('points', minPoints);}, [minPoints]);

    const handlePointsSearch = (event) => {
        setMinPoints(event.target.value);
    };
    // filtrer la liste
    const searchedStories = stories.filter(
        (story) =>
            story.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            story.author.toLowerCase().includes(authorTerm.toLowerCase()) &&
            story.points >= minPoints
    );

    // A - fonction définie dans App
    const handleSearch = (event) => {
        // D- reçoit la valeur de search
        setSearchTerm(event.target.value);
    };

    const handleAuthorSearch = (event) => {
        setAuthorTerm(event.target.value);
    };

    return (
        <div>
            <h1>Hello React!</h1>
            {/* B- passage de la fonction en props */}
            <Search
                onSearch={handleSearch}
                onAuthorSearch={handleAuthorSearch}
                onPointsSearch={handlePointsSearch}
            />
            <hr />
            <p>Recherche actuelle : {searchTerm}</p>
            <p>
                Auteur recherché : {authorTerm} | Points minimum : {minPoints}
            </p>
            <List list={searchedStories} />
        </div>
    );
};

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item) => (
                <Item key={item.objectID} item={item} />
            ))}
        </ul>
    );
};

const Item = ({ item }) => {
    return (
        <li key={item.objectID}>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span> | {item.author}</span>
            <span> | {item.num_comments} comments</span>
            <span> | {item.points} points</span>
        </li>
    );
};

export default App;
