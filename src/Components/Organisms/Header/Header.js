import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
    background-color: #fff159;
    border: 0;
    position: relative;
`

/*export function HeaderFunction(){

    return (
        <MainHeader>asd</MainHeader>
    )
}*/

export class HeaderClass extends React.Component {
    /*constructor(props){
        super(props);
        
    }*/

    render(){
        return (
            <MainHeader>asd</MainHeader>
        )
    }
}