import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCatImage} from '../actions/index';


const CatImage = props => {
    useEffect(() => {
        props.getCatImage();},
        [props.getCatImage]);

        if (props.isFetching) {
            return <h2>Fetched A Cat!</h2>
        }
        return (
            <div>
                <h1>Get a Dog!</h1>
                <img src={props.catImage} alt="catplace" />
                <button onClick={props.getDogImage}>See A New Cat</button>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        catImage: state.image.catImage,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect (mapStateToProps, {getCatImage})(CatImage);