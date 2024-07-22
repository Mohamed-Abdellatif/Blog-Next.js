import classes from "./hero.module.css"
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/palestine.jpg" alt="image showing max" width={300} height={300} priority/>
            </div>
            <h1 >Hi I'm Mohamed</h1>
            <p > I blog about web development - especially frontend frameworks like React or Angular</p>
        </section>
    );
};

export default Hero;
