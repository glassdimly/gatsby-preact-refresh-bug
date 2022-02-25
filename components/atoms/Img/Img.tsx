import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './Img.module.scss';

interface ImgProps {
    src: string
}

// @TODO get image sizes automicatically based on the src
const Img:FunctionComponent<ImgProps> = ({src}) => <Image className={styles.purpleBorder} src={src} width="400" height="400" alt="not set" />

export default Img;