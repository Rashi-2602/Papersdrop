import React, { Component} from 'react';
import axios from 'axios';

export default class Create extends Component{
    componentDidMount() {
  
      const data= {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
            console.log(response.data);
        })
        .then((json) => console.log(json))
        .catch(function (error) {
            console.log(error);
          })
    }

    render(){
        return(
            <div>
            </div>
        )
    }
  }
