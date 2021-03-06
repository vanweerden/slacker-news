import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';

export class ThemeSwitchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }

  componentDidUpdate() {
    if (this.state.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'default');
    }
  }

  render() {
    return <ThemeSwitch clickHandler={this.toggleTheme}
                        isDarkMode={this.state.checked} />;
  }
}
