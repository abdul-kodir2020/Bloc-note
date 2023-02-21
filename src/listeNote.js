import React from 'react';
import ReactDom from 'react-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import ElementsInListe from './ElementsInListe';
class ListeNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="w-50 listeNote bg-secondary-subtle border border-dark-subtle rounded">
        <div class="w-100 bg-dark rounded text-white p-2 d-flex justify-content-between">
          <span>Liste des notes</span>
          <button class="plusButton text-white" onClick={this.props.addNote}>
            <AiOutlinePlusSquare size={25} />
          </button>
        </div>
        <div>
          <ElementsInListe
            listeNote={this.props.listeNote}
            deleteNote={this.props.deleteNote}
            listeNoteBlock={this.props.listeNoteBlock}
            showNote={this.props.showNote}
          />
        </div>
      </div>
    );
  }
}

export default ListeNote;