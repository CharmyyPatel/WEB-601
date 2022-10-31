import React, {useState} from "react";
import {Card, Col} from "antd"
// import React, { Component } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { MdEmojiPeople } from 'react-icons/md';
import { GiCalendarHalfYear } from 'react-icons/gi';

export default function Movie(props){

    const [MovieAge, setMovieAge] = useState(2022-props.Year)

    return(
        <Col span={10}>
            <Card MovieDetails = "Movie Details" style={{ width: 1000}}>
                <h2><BiCameraMovie /> Movie Name: {props.MovieName}</h2>
                <h2><GiCalendarHalfYear /> Released Year: {props.Year}</h2>
                <h2><BiCategory /> Genre: {props.Genre}</h2>
                <h2><MdEmojiPeople /> Director: {props.Director}</h2>
                <h2>Age: {MovieAge}</h2>
                <hr />
            </Card>
        </Col>
    )

}