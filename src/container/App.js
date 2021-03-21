import React,{useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


function App(){
    // constructor(){
    //     super()
    //     this.state={
    //         robots:[],
    //         searchfield:''
    //     }
    // }
    const [robots,setRobots]=useState([]);
    const [searchfield,setSearchfiel]=useState('');
    const onSearchChange=(event)=>{
        setSearchfiel(event.target.value)
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response=> response.json())
    //       .then(users => {this.setState({ robots: users})});
    // }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)});
    },[])
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length===0)
    {
        return <h1 className='tc'>Loading...</h1>
    }
    else{
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                < CardList robots={filteredRobots} />
            </Scroll>
        </div>
        );
    }
    
}
export default App;