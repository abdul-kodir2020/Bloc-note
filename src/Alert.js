import React from 'react';

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    const timer = setTimeout(() => {
      this.props.hide;
    }, 2000);
  }
  render() {
    if (this.props.content) {
      return (
        <div class="mt-4 d-flex justify-content-center">
          <div class="alert alert-info w-75 text-center p-1" role="alert">
            Vous avez déjà ouvert une note vide
          </div>
        </div>
      );
    }
  }
}

export default Alert;
