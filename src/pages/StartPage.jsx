import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";


export default function StartPage() {
    const { language } = useSelector(state => state.actionReducer)


    return (
        <div
            className="start_page_container"
        >
            <LoginForm />
        </div>
    )
}
