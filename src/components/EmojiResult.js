import React from 'react';
import shortid from 'shortid';
import EmojiCard from './EmojiCard';
import './EmojiCard.css'

const EmojiResult = ({onCopy, emojiList}) => (
  <div className="emoji-result">
    {emojiList.map((emoji) => {
      return (        
        <EmojiRow key={shortid.generate()} onCopy={onCopy} emojiArray={emoji}/>
        );
      })
    }
  </div>
);

const EmojiRow = ({onCopy, emojiArray}) => (
  <div className='row'>
    {emojiArray.map((emoji)=>{
      return(
        <EmojiCard onCopy={onCopy} key={shortid.generate()} emoji={emoji}/>
      );
    })}
  </div>
);

export default EmojiResult;