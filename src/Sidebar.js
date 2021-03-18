import React from 'react';
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationNoneIcon from "@material-ui/icons/NotificationsNone";
import  BookmarkBorderIcon  from '@material-ui/icons/BookmarkBorder';
import ListAltIcon  from '@material-ui/icons/ListAlt';
import  PermitIdentityIcon from '@material-ui/icons/PermIdentity';
import  MoreHorizonIcon  from '@material-ui/icons/MoreHoriz';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__tweeterIcon"/>
                <SidebarOption active Icon={HomeIcon} text="Home"/>
                <SidebarOption Icon={SearchIcon} text="Explore"/>
                <SidebarOption Icon={NotificationNoneIcon} text="Notifications"/>
                <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
                <SidebarOption Icon={ListAltIcon} text="Lists"/>
                <SidebarOption Icon={PermitIdentityIcon} text="Profile"/>
                <SidebarOption Icon={MoreHorizonIcon} text="More"/>
               
               <Button 
               className="sidebar__tweet"
               variant="outlined"
               fullWidth
               >Tweet</Button>
        </div>
    )
}

export default Sidebar;
