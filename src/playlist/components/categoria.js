import React, {Component} from 'react'
import Playlist from './playlist'

class Categoria extends Component {
    render() {
        const categorias = this.props.data.categories
        console.log(categorias)
        return (
            <div>
                {categorias.map((item) => {
                        return <Playlist key={item.id} itemData={item}/>
                    }
                )}
            </div>
        );
    }
}

export default Categoria