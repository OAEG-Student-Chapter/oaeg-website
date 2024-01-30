'use client';
import JSConfetti from "js-confetti";
import {useEffect} from "react";

const Launch = () => {
    const colors = ["#880000", "#FFBE34", "#ffffff"];

    function confetti() {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            confettiRadius: 5,
            confettiNumber: 500,
            confettiColors: colors,
        });
    }

    useEffect(() => {
        confetti()
    }, [])
    return <></>
}

export default Launch;