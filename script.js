function changeContent(page) {
    var contentDiv = document.getElementById('content');
 
    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
            <image src="images\download.png"
            alt="no image present" height="75" width="75" padding="700"></image>
                <h2>
                    Welcome to Arc Belso!
                </h2>
                <p>
                    This is the main page of our single page application!
                </p>
                <p>
                    Explore the different sections using
                    the navigation menu.
                </p>
            `;
            break;
        case 'about':
            contentDiv.innerHTML = `
                <h2>About Us</h2>
                <p>
                    Arc Belso was founded with a vision and dearth 
                    for quality content management in writing and hiring.
                </p>
                <p>
                    We're passionate about creating contnet and hiring.
                </p>
            `;
            break;
        case 'contact':
            contentDiv.innerHTML = 
                `<h2>Contact Us</h2> 
                <p>
                    Feel free to reach out to us!
                </p> 
                <form> 
                   <label for="name">Name:</label> 
                   <input type="text" id="name" name="name" 
                          placeholder="Your Name" required>
                   <label for="email">Email:</label> 
                   <input type="email" id="email" name="email" 
                          placeholder="Your Email" required>
                   <label for="message">Message:</label> 
                   <textarea id="message" name="message" 
                             placeholder="Your Message" 
                             rows="4" required>
                    </textarea>
                   <button type="submit">Send Message</button> 
                </form>`;
            break;
 
        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
