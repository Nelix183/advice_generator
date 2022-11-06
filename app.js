const API_URL = "https://api.adviceslip.com/advice";
const ADVICE_ID_EL = document.querySelector('#advice_id');
const ADVICE_CONTENT_EL = document.querySelector('#advice_content');
const DICE = document.querySelector('#dice');
const TASK_LOAD = () =>{
    let adviceId = 0;
    let adviceContent = "";
    fetch(API_URL)
    .then(res => res.json())
    .then(wyn => {
    adviceId = wyn.slip.id;
    adviceContent = wyn.slip.advice;
    TASK_GENERATE(adviceId, adviceContent);
    });
}
const TASK_GENERATE = (adviceId, adviceContent) =>{
    ADVICE_ID_EL.innerText = adviceId;
    ADVICE_CONTENT_EL.innerText = adviceContent;
}
TASK_LOAD();
DICE.addEventListener('click', TASK_LOAD);


