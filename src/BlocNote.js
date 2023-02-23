import React, { useState } from 'react';
import './style.css';
import ListeNote from './ListeNote';
import NoteBlock from './NoteBlock';
import Alert from './Alert';

function BlocNote() {
  const [listeNote, setListeNote] = useState([]);
  const [listeNoteBlock, setListeNoteBlock] = useState([]);
  const [content, setContent] = useState(false);

  const addNote = () => {
    if (listeNote.length == 0) {
      console.log('existe');
      const newNote = {
        id: Math.floor(Math.random() * 10000),
        text: '',
      };
      const newListe = [newNote, ...listeNote];
      setListeNote(newListe);
    } else {
      if (listeNote[0].text != '') {
        console.log('existe pas et pas vide');

        const newNote = {
          id: Math.floor(Math.random() * 10000),
          text: '',
        };
        const newListe = [newNote, ...listeNote];
        setListeNote(newListe);
      } else {
        setContent(true);
        const timer = setTimeout(() => {
          setContent(false);
        }, 2000);
      }
    }
  };

  const deleteNote = (e) => {
    console.log(e.target.name);
    const newListe = e.target.getAttribute('fill')
      ? listeNote.filter(
          (note) => String(note.id) !== e.target.parentElement.name
        )
      : listeNote.filter(
          (note) =>
            String(note.id) !== e.target.parentElement.parentElement.name
        );

    console.log(newListe);
    setListeNote(newListe);
    setListeNoteBlock([]);
  };

  const showNote = (e) => {
    const newNote = e.target.getAttribute('fill')
      ? {
          key: e.target.parentElement.name,
          content: listeNote[parseInt(e.target.parentElement.name)],
        }
      : {
          key: e.target.parentElement.parentElement.name,
          content:
            listeNote[parseInt(e.target.parentElement.parentElement.name)],
        };

    const newListe = [newNote];
    setListeNoteBlock(newListe);
    console.log(newNote);

    console.log(listeNoteBlock);
  };

  const closeNote = (e) => {
    const newListe = e.target.getAttribute('fill')
      ? listeNoteBlock.filter(
          (note) => String(note.key) !== e.target.parentElement.name
        )
      : listeNoteBlock.filter(
          (note) =>
            String(note.key) !== e.target.parentElement.parentElement.name
        );

    setListeNoteBlock(newListe);

    console.log(newListe);
    console.log(e.target);
  };

  const updateText = (e) => {
    const liste = [...listeNoteBlock];
    liste[parseInt(e.target.name)].content.text = e.target.value;
    setListeNoteBlock(liste);
    console.log(e.target.value);
    console.log(liste[parseInt(e.target.name)].content.text);
  };

  const hide = () => {
    setContent(false);
  };

  return (
    <div class="container w-100 pt-4">
      <h1 class="text-center">Bloc note</h1>
      <div class="mt-4 w-100 d-flex">
        <ListeNote
          listeNote={listeNote}
          addNote={addNote}
          deleteNote={deleteNote}
          listeNoteBlock={listeNoteBlock}
          showNote={showNote}
        />
        <div
          class={
            'w-50 sectionNote px-2 ' +
            (listeNoteBlock.length == 0 ? 'd-none' : '')
          }
        >
          <NoteBlock
            listeNoteBlock={listeNoteBlock}
            closeNote={closeNote}
            updateText={updateText}
          />
        </div>
      </div>
      <Alert content={content} hide={hide} />
    </div>
  );
}

export default BlocNote;
