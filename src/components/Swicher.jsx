import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "../features/actions/actionSlice";
import { useEffect } from "react";

export const Swicher = ({ onClick, mode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeThemeMode(mode))
    }, [mode])

    return (
        <div className="container">
            <div className="switch">
                <label htmlFor="toggle">
                    <input id="toggle" className="toggle-switch" type="checkbox" onClick={onClick}/>
                        <div className="sun-moon"><div className="dots"></div></div>
                        <div className="background"><div className="stars1"></div><div className="stars2"></div></div>
                </label>
            </div>
        </div>
    )
}