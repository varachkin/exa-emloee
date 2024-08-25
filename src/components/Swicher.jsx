import {useDispatch, useSelector} from "react-redux";
import {changeThemeMode} from "../features/actions/actionSlice";
import {useEffect} from "react";

export const Swicher = ({onClick, mode}) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(changeThemeMode(mode))
    }, [mode])
    return (
        <div className="wrapper_toggle">
            <div className="toggle">
                <input className="toggle-input" type="checkbox" onClick={onClick}/>
                <div className="toggle-bg"></div>
                <div className="toggle-switch">
                    <div className="toggle-switch-figure"></div>
                    <div className="toggle-switch-figureAlt"></div>
                </div>
            </div>
        </div>
    )
}