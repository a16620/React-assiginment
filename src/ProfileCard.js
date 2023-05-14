import styled from "styled-components";
import { IconContext } from "react-icons";
import {BsGithub, BsFacebook, BsGooglePlay ,BsInstagram} from 'react-icons/bs';

const ProfileCard = () => {
    return (
        <ProfileContainer>
            <ExternalLinkCont>
                <IconContext.Provider value={{color: 'white', size: '22px'}}>
                    <BsFacebook/>
                    <BsGithub/>
                    <BsGooglePlay/>
                    <BsInstagram/>
                </IconContext.Provider>
            </ExternalLinkCont>
            <Spliter/>
            <Name>LR의<br/>IT블로그</Name>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
	display: flex;
    align-items: center;
    flex-direction: column-reverse;
    background-color: #1748a7;
    height: 100vh;
    width: 30vw;
`;

const Name = styled.p`
    color: white;
    text-align: start;
    font-size: 30pt;
    width: 85%;
    margin-bottom: 15px;
`;

const Spliter = styled.p `
    width: 90%;
    border-top: solid 1px white;
    padding: 0%;
    margin: 0%;
`;

const ExternalLinkCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 15px 2px 15px 2px;
`;

export default ProfileCard;