import { Box, Typography } from "@mui/material"
import { TableEmloyee } from "./TableEmloyee"
import { useEffect, useState } from "react"
import { getEmployee } from "../API"

export const EmployeeInfo = ({ title }) => {
const [emploeeList, setEmployeeList] = useState([])
const [errorMessage, setErrorMessage] = useState('')
const [isLoading, setIsLoading] = useState(false)

useEffect(()=> {
    setIsLoading(true)
    getEmployee()
    .then(response => {
        if(response.status === 200){
            setEmployeeList(response.data)
        }else{
            setErrorMessage('Something went wrong')
        }
    })
    .catch(error => {
        setErrorMessage(error.message)
    })
    .finally(response => {
        setIsLoading(false)
    })
},[])

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'space-between',
                    xl: 'space-between'
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    xl: 'row'
                }
            }}>
                <Typography
                    component='h4'
                    variant='h4'
                    padding={2}
                    sx={{
                        flex: 1,
                        textAlign: {
                            xs: 'center',
                            sm: 'center',
                            md: 'right',
                            xl: 'right'
                        },
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <TableEmloyee data={emploeeList} isLoading={isLoading} errorMessage={errorMessage}/>
        </>
    )
}