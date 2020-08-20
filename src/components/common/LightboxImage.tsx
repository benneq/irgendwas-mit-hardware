import React, { useState } from 'react';
import { Modal, makeStyles, Fade } from '@material-ui/core';
import { RemoveScroll } from 'react-remove-scroll';



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
	paper: {
        width: '80vw',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
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
                style={{ cursor: 'zoom-in' }}
                onClick={handleOpen}
                { ...rest }
            />
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <Fade in={open}>
                    <RemoveScroll className={classes.paper}>
                        <img {...rest} />
                    </RemoveScroll>
                </Fade>
            </Modal>
        </div>
    )
};

export default LightboxImage;
