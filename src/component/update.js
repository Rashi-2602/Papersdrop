import React, { Component} from 'react';
import axios from 'axios';

export default class Update extends Component{
    componentDidMount() {
  
      const data= {
        id: 101,
        title: 'soo',
        body: 'boo',
        userId: 1,
      }
  
      axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
        .then((response) => console.log(response.data))
        .then((json) => console.log(json));
    }

    render(){
        return(
            <div>
            </div>
        )
    }
  }