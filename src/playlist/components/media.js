import React from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends React.Component {

    ///Forma de ECMAScript7
    state = {
        author: 'Eduardo Flores'
    }
    ///Forma de ECMAScript6
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    //     // this.handleClick = this.handleClick.bind(this)///Cambio del contexto al metodo handleClick
    // }

    ///Los arrow function heredan el contexto de su padre automaticamente en vez de hacer el bind a cada metodo
    handleClick= (event) =>{
        console.log(this.props.tittle)
        this.setState({
            author:'Ricardo Celis'
        })
    }


    render() {
        ///Extrayendo los valores a propiedades
        const {title, author, image} = this.props;

        // const styles = {
        //     container: {
        //         fontSize: 14,
        //         backgroundColor: 'white',
        //         color: '#44546b',
        //         cursor: 'pointer',
        //         width: 280,
        //         border: '1px red solid'
        //     }
        // }
        return (
            <div className={'Media'} onClick={this.handleClick}>
                <div className={'Media-cover'}>
                    <img className={'Media-image'} src={this.props.cover} width={260} height={160}/>
                    <h3 className={'Media-title'}>{this.props.title}</h3>
                    <p className={'Media-author'}>{this.props.author}</p>
                </div>
            </div>
        )
    }
}
///Usamos prop-types para validar los tipos de datos que estan llegando al componente, se muestran como warnings en la consola del navegador
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio'])///Valida que el valor esperado este dentro de un conjunto de valores
}

export default Media