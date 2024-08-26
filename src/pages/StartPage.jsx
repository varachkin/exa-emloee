import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { useEffect } from "react";


export default function StartPage({mode}) {
    const { language, themeMode } = useSelector(state => state.actionReducer)

    useEffect(()=> {

    }, [mode])
    return (
        <div
            className={`start_page_container ${mode}`}
        >
            <LoginForm />
        </div>
    )
}
