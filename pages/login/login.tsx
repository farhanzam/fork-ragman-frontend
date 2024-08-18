import * as styles from './style'
import Image from 'next/image'
// import { GoogleLoginButton, UserProfile } from '@/components/Auth'
import { GoogleLoginButton } from '@/components/Auth'
import { GithubLoginButton} from '@/components/Auth'


const Main = () => {
    return (
        <div style = {styles.containerStyle}>
            <div style = {styles.header}>
                <div style = {styles.logo}>
                    <Image
                        fill
                        src="/favicon.ico"
                        alt="logo"
                    />
                </div>
            </div>

            <div style = {styles.body}>
                <div style = {styles.leftSide}>
                    <div style = {styles.leftContainer}>
                        <div style = {styles.imageContainer}>
                            <Image
                                fill
                                src = "/assets/profile.png"
                                sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt ="profile"
                            />
                        </div>

                        <div style = {styles.loginButtonContainerStyle}>
                            <GoogleLoginButton />
                            {/* <UserProfile /> */}
                            <div style={{height: '20px'}}></div>  {/* creates empty space between the two buttons */}
                            <GithubLoginButton />
                        </div>
                    </div>
                </div>

                <div style = {styles.rightSide}>
                    <div style = {styles.anteaterContainer}>
                        <Image
                            fill
                            src = "/assets/ai_cyberpunk_anteater.png"
                            alt = "profile"
                        />
                    </div>
                    <div style = {styles.textBox}>
                        <div style = {styles.welcomeText}>
                            Zot Zot Zot!
                        </div>
                        <div style = {styles.expoText}>
                            ZotGPT will help you with your homework. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Main;
