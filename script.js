document.getElementById('get_activity').addEventListener('click', async () => {
    const responce = await fetch('http://www.boredapi.com/api/activity/');
    const result = await responce.json();
    document.getElementById('activitey').textContent = result.activity;
    document.getElementById('bot').textContent = '😃 ExcitedBot 😃';
    document.body.classList.add('fun');
});
