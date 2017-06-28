import React, {Component} from 'react';
import {InputGroup, FormGroup, FormControl,Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery'

class Global extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    search(){
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes/?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: "GET"})
        .then(response=>response.json())
        .then(json=>{
            let {items} = json;
            this.setState({items});
            console.log(this.state);
        });
    }
    render(){
        return (
            <div className="Global">
                <h2>Search For Book!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Search for Book!" 
                        onChange={(event)=>this.setState({query: event.target.value})}
                        onKeyPress={(event)=>{
                            if(event.key ==='Enter'){
                                this.search();
                            }
                        }}
                        />
                        <InputGroup.Addon>
                            <Glyphicon glyph="search" onClick={()=>{this.search()}}/>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery />
            </div>
            );
    }
}

export default Global