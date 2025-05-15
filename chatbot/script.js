const faqData = {
    "What is this website about?": "This website helps students relieve exam stress through calming music, meditation tips, and a chatbot to answer queries.",
    "How can I contact you?": "You can contact us at examrelief@example.com or call us at +919900928157.",
    "What services do you offer?": "We offer stress-relieving activities like music, meditation, and a responsive chatbot.",
    "Can I access this website on mobile?": "Yes, our website is fully responsive and mobile-friendly.",
    "How do I use the chatbot?": "Just type your question, and the chatbot will provide an appropriate response.",
    "Hi": "Hello cupcake!!.. I'm Aura talk to me about anything, I'm here to sooth your mind.",
    "How are you?": "I'm great!! thanks for asking! How can I assist you today?.",
    "What’s your name?": "I'm Aura, but you can call me whatever you like! 😊 What can I do for you?.",
    "What do you like to do for fun?" : "I enjoy helping people like you! But I think chatting about fun topics, sharing jokes, and learning new things is great fun. What do you like to do?.",
    "What’s your favorite food?": "I don’t eat, but I know lots about food! Are you a fan of pizza or more of a sushi person?.",
    "Can you solve a riddle?": "I love riddles! Here's one: What has keys but can't open locks? (Answer: A piano!).",
    "Who was the first president of the United States?": "George Washington was the first president of the United States, serving from 1789 to 1797.",
    "What caused World War I?": "World War I was triggered by a combination of factors, including militarism, alliances, imperialism, and the assassination of Archduke Franz Ferdinand in 1914.",
    "What is the most popular game in 2024?": "As of 2024, games like 'Fortnite', 'Minecraft', and 'Valorant' are among the most popular, with millions of players worldwide.",
    "What is the longest river in the world?": "The Nile River is often considered the longest, stretching over 6,600 kilometers, though some argue the Amazon River might be longer in terms of water flow.",
    "Who wrote 'Romeo and Juliet'?":"William Shakespeare, one of the greatest playwrights in history, wrote 'Romeo and Juliet'.",
    "Can you dance?": "I wish I could! But I can definitely help you find dance tutorials or songs to groove to! 💃🕺.",
    "Do you know any cool facts?": "I sure do! Did you know that octopuses have three hearts and blue blood? Pretty amazing, right?.",
     "Are you a robot?":"I am a chatbot! So, not exactly a robot, but I’m here to assist you with anything you need.",
      "Do you have any hidden talents?":"I’m great at answering questions and making your day easier, but I don’t have hidden talents like singing or juggling… yet! 😂.",
      
      "Can you guess my age?": "Hmm, that’s tricky! I’m going to guess… 21? Am I close?.",




};

function getTime() {
    const now = new Date();
    return `${now.getHours()},${now.getMinutes().toString().padStart(2, '0')}`;
}

function handleMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    const chatMessages = document.getElementById("chatMessages");

    if (!userInput) return;

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = `${userInput}<span class="timestamp">${getTime()}</span>`;
    chatMessages.appendChild(userMessage);

    // Bot response
    const botResponse = faqData[userInput] || "I'm sorry, I didn't understand that. Please try rephrasing your question.";
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.innerHTML = `${botResponse}<span class="timestamp">${getTime()}</span>`;
    chatMessages.appendChild(botMessage);

    // Scroll to the bottom
    document.getElementById("userInput").value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
}