// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    var Name  = document.getElementById('Favorite1').value;
    var Color = document.getElementById('Favorite2').value;
    var Song = document.getElementById('Favorite3').value;
    var Friend  = document.getElementById('Favorite4').value;

  
    // Define allowed credentials (replace with your actual credentials)
    var allowedCredentials = [
      { Name: 'Fadil', Color: 'Tabaare', Song: 'Okay', Friend: 'Fadil'},
      { Name: 'All', Color: 'Red And Black', Song: 'Dakanda', Friend: 'Fuziemata' }
    ];
  
    // Check if entered credentials match any allowed credentials
    var isValid = allowedCredentials.some(function(cred) {
      return cred.Name === Name && cred.Color === Color && cred.Song === Song && cred.Friend === Friend;
    });
  
    if (isValid) {
      // Redirect to another page upon successful validation
      window.location.href = 'Index.html'; // Change to your actual welcome page URL
    } else {
      alert('Invalid Name, Color, Song Or Friend Name. Please try again.');
    }
  });
  let innerTexts = document.querySelectorAll('.text-wraper .innerText');
if(innerTexts)
{
    innerTexts.forEach(innerText=>{
        /* make clone of first child start*/
        let firstText = innerText.firstElementChild.cloneNode('true');
        innerText.appendChild(firstText);
        /* make clone of first child end*/

        let i        = 0,
            speed    = 2000,
            distance = 95;

        setInterval(() => {
            let step = innerText.childElementCount;
            innerText.style.transform  = `translateY(-${distance * i}px)`;
            innerText.style.transition = "0.5s ease-in-out";
            console.log(i, step);
            if(i==step)
            {
                innerText.style.transition = "0s";
                innerText.style.transform = `translateY(0px)`;
            }

            // now change the value of i
            i = (i<step) ? (i+1) : 1;
        }, speed);
    });
};
