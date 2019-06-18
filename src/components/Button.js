import React from 'react';
import Display from './Display';
import './Button.css';

class Button extends React.Component {
    
    state = {
        count: 0
    };

    clickHandlerPlus = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    clickHandlerMinus = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    clickHandlerRandom = () => {
        this.setState({
            count: this.state.count = Math.floor(Math.random() * 100)
        });
    };

    render () {
        return(
            <section>
                <Display name={this.state.count}/>
                <button onClick={this.clickHandlerPlus}>Plus</button>
                <button onClick={this.clickHandlerMinus}>Minus</button>
                <button onClick={this.clickHandlerRandom}>Radom</button>
            </section>
        );
    };
};

export default Button;