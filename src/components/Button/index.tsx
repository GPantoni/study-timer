import { Component, ReactNode } from 'react';
import style from './Button.module.scss';

interface IProp {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

class Button extends Component<IProp> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button type={type} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
