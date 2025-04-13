document.getElementById('meteo-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    
    // Remplacez 'votre_clé_api' par votre clé API réelle d'OpenWeatherMap
   
    const apiKey = 'dcf87a5891f29cbefcf4fc92391d252f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                
                // Mettre à jour le DOM avec les données récupérées
                document.getElementById('city-name').textContent = `Météo à ${cityName}`;
                document.getElementById('temperature').textContent = `Température : ${temperature}°C`;
                document.getElementById('meteo-description').textContent = `Description : ${description}`;
            } else {
                alert("Ville non trouvée, veuillez réessayer.");
            }
        })
        .catch(error => {
            alert("Erreur lors de la récupération des données météo.");
        });
});
