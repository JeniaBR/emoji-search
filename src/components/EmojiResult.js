import React from 'react';
import shortid from 'shortid';
import EmojiCard from './EmojiCard';
import './EmojiResult.css';
import './EmojiCard.css';

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

EmojiResult.propTypes = {
  onCopy: React.PropTypes.func.isRequired,
  emojiList: React.PropTypes.array.isRequired
};

const EmojiRow = ({onCopy, emojiArray}) => (
  <div className='row'>
    {emojiArray.map((emoji)=>{
      return(
        <EmojiCard onCopy={onCopy} key={shortid.generate()} emoji={emoji}/>
      );
    })}
  </div>
);

EmojiRow.propTypes = {
  onCopy: React.PropTypes.func.isRequired,
  emojiArray: React.PropTypes.array.isRequired
};


export default EmojiResult;