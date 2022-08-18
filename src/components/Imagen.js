import React from 'react'

const Imagen =  (props) =>{

    const{largeImageURL,likes,previewURL,tags,views} = props.imagen;
    return(
        <div className='col-12 col-sm-6 col-md-5 col-lg-3 mb-4'>
            <div className='card'>
                <img src={previewURL} alt={tags} className='car-img-top'/>
                <div className='card-body'>
                    <p className='card-text'><strong>{likes} </strong>Me Gustas</p>
                    <p className='card-text'><strong>{views} </strong>Vistas</p>
                    <a href={largeImageURL} target="_blank" className='btn btn-primary btn-block'>Ver Imagen</a>
                </div>
            </div>
        </div>
    )

}

export default Imagen;