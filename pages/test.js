import Navbar from '../components/layout/Navbar';
import Link from "next/link";
import HeadInner from '../components/layout/Head';
import {useSpring, animated} from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05]

const trans = (x, y, s) => `perspective(1800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function Test (){
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const spring = useSpring({
        from: {
          opacity: 0,
          transform: 'rotateZ(0deg)'

        },
        delay: 700,

        to: {
          opacity:0.9,
          transform: 'rotateZ(-31deg)',
        },
        config: {
          mass: 1.5,
          tension: 50,
          friction: 8,
          


        }
      });

        return (
            <div className="homepage">
                <HeadInner/>
                <Navbar/>
                    <div className="home-image">
                            <div className="home-inner">
                                <div className="home-text">
                                    <h1 className="large">Hi,</h1>
                                    <h1 className="large-name">I'm Robert,</h1>
                                    <h1 className="large-name name-title">web developer.</h1>
                                    <p className="paragraph">I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products.</p>
                                    <div className="button-div">
                                        <Link href="/work"><button className="work-button">My Work</button></Link>
                                    </div>
                                    
                                </div>
                                <animated.div
                                    style={spring}
>
                                            <animated.div                                         
                                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                            style={{ transform: props.xys.interpolate(trans) }} >
                                                <img src="/RLogo.png" alt=".robert"  className="big-logo"/>
                                            </animated.div>
                                        </animated.div>

                            </div>    
                        </div>
                    </div>
        
        )

}



export default Test;