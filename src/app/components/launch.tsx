'use client';
import JSConfetti from "js-confetti";
import {ReactNode, useEffect, useState} from "react";
import textTheme from "@/lib/fonts";
import { worker } from "@/api/worker_api";

enum LaunchStates {
    PreLaunch,
    PostLaunch,
    Active
}

const Launch = ({app}: { app: ReactNode }) => {

    const [isLaunchActive, setIsLaunchActive] = useState(false);
    const [isLaunched, setIsLaunched] = useState(false);

    const [state, setState] = useState(LaunchStates.PreLaunch);
    // set to true to hide the launch initially
    const [hideLaunch, setHideLaunch] = useState(true);

    const _line1 = "Introducing";
    const _line2 = "the Official Website of the";
    const _line3 = "Old Anandian Engineers' Guild";

    const _lines = [_line1, _line2, _line3];

    const [lines, setLines] = useState(_lines);

    // effect to initialize variables
    useEffect(() => {
        worker.read().then(r => {
            setIsLaunchActive(r.isLaunchActive);
            const _isLaunched = r.isLaunched;
            setIsLaunched(_isLaunched);
            setHideLaunch(_isLaunched);
        });
    }, []);

    // set isLaunch variable in the store to true
    const _setIsLaunched = () => {
        worker.launchApp().then(r => console.log(r));
    }

    // function to handle launch
    const launch = () => {
        setIsLaunched(true);
        setState(LaunchStates.PostLaunch);

        // after 5s setState to Active
        setTimeout(() => {
            setState(LaunchStates.Active);
            _setIsLaunched();
        }, 5000);

    }

    // effect to throw confetti
    useEffect(() => {
        if (isLaunched && state === LaunchStates.Active) {
            // throw confetti
            //delay by 500ms
            setTimeout(() => {
                new Confetti().throw();

            }, 500);
            // after 1s hide the launch
            setTimeout(() => {
                setHideLaunch(true);
            }, 1000);
        }
    }, [state]);

    return <>
    {
        !hideLaunch && <div id={"launch"} className={`fixed z-[9999] w-full top-0 left-0  min-h-screen max-h-screen h-screen`}>
            <Slide
                currentState={state}
                slideState={LaunchStates.PreLaunch}>
                <div className={`flex flex-col justify-center items-center p-24 bg-white h-full`}>
                    <p className={`text-xl md:text-4xl mb-8 text-black
                     text-center ${textTheme.body.className}`}>
                        Explore the Past, Discover the Future 💫
                        </p>
                    <button className={`shadow-md rounded-3xl p-8 text-3xl md:text-6xl font-bold tracking-wide
        ${textTheme.title.className} ${isLaunchActive ? "bg-theme-yellow" : "bg-gray-500 text-gray-800"}`}
                            disabled={!isLaunchActive}
                            onClick={() => {
                                if(isLaunchActive) launch();
                            }}
                    >Launch 🚀
                    </button>
                </div>
            </Slide>
            <Slide currentState={state} slideState={LaunchStates.PostLaunch}>
                <div id={"post-launch"} className={`h-full flex flex-col
                justify-center items-center bg-black p-24`}>
                    <div className={`flex-1 flex flex-col justify-center items-center`}>
                        <div className={`bg-black z-1 absolute top-0 left-0 w-full h-full transition-transform
                     delay-1000 duration-1000 ${state === LaunchStates.PostLaunch ? "translate-x-full" : ""}`}></div>
                        <p className={`text-xl sm:text-5xl text-center text-white mb-5 tracking-wide ${textTheme.title.className}`}>{lines[0]}</p>
                        <p className={`text-sm sm:text-3xl text-center text-white mb-4 tracking-wide ${textTheme.title.className}`}>{lines[1]}</p>
                        <p className={`text-2xl sm:text-6xl text-center text-white tracking-wide ${textTheme.title.className}`}>{lines[2]}</p>
                    </div>
                    <p className={`text-xl text-center text-white`}>Powered by the OAEG Student Chapter</p>
                </div>
            </Slide>
        </div>
    }
        {
            isLaunchActive && app
        }
    </>
}

export default Launch;

const Slide = ({currentState, slideState, children}: {
    currentState: LaunchStates,
    slideState: LaunchStates,
    children: ReactNode
}) => {

    const [translate, setTranslate] = useState("");

    useEffect(() => {
        let count = currentState.valueOf();
        setTranslate(`${(100*count).toString()}vh`)

    }, [currentState, slideState, children]);

    return <div
        style={{
            transform: `translateY(-${translate})`
        }}
        className={`transition-transform duration-1000 h-full w-full`}>
        {children}
    </div>
}

class Confetti {
    private colors = ["#880000", "#FFBE34", "#ffffff"];

    public throw() {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            confettiRadius: 5,
            confettiNumber: 500,
            confettiColors: this.colors,
        });
    }
}