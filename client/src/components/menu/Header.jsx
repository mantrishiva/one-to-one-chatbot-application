import React, { useContext, useState } from "react";
import { CallMissedSharp, Chat} from "@material-ui/icons"; 
import { Box, InputBase, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";
// component
import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        padding: '21px 16px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'
    },
    icons: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: 2,
            padding: 8,
            color: '#919191'
        },
        '& :first-child': {
            fontSize: 22,
            marginRight: 8,
            marginTop: 3
        }
    }
})

const Header = () => {
    const { account } = useContext(AccountContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(true)
    }
    return (
        <>
            <Box className={classes.header}>
                <img className={classes.avatar} onClick={() => toggleDrawer()} src={account.imageUrl} alt="display-picture" />
                <Box className={classes.icons}>
                    <Chat />
                    <HeaderMenu />
                </Box>
            </Box>
            <InfoDrawer open={open} setOpen={setOpen} />
        </>
    );
}

export default Header;