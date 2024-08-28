import { Box, Typography } from "@mui/material"
import DatePickerCustom from "./DatePickerCustom"
import TableCurrent from "./TableCurrent"

export const CurrentInfo = ({ title }) => {
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
                <DatePickerCustom label='Wybierz datę' />
                <Typography
                    component='h4'
                    variant='h4'
                    padding={2}
                    sx={{
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
            <TableCurrent />
        </>
    )
}