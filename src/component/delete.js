import React, { Component} from 'react';
import axios from 'axios';

export default class Delete extends Component{
    componentDidMount() {
   
      axios.delete('https://jsonplaceholder.typicode.com/posts/1')
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