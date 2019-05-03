import React, { Component } from 'react';

const Comics = (props) => {
    return (
        <div className="container sepTop">
            <div className="row">
                <div className="center">
                    <img src={props.comics.img} className="responsive-img" alt="" />
                </div>
            </div>
            
        </div>
    )
};

export default Comics;