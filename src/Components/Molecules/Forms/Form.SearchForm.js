import React from 'react';
import styled from 'styled-components';

import {NavSearch} from '../../Atoms/Inputs/Input.NavSearch'
import {SearchInputButton} from '../../Atoms/Buttons/Button.SearchInputButton'

const SearchForm = styled.form`

`

export class SearchFormClass extends React.Component {

    render(){
        return(
            <SearchForm>
                <NavSearch></NavSearch>
                <SearchInputButton>Lupita</SearchInputButton>
            </SearchForm>
        )
    }
}