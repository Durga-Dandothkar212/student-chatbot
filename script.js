function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {

    const input = document.getElementById("userInput");
    const userText = input.value.trim();

    if(userText === ""){
        return;
    }

    const chatbox = document.getElementById("chatbox");

    chatbox.innerHTML +=
    `<div class="user-message"><b>You:</b> ${userText}</div>`;

    let reply = getBotResponse(userText.toLowerCase());

    setTimeout(() => {

        chatbox.innerHTML +=
        `<div class="bot-message"><b>Bot:</b> ${reply}</div>`;

        chatbox.scrollTop = chatbox.scrollHeight;

    },500);

    input.value = "";
}

function getBotResponse(message){

    const responses = {

        "hello":"Hello! Welcome to the Smart Student Assistant.",
        "hi":"Hi! How can I help you today?",
        "how are you":"I am doing great. Thanks for asking!",
        "your name":"I am Smart Student Assistant Bot.",
        "html":"HTML stands for HyperText Markup Language and is used to create web pages.",
        "css":"CSS is used to style and design web pages.",
        "javascript":"JavaScript adds interactivity and dynamic behavior to websites.",
        "python":"Python is a popular programming language used in AI, data science, and web development.",
        "java":"Java is an object-oriented programming language used for software and mobile app development.",
        "ai":"Artificial Intelligence enables computers to perform tasks that normally require human intelligence.",
        "exam":"Create a study schedule, revise regularly, and solve previous question papers.",
        "college":"Attend classes regularly and practice coding daily to improve your skills.",
        "thank you":"You're welcome! Happy to help.",
        "bye":"Goodbye! Best of luck with your studies!"
    };

    for(let key in responses){
        if(message.includes(key)){
            return responses[key];
        }
    }

    if(message.includes("date")){
        return "Today's Date: " +
        new Date().toLocaleDateString();
    }

    if(message.includes("time")){
        return "Current Time: " +
        new Date().toLocaleTimeString();
    }

    if(message.includes("weather")){
        return "I currently work offline and cannot access live weather information.";
    }

    return "Sorry, I don't understand that question. Please ask about programming, studies, AI, HTML, CSS, JavaScript, or exams.";
}