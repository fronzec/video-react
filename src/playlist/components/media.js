import React from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends React.Component {

    render() {
        ///Extrayendo los valores a propiedades
        const {title, author, image} = this.props;

        const styles = {
            container: {
                fontSize: 14,
                backgroundColor: 'white',
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px red solid'
            }
        }
        return (
            <div className={'Media'}>
                <div className={'Media-cover'}>
                    <img className={'Media-image'} src={this.props.image} width={260} height={160}/>
                    <h3 className={'Media-title'}>{this.props.title}</h3>
                    <p className={'Media-author'}>{this.props.author}</p>
                </div>
            </div>
        )
    }
}
///Usamos prop-types para validar los tipos de datos que estan llegando al componente, se muestran como warnings en la consola del navegador
Media.propTypes = {
    image: PropTypes.string,
    tittle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio'])///Valida que el valor esperado este dentro de un conjunto de valores
}

export default Media