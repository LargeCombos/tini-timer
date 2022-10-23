import './styles.css';
import {getCurrentTime, getCurrentDate} from './timer.js';

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
    currentDate.textContent = getCurrentDate();
    dateAndTimeDiv.appendChild(currentDate);

    const liveTime = document.createElement('div');
    liveTime.setAttribute('id', 'live-time');
    liveTime.textContent = getCurrentTime();
    dateAndTimeDiv.appendChild(liveTime);

    const timerDiv = document.createElement('div');
    timerDiv.setAttribute('id', 'timer');
    mainBody.appendChild(timerDiv);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'button-div');
    mainBody.appendChild(buttonDiv);

    const startBTN = document.createElement('button');
    startBTN.setAttribute('id', 'start-BTN');
    buttonDiv.appendChild(startBTN);

    const stopBTN = document.createElement('div');
    stopBTN.setAttribute('id', 'stop-BTN');
    buttonDiv.appendChild(stopBTN);
};