"use client"

import { SearchType } from './components/SearchType';
import { SearchInput } from './components/SearchInput';
import { SearchArea } from './components/SearchArea';

import { CultureInfoSearchFlexBox } from './_html';

export const CultureInfoSearch = () => {

    return (
        <div>
            <SearchInput/>
            <CultureInfoSearchFlexBox>
                <SearchType/>
                <SearchArea/>
            </CultureInfoSearchFlexBox>
        </div>
    )
}