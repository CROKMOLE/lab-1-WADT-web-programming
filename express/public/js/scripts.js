//alert
alert("hey, you are in!")

function strangeButtonFunction(button) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Generate random positions, ensuring the button stays within the viewport
    const randomX = Math.random() * (viewportWidth - button.offsetWidth);
    const randomY = Math.random() * (viewportHeight - button.offsetHeight);

    // Apply new position with smooth transition
    button.style.right = `${randomX}px`;
    button.style.bottom = `${randomY}px`;

    // change color
    button.style.backgroundColor =
        button.style.backgroundColor === "dimgray" ?
            "gray"
            :
            "dimgray"


}