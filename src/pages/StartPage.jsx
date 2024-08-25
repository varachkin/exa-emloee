import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";


export default function StartPage() {
    const { language, themeMode } = useSelector(state => state.actionReducer)
console.log(themeMode)
    return (
        <div
            className={`start_page_container ${themeMode}`}
        >
            <LoginForm />
        </div>
    )
}
