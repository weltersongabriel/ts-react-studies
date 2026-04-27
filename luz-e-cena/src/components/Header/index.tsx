import React from "react"
import HeaderList from "./components/HeaderList"
import HeaderListItem from "./components/HeaderListItem"
import Logo from "../Logo"
import HeaderFormFilters from "./components/HeaderFormFilters"
import HeaderLinks from "./components/HeaderLinks"
import HeaderActions from "./components/HeaderAction"

const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src='/logo.png' />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
            </HeaderList>
        </header>
    )
}

export default Header