 //Make sure we wait to attach our handlers until the DOM is fully loaded
 document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    //Setup the event listener for the submit button
    const submitBurgerBtn = document.getElementById("submit-burger");
    const burgerTextArea = document.getElementById("burger-textarea");
    console.log(submitBurgerBtn);
    submitBurgerBtn.addEventListener('click', (event) => {
        //event.preventDefault();
        console.log('submitButton clicked');
        const newBurger = {
            burger_name: burgerTextArea.value.trim(),
            devoured: false
        };
        console.log(newBurger);
        // Send POST request to create a new quote
        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            // Make sure to serialize the JSON body
            body: JSON.stringify(newBurger),
        }).then(() => {
            // Empty the form
            burgerTextArea.value = '';

            // Reload the page so the user can see the new quote
            console.log('Created a new burger!');
            location.reload();
        });

    })
    //UPDATE
    //Pick up the class for all buttons
    const changeDevourBtns = document.querySelectorAll('.change-devour');
    //Set up the event listener for all the devoured buttons
    if (changeDevourBtns) {
        changeDevourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
            console.log("Update event triggered!");
            const id = e.target.getAttribute("data-id");
            const newDevourState = { devoured: true };
            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newDevourState),
            }).then((response) => {
                if (response.ok) {
                    console.log(`changes devoured to: ${newDevourState}`);
                    location.reload('/')
                } else {
                    alert('something went wrong!');
                }
            });
        });
        })
    }
})