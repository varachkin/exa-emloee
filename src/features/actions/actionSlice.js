import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    language: 'pl',
    serial: 'CLK01-999-99-98',
    // serial: 'CLK01-024-22-24',
}
export const actionsSlice = createSlice({
    name: 'actions',
    initialState: () => initialState,
    reducers: {
        changeLanguage: (state, actions) => {
            state.language = actions.payload
        },
        setSerialOfMachine: (state, actions) => {
            state.serial = actions.payload
        },
        changeDevMode: (state) => {
            state.devMode = !state.devMode
        },
        changeEmployeeMode: (state) => {
            state.employeeMode = !state.employeeMode
        },
        changePreAuthorizationTerminal: (state) => {
            state.terminal_preauthorization_payment = !state.terminal_preauthorization_payment
        },
        changeQRCodeMode: (state) => {
            state.QRCodeMode = !state.QRCodeMode
        },
        changeMobileAppMode: (state) => {
            state.mobileAppMode = !state.mobileAppMode
        },
        setTechBreak: (state, actions) => {
            state.technical_break = actions.payload
        },
        setCheckingTechnicalBreak: (state, actions) => {
            state.isCheckingTechBreak = actions.payload
        }
    }
})

export const { 
    changeLanguage, 
    setSerialOfMachine, 
    changeDevMode, 
    setTechBreak, 
    setCheckingTechnicalBreak, 
    changeQRCodeMode, 
    changeMobileAppMode, 
    changeEmployeeMode,
    changePreAuthorizationTerminal
} = actionsSlice.actions;
export default actionsSlice.reducer;