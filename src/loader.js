import './styles.css';
import {getCurrentTime, getCurrentDate, timer, tracksTime} from './timer.js';

/* This module loads everything for the first time. */

export default function loader() {
    const root = document.body;

    const mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('id', 'main-wrapper');
    root.appendChild(mainWrapper);

    const titleBar = document.createElement('div');
    titleBar.setAttribute('id', 'title-bar');
    mainWrapper.appendChild(titleBar);

    const mainTitle = document.createElement('div');
    mainTitle.setAttribute('id', 'header-title');
    mainTitle.textContent = 'Tini Timer';
    titleBar.appendChild(mainTitle);

    const mainBody = document.createElement('div');
    mainBody.setAttribute('id', 'main-content');
    mainWrapper.appendChild(mainBody);
    
    const dateAndTimeDiv = document.createElement('div');
    dateAndTimeDiv.setAttribute('id', 'date-and-time-div');
    mainBody.appendChild(dateAndTimeDiv);
    
    const currentDate = document.createElement('div');
    currentDate.setAttribute('id', 'current-date');
    currentDate.textContent = 'Todays current date is: ' + getCurrentDate();
    dateAndTimeDiv.appendChild(currentDate);

    const liveTime = document.createElement('div');
    liveTime.setAttribute('id', 'live-time');
    liveTime.textContent = 'The current time is: ' + getCurrentTime();
    dateAndTimeDiv.appendChild(liveTime);

    const timerDiv = document.createElement('div');
    timerDiv.setAttribute('id', 'timer');
    mainBody.appendChild(timerDiv);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'button-div');
    mainBody.appendChild(buttonDiv);

    const startBTN = document.createElement('button');
    startBTN.setAttribute('id', 'start-BTN');
    startBTN.classList.add('btn');
    startBTN.textContent = 'Start';
    buttonDiv.appendChild(startBTN);

    const stopBTN = document.createElement('button');
    stopBTN.setAttribute('id', 'stop-BTN');
    stopBTN.classList.add('btn');
    stopBTN.textContent = 'Stop';
    buttonDiv.appendChild(stopBTN);

    const eventHandlers = (() => {
        const startTimer = document.querySelector('#start-BTN');
        startTimer.addEventListener('onclick', tracksTime());

        const stopTimer = document.querySelector('#stop-BTN');
        stopTimer.addEventListener('onclick', () => {
            timer.active = false;
        });
    })();
};