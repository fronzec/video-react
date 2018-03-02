import React from 'react'

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
            <div style={styles.container}>
                <div>
                    <img src='./src/images/covers/bitcoin.jpg' width={260} height={160} />
                    <h3>¿Por qué aprender React?</h3>
                    <p>Eduardo Flores</p>
                </div>
            </div>
        )
    }
}

export default Media