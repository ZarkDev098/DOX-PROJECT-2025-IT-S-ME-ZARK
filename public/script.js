const chatLog = document.querySelector('.chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        const chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message');
        chatMessage.textContent = userMessage;
        chatLog.appendChild(chatMessage);

        // Simple AI response
        const aiResponse = getAIResponse(userMessage);
        const aiMessage = document.createElement('div');
        aiMessage.classList.add('chat-message');
        aiMessage.textContent = aiResponse;
        chatLog.appendChild(aiMessage);

        userInput.value = '';
    }
});

function getAIResponse(message) {
    // Simple AI logic
    if (message.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (message.toLowerCase().includes('how are you')) {
        return 'I\'m doing well, thank you for asking!';
    } else {
        return 'I didn\'t understand that. Can you please rephrase?';
    }
}
