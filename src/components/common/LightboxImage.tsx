import React, { useState } from 'react';
import { Modal, makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
	paper: {
        width: '80vw',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        outline: 'none'
    },
}));



type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const LightboxImage: React.FunctionComponent<Props> = (props) => {
    const { style, ...rest } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
		setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div style={style}>
            <img
                style={{ cursor: 'pointer' }}
                onClick={handleOpen}
                { ...rest }
            />
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <img {...rest} />
                </div>
            </Modal>
        </div>
    )
};

export default LightboxImage;
