import React, {Component} from 'react';
import './EmojiCard.css';

class EmojiCard extends Component {
    
    render(){
        let {title,symbol} = this.props.emoji;
        const codePointHex = symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return(
            <div className='col-md-3'>
                <div className='emoji-card'>
                    <img className='emoji-img' alt={title} src={src} width='64' height='64'/>
                    <div className='emoji-title'>{title}</div>
                    <div className='emoji-options'>
                       <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmojiCard;
