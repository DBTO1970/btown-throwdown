import React, { useState, useEffect} from "react";

const Countdown = () => {
    const [daysRemaining, setDaysRemaining] = useState(0);
    const [specialMessage, setSpecialMessage] = useState('days to go!');
    const targetDate = new Date('October 6, 2023');
    const today = new Date();
    
    const timeRemaining = targetDate.getTime() - today.getTime();
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24) + 1);
    useEffect(() => {
        
        setDaysRemaining(days);
        if (days === 7) {
            setSpecialMessage(' days without Phish make one weak.');
        } else if (days === 14) {
            setSpecialMessage(" Days, just like your game- too weak");
        } else if (days === 0) {
            setSpecialMessage(" Let's get this show on the road!");
        } else if (days === 1) {
            setSpecialMessage(" Day.  Can you feel it?");
        } else if (days === 2) {
            setSpecialMessage(" Days... Bag it, tag it!");
        } else if (days === 3) {
            setSpecialMessage(" Strange Days");
        } else if (days === 4) {
            setSpecialMessage(" for 20");
        } else if (days === 5) {
            setSpecialMessage(" Days.  Let's rock this week!");
        } else if (days === 23) {
            setSpecialMessage(" Mexican!");
        } else if (days === 24) {
            setSpecialMessage(" short, sweet days to go.");
        } else if (days === 33) {
            setSpecialMessage(" Turdy-tree");
        } else if (days === 42) {
            setSpecialMessage("0")
        } else if (days === 46) {
            setSpecialMessage(" Days and the coal ran out!")
        } else if (days === 50) {
            setSpecialMessage(" is Nifty!");
        } else if (days === 52) {
            setSpecialMessage(" Ray Lewis Day");
        } else if (days === 55) {
            setSpecialMessage("5! I can't drive 55!");
        } else if (days === 61) {
            setSpecialMessage(" Days-Let's get it on!");
        } else if (days < 0){
            
            setSpecialMessage("Are you having fun yet?")
        }
    }, [days]);
    return (
        <div id='bottom-text'>
            
                <h2 className="countdown">Countdown: <span> {daysRemaining} {specialMessage}</span></h2>
            
        </div>
    );
};

export default Countdown;