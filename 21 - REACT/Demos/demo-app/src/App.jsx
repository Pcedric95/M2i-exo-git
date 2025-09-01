import { useState } from 'react';
import './App.css';

const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={props.onSearch} />
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
    const [searchTerm, setSearchTerm] = useState("");

    // filtrer la liste
    const searchedStories = stories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) )

    // A - fonction définie dans App
    const handleSearch = (event) => {
        // D- reçoit la valeur de search
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <h1>Hello React!</h1>
            {/* B- passage de la fonction en props */}
            <Search onSearch={handleSearch} />
            <hr />
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
