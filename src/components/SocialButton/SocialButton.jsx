import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'



const SocialButton = (props) => {
    const {stringName, stringSize, iconColor} = props;
    const iconList = {nameIcon: {facebook: faFacebook, github: faGithub, linkedin: faLinkedinIn}, 
                      sizeIcon: {1: "2xs",2: "xs", 3: "sm", 4: "lg", 5: "xl", 6: "2xl"}};

    const iconName = iconList.nameIcon[stringName];
    const iconSize = iconList.sizeIcon[stringSize];
 
  return (
    <>
        <div style={{width:"2rem", height:"2rem", padding:"1rem", borderRadius:"1rem", borderWidth:"1px", 
                     borderColor:"black", display:"flex", flexDirection:"row", borderStyle:"solid",
                     justifyContent:"center", alignItems:"center"}}>
            <FontAwesomeIcon icon={iconName} size={iconSize} style={{color: {iconColor},}} />
        </div>
    </>
  );
};

export default SocialButton;