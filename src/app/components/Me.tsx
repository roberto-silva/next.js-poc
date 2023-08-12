import Link from "next/link";
import React from "react";
import style from "../styles/me.module.css"
import Image from 'next/image'
import me from '../../../public/images/me.jpg'
import Jobs from "./Jobs";

const Me = (props: any) => {

  return (
    <div className={style.about}>
        <Image src={me} className={style.image}
        alt="Picture of the author"
        width={250}
        height={250}/>

        <p className={style.p}> I&apos;m a Java developer specializing in Spring and Angular,
             seamlessly blending powerful backend capabilities with 
             user-friendly frontend interfaces. With a passion for 
             innovative solutions and a collaborative approach, 
             I consistently deliver top-notch software that goes beyond
              the ordinary.   
        </p>

        <Jobs/>
    </div>
 
  );
};

export default Me;