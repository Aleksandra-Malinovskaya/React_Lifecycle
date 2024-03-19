import React from 'react'

class LifecycleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
          };
          this.increment = this.increment.bind(this);
    }

    componentDidMount(){
        const response = fetch('https://todo-redev.herokuapp.com/api/users', {
            method: 'GET',
            headers:
            {
                'accept': 'application/json',
            }
        })
        response.then(result => console.log(result.json()))
        .catch(error => console.log(error));
    }

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }
    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            console.log(this.state.count);
        }
    }

    componentWillUnmount(){
        console.log("Элемент будет размонтирован");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.count %2 === 0){
            return true;
        }
        return false;
    }

    render(){
        return <div>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>Увеличить</button>
        </div>
    }
}

export default LifecycleComponent;