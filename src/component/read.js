import React, { Component} from 'react';
import axios from 'axios';
let response = []
export default class Read extends Component{
    componentDidMount() {  
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=> console.log(response.data))
        .then((json) => console.log(json));
    }
    render(){
        return(
            <div>
            </div>
        )
    }
  }