//          function       ***********************************************

function toSubmit(e, check) {
    e.preventDefault();

    if (check == 'push') {

        if (user.value == '' && email.value == '' && password.value == '') {
            alert('fill Inputs');
        }
        else {
            arr.push({
                name: user.value,
                email: email.value,
                password: password.value,
            });

            console.log(arr);

        }
    };

    if (check == 'check') {

        for (var i = 0; i < arr.length; i++) {
            if (checkEmail.value == arr[i].email) {

                userNameDetail.innerHTML = (arr[i].name);
                userEmailDetail.innerHTML = (arr[i].email);
                userPassetail.innerHTML = (arr[i].password);

            }
            else if (checkEmail.value != arr[i].email) {

                alert('Not Found');
            };
        }
    };

};

function dataInput(e, check) {

    if (check == 'user') {

        if (e.target.value.length < 1) {
            spn1.style.visibility = 'hidden';
        }
        else if (e.target.value.length < 2) {
            spn1.style.visibility = 'visible';
            spn1.style.color = '#ff0000';
            spn1.innerText = 'At Least 3 Charactors';
        }
        else if (e.target.value.length >= 3) {
            spn1.style.visibility = 'visible';
            spn1.style.color = '#00bb2f';
            spn1.innerText = 'Name is Valid';
        }


    }

    if (check == 'email') {

        if (e.target.value.length < 1) {
            spn2.style.visibility = 'hidden';
        }
        else if (e.target.value.indexOf('@gmail.co') == -1) {
            spn2.style.visibility = 'visible';
            spn2.style.color = '#ff0000';
            spn2.innerText = 'Email Address is Not Valid!';
        }
        else if (e.target.value.indexOf('@gmail.co') >= 1) {
            spn2.style.visibility = 'visible';
            spn2.style.color = '#00bb2f';
            spn2.innerText = 'Email Address is Valid';
        }

    }
    if (check == 'password') {
        if (e.target.value.length < 1) {
            spn3.style.visibility = 'hidden';
        }
        else if (e.target.value.length < 4) {
            spn3.style.visibility = 'visible';
            spn3.style.color = '#ff0000';
            spn3.innerText = 'Week Password !';
        }
        else if (e.target.value.length > 7) {
            spn3.style.visibility = 'visible';
            spn3.style.color = '#00bb2f';
            spn3.innerText = 'Strong Password';
        }

    }

}

//          Create An Array **********************************************

let arr = [
    {
        name: 'example',
        email: 'example@gmail.com',
        password: 'examplePassword',
    },
];

//          get Input & Span **********************************************

//          Sign Up Form Section

let user = document.getElementById('userName');
let email = document.getElementById('userEmail');
let password = document.getElementById('userPass');

let spn1 = document.getElementById('data1');
let spn2 = document.getElementById('data2');
let spn3 = document.getElementById('data3');

//          Sign In Form Section

let checkEmail = document.getElementById('checkEmail');
let checkpass = document.getElementById('checkpass');

//          Check User Data **********************************************

let userNameDetail = document.getElementById('userDetail-Name');
let userEmailDetail = document.getElementById('userDetail-Email');
let userPassetail = document.getElementById('userDetail-Pass');