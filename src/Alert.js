import React, { useEffect } from 'react';

function Alert(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.hide;
    }, 2000);
  }, []);

  if (props.content) {
    return (
      <div class="mt-4 d-flex justify-content-center">
        <div class="alert alert-info w-75 text-center p-1" role="alert">
          Vous avez déjà ouvert une note vide
        </div>
      </div>
    );
  }
}

export default Alert;
