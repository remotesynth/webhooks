function sendWebhook(form) {
    axios.post('/.netlify/functions/zapierSend', {
        email: form.email.value,
        fullName: form.fullName.value
    })
    .then(function (response) {
        if (response.data.status === 'success') {
        form.sendInfo.disabled = true;
        form.email.value = '';
        form.sendInfo.value = 'Saved!';
        }
        else {
            alert('We apologize, there was a problem registering you.');
        }
    })
    .catch(function (error) {
        alert('We apologize, there was a problem registering you.');
    });

    return false;
}

function loadLinks() {
    let request = new XMLHttpRequest();
    request.open('GET', 'links.json', true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            let links = JSON.parse(this.response);
            let linksList = document.getElementById('linksList');
            let lis = '';
            links.links.forEach(element=>{
                lis = lis + '<li><a href="' + element.link + '">' + element.title + '</a></li>';
            });
            linksList.innerHTML = lis;
        } else {
            console.log('Something went wrong');
        }
    };
    request.onerror = function() {
        console.log('Something went wrong');
    };
      
    request.send();
}

loadLinks();