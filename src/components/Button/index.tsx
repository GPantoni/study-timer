import { Component, ReactNode } from 'react';
import style from './Button.module.scss';

interface IProp {
  children: ReactNode;
}

class Button extends Component<IProp> {
  render() {
    return <button className={style.button}>{this.props.children}</button>;
  }
}

export default Button;
