import { useSelector } from "react-redux";
import * as React from 'react';
import { TabPanelCustom } from "../components/TabPanelCustom";
import { Header } from "../components/Header";


export default function HomePage(props) {
    const { language, themeMode } = useSelector(state => state.actionReducer)
    return (
        <div
            className={`home_page-container`}
        >
            <Header {...props}/>
            <TabPanelCustom />
        </div>
    )
}
