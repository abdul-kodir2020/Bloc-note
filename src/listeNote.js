import React from 'react';
import ReactDom from 'react-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import ElementsInListe from './ElementsInListe';

function ListeNote(props) {
  return (
    <div
      class={
        'listeNote bg-secondary-subtle border border-dark-subtle rounded liste ' +
        (props.listeNoteBlock.length == 0 ? 'w-100' : 'w-50')
      }
    >
      <div class="w-100 bg-dark rounded text-white p-2 d-flex justify-content-between">
        <span>Liste des notes</span>
        <button class="plusButton text-white" onClick={props.addNote}>
          <AiOutlinePlusSquare size={25} />
        </button>
      </div>
      <div>
        <ElementsInListe
          listeNote={props.listeNote}
          deleteNote={props.deleteNote}
          listeNoteBlock={props.listeNoteBlock}
          showNote={props.showNote}
        />
      </div>
    </div>
  );
}

export default ListeNote;
