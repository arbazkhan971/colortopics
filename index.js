    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'violet'];
    const topics = ['Technology', 'Environment', 'Health', 'Education', 'Art', 'Sports', 'Science', 'History', 'Music', 'Food'];

    // function getRandomColor() {
    //     return colors[Math.floor(Math.random() * colors.length)];
    // }

    // function getRandomTopic() {
    //     return topics[Math.floor(Math.random() * topics.length)];
    // }

    function handleClick(event) {
        const color = event.target.style.backgroundColor;
        const topic = getRandomTopic();

        document.getElementById('topic').innerText = `Topic: ${topic}`;
        event.target.remove();
    }

    for (let i = 0; i < 10; i++) {
        const color = colors[i]
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;
        colorDiv.textContent = color;
        colorDiv.addEventListener('click', handleClick);
        document.getElementById('color-board').appendChild(colorDiv);
    }
