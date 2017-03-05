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
                    <div data-clipboard={symbol} className='emoji-img'><img alt={title} src={src} width='64' height='64'/></div>
                    <div className='emoji-title'>{title}</div>
                </div>
            </div>
        );
    }
}

export default EmojiCard;
