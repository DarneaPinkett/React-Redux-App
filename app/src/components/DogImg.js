import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getDogImage} from '../actions/index';


const DogImage = props => {
    useEffect(() => {
        props.DogImage();},
        [props.DogImage]);

        if (props.isFetching) {
            return <h2>Fetched A Dog!</h2>
        }
        return (
            <div>
                <h1>Get a Dog!</h1>
                <img src={props.dogImage} alt="dogplace" />
                <button onClick={props.getDogImage}>See A New Dog</button>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        dogImage: state.image.dogImage,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect (mapStateToProps, {getDogImage})(DogImage);