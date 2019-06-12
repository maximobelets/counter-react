import React from 'react';
import Display from './Display';

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
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

    render () {
        return(
            <section>
                <Display name={this.state.count}/>
                <button onClick={this.clickHandlerPlus}>+</button>
                <button onClick={this.clickHandlerMinus}>-</button>
            </section>
        );
    };
};

export default Button;