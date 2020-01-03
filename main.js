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