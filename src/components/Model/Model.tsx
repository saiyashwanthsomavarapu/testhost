import { Box, Button, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import { useStyles } from './Model.styles';

interface CustomModalProps {
    open: boolean,
    onClose: any;
}
const Model = (props: CustomModalProps) => {
    const classes = useStyles();
    return (
        <Modal
            open={props?.open}
            onClose={props?.onClose}
            className={classes.modal}
        >

            <Box
                sx={{
                    position: 'relative',
                    minWidth: 600,
                    bgcolor: 'background.paper',
                    boxShadow: (theme) => theme.shadows[5],
                    pt: 7,
                    pr: 10,
                    pl: 5,
                    pb: 1
                }}
            >
                <CloseIcon className={classes.closeIcon} onClick={props?.onClose}/>
                <Typography id="server-modal-title" variant="h5" component="h2" sx={{ fontSize: 25}}>
                    Are you sure you want to remove John Doe?
                </Typography>
                <Typography id="server-modal-description" sx={{ pb: 2, fontSize: 13, mt: 1 }}>
                    John Doe will no longer be active on this plan and their data will be removed from this plan.
                </Typography>
                <Button  className={classes.cancelButton} variant='text' disableElevation disableRipple> No, Do not remove them</Button>
                <Button  className={classes.submitButton} variant='contained' disableElevation disableRipple> Yes, Remove Them</Button>
             </Box>
        </Modal>
    )
}

export default Model;