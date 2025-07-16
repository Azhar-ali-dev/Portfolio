// Chatbot responses
const responses = {
    skills: "I'm skilled in JavaScript, Java, Python, MERN Stack (MongoDB, Express.js, React, Node.js), MySQL, REST APIs, Webhooks, Git, Postman, and JWT. I also have strong project management and mentoring abilities.",
    
    projects: "My key projects include:\n• ITEG Management System (Full-stack MERN application)\n• Machinery Rental Management System (Mentored project using Java & MySQL)\n• Multiple mentored development projects leading to successful student placements",
    
    education: "I recently completed my MCA (Master of Computer Applications) from Dr. A.P.J. Abdul Kalam University, building on my B.Sc. degree. My education focused on software engineering, full-stack development, and modern web technologies.",
    
    experience: "I have hands-on experience in full-stack development, team leadership, and mentoring. I've built technical platforms, led development teams, and successfully mentored students towards job placements in the tech industry.",
    
    contact: "You can reach me at:\n📧 Email: aazahar025@gmail.com\n💼 LinkedIn: [Check contact section]\n🔗 GitHub: [Check contact section]\n\nFeel free to download my resume or use the contact form on this portfolio!"
};

let chatOpen = false;

function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    const chatToggle = document.getElementById('chatToggle');
    
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatBody.classList.remove('collapsed');
        chatToggle.style.transform = 'rotate(180deg)';
    } else {
        chatBody.classList.add('collapsed');
        chatToggle.style.transform = 'rotate(0deg)';
    }
}

function addMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message';
    messageContent.style.whiteSpace = 'pre-line'; // Preserve line breaks
    messageContent.textContent = message;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function selectOption(option) {
    const chatOptions = document.getElementById('chatOptions');
    
    // Add user selection as message
    const optionLabels = {
        skills: '💻 Skills & Technologies',
        projects: '🚀 Projects', 
        education: '🎓 Education',
        experience: '💼 Experience',
        contact: '📧 Contact Info'
    };
    
    addMessage(optionLabels[option], true);
    
    // Hide options during response
    chatOptions.classList.add('hidden');
    
    // Add bot response after a short delay
    setTimeout(() => {
        addMessage(responses[option], false);
        
        // Show options again after response
        setTimeout(() => {
            addMessage("What else would you like to know?", false);
            chatOptions.classList.remove('hidden');
        }, 1500);
    }, 500);
}

// Initialize chatbot as collapsed
document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chatBody');
    chatBody.classList.add('collapsed');
});