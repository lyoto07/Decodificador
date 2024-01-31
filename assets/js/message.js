function dangerNotification(message){
    console.log(message)
    showNotification(message, 'red');
}

function attentionNotification(message){
    showNotification(message, 'yellow');
}

function successNotification(message){
    showNotification(message, 'green');
}

function showNotification(message, color) {
    let container = document.getElementById('notification-container');
    let notificationCard =  document.createElement("div");
    notificationCard.classList.add("notification-card");
    notificationCard.classList.add(color);

    notificationCard.textContent = message;

    container.appendChild(notificationCard);

    setTimeout(function () { 

    },100);
    setTimeout(function () {
        notificationCard.classList.add("show");
        
        
        setInterval(function (){
            notificationCard.style.position =  'relative';
            notificationCard.style.width =  '100%';
        },400)
    }, 100);

    setTimeout(function() {
        notificationCard.classList.add("hide");

        setTimeout(function(){
            container.removeChild(notificationCard);
        },500)
    },3000)
}


export { dangerNotification, successNotification, attentionNotification, showNotification };