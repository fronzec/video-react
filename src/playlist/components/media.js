import React from 'react'
import './media.css'


class Media extends React.Component {
    render (){
        const styles = {
            container : {
                fontSize : 14,
                backgroundColor : 'white',
                color : '#44546b',
                cursor : 'pointer',
                width: 260,
                border: '1px red solid'
            }
        }
        return (
            <div className={'Media'}>
                <div className={'Media-cover'}>
                    <img className={'Media-image'} src='./src/images/covers/bitcoin.jpg' width={260} height={160} />
                    <h3 className={'Media-title'}>¿Por qué aprender React?</h3>
                    <p className={'Media-author'}>Eduardo Flores</p>
                </div>
            </div>
        )
    }
}

export default Media