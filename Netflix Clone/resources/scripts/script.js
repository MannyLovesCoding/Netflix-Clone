console.log('Running');

// Email Address Handler
function getStartedButton(inputElement) {
    console.log('Get started script is working');
    let requiredText;
    switch (inputElement) {
        case 1:
            inputElement = document.getElementById('emailinput1');
            requiredText = document.getElementById('email-required1');
            break;
        case 2:
            inputElement = document.getElementById('emailinput2');
            requiredText = document.getElementById('email-required2');
            break;
    }
    console.log(inputElement);
    if (inputElement.value  == '') {
        console.log('Email is required');
        requiredText.innerHTML = 'Email is required!';
        requiredText.style.visibility = 'visible';
        inputElement.style.borderBottom = '2px solid #ffa00a';
    } else if (!inputElement.value.includes('@') || !inputElement.value.includes('.')) {
        console.log('Enter a vaild Email');
        requiredText.innerHTML = 'Enter a vaild Email';
        requiredText.style.visibility = 'visible';
        inputElement.style.borderBottom = '2px solid #ffa00a';
    } else {
        requiredText.style.visibility = 'hidden';
        inputElement.style.borderBottom = 'none';
        location.href = './login.html';
    }
}

if (location.href.includes('index')) {
    for (let i = 1; i <= 7;i++) {
        document.getElementById(`answer${i}`).style.visibility = 'hidden';
        document.getElementById(`answer${i}`).innerHTML = ''; 
    }
}

// Frequently Asked Questions Handler
// Change the sentence to one sentence by usng \n to create new lines so u can change the inner html 
function openQuestion(answer) { 
    console.log('Asked Questions Script is running');
    let answerElement;
    let arrowElement;
    switch (answer) {
        case 1:
            console.log('Case 1');
            answerElement = document.getElementById('answer1');
            arrowElement = document.getElementById('arrow1');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 1) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
        case 2:
            console.log('Case 2');
            answerElement = document.getElementById('answer2');
            arrowElement = document.getElementById('arrow2');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $5.99 to $20.99 a month. No extra costs, no contracts.`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 2) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
        case 3:
            console.log('Case 3');
            answerElement = document.getElementById('answer3');
            arrowElement = document.getElementById('arrow3');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply. <a style="color: white;" href="https://help.netflix.com/en/node/126831">Learn more</a>`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 3) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
        case 4:
            console.log('Case 4');
            answerElement = document.getElementById('answer4');
            arrowElement = document.getElementById('arrow4');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 4) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
        case 5:
            console.log('Case 5');
            answerElement = document.getElementById('answer5');
            arrowElement = document.getElementById('arrow5');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 5) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
        case 6:
            console.log('Case 6');
            answerElement = document.getElementById('answer6');
            arrowElement = document.getElementById('arrow6');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 6) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
        case 7:
            console.log('Case 7');
            answerElement = document.getElementById('answer7');
            arrowElement = document.getElementById('arrow7');
            if (answerElement.style.visibility  == 'visible') {
                console.log('Already Visible');
                answerElement.style.visibility = 'hidden';
                answerElement.innerHTML = '';
                arrowElement.style.transform = 'rotate(45deg)';
                answerElement.style.padding = '0px';
                break;
            }
            answerElement.style.visibility = 'visible';
            answerElement.innerHTML = `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`;
            answerElement.style.padding = '30px';
            arrowElement.style.transform = 'rotate(1deg)';
            for (let i = 1; i <= 7;i++) {
                if (i == 7) {
                    continue;
                }
                document.getElementById(`answer${i}`).style.visibility = 'hidden';
                document.getElementById(`answer${i}`).style.padding = '0';
                document.getElementById(`answer${i}`).innerHTML = ''; 
                document.getElementById(`arrow${i}`).style.transform = 'rotate(45deg)';
            }
            break;
            break;
    }
} 

console.log('Login Found!');

// Login
for (let i = 1; i <=2; i++) {
    document.getElementById(`login-alert${i}`).innerHTML = '';
}

function login() {
    console.log('Login Script Working');

    let blankEmail = false
    let invaildPhone = false;
    let invaildEmail = false;
    let invaildPassword = false;

    const input1 = document.getElementById('emailnphone');
    const input2 = document.getElementById('password');
    const alert1 = document.getElementById('login-alert1');
    const alert2 = document.getElementById('login-alert2')

    if (input1.value == 0) {
        blankEmail = true;
    } 
    if (!input1.value.includes('@') || !input1.value.includes('.')) {
        if (input1.value[0] == 'a' || input1.value[0] == 'b' || input1.value[0] == 'c' || input1.value[0] == 'd' || input1.value[0] == 'e' || input1.value[0] == 'f' || input1.value[0] == 'g' || input1.value[0] == 'h' || input1.value[0] == 'i' || input1.value[0] == 'j' || input1.value[0] == 'k' || input1.value[0] == 'l' || input1.value[0] == 'm' || input1.value[0] == 'n' || input1.value[0] == 'o' || input1.value[0] == 'p' || input1.value[0] == 'q' || input1.value[0] == 'r' || input1.value[0] == 's' || input1.value[0] == 't' || input1.value[0] == 'u' || input1.value[0] == 'v' || input1.value[0] == 'w' || input1.value[0] == 'x' || input1.value[0] == 'y' || input1.value[0] == 'z') {
            invaildEmail = true;
        }
    } 
    if (input1.value.includes('1') || input1.value.includes(2) || input1.value.includes(3) || input1.value.includes(4) || input1.value.includes(5) || input1.value.includes(6) || input1.value.includes(7) || input1.value.includes(8) || input1.value.includes(9)) {
        console.log('Has Number');
        if (input1.value.length < 7) {
            invaildPhone = true;
        }
    }

    if (input2.value.length < 3 || input2.value.length > 60) {
        invaildPassword = true;
    }

    if (blankEmail == true) {
        alert1.innerHTML = 'Please enter a valid email or phone number.';
        alert1.style.visibility = 'visible';
        input1.style.borderBottom = '2px solid #ffa00a';
    }
    else if (invaildPhone == true) {
        alert1.innerHTML = 'Please enter a valid phone number.';
        alert1.style.visibility = 'visible';
        input1.style.borderBottom = '2px solid #ffa00a';
    }
    else if (invaildEmail == true) {
        alert1.innerHTML = 'Please enter a valid email.';
        alert1.style.visibility = 'visible';
        input1.style.borderBottom = '2px solid #ffa00a';
    } else {
        alert1.innerHTML = '';
        alert1.style.visibility = 'hidden';
        input1.style.borderBottom = 'none';
    }

    if (invaildPassword == true) {
        alert2.innerHTML = 'Your password must contain between 4 and 60 characters.';
        alert2.style.visibility = 'visible';
        input2.style.borderBottom = '2px solid #ffa00a';
    } else {
        alert2.innerHTML = '';
        alert2.style.visibility = '';
        input2.style.borderBottom = '';
    }
}x

