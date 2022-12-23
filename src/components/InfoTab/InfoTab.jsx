import React from 'react'
import BodyText from "components/BodyText/BodyText";
import Highlight from "components/BodyText/Highlight";
import Headline from "components/Headline/Headline";
import Image from "components/Image/Image";
import DecorativeImage from 'assets/decorative-image.png'
import BulletList from "components/BulletList/BulletList";
import ListItem from '../BulletList/ListItem';
import './InfoTab.scss';

const InfoTab = () => {
    return (
        <div className="info">
            <div className="quam-tristique">
                <Headline tag="h1">Quam Tristique Condimentum</Headline>
                <BodyText>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <Highlight>Curabitur blandit</Highlight> tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.
                </BodyText>
            </div>
            <div className="fringilla">
                <div className="row">
                    <div>
                        <Headline tag="h2">Fringilla Euismod Adipiscing Ipsum</Headline>
                        <BodyText>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.</BodyText>
                    </div>
                    <Image image={DecorativeImage} alt="Black painting on top of a pile of books" />
                </div>
                <BulletList>
                    <ListItem>Tellus Ullamcorper Inceptos</ListItem>
                    <ListItem>Magna Condimentum</ListItem>
                    <ListItem ident>Mattis Tristique</ListItem>
                    <ListItem ident>Pharetra Pellentesque Dapibus</ListItem>
                    <ListItem>Aenean Inceptos</ListItem>
                    <ListItem>Parturient Bibendum</ListItem>
                </BulletList>
            </div>

        </div>
    )
}

export default InfoTab