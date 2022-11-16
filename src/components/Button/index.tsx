import { Component, ComponentProps } from 'react';

interface IButtonProps extends ComponentProps<'button'> {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

class Button extends Component<IButtonProps> {
    render() {
        return (
            <button>
                {this.props.children}
            </button>
        )
    }
}

export default Button;