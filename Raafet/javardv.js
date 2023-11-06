document.addEventListener('DOMContentLoaded', function() {
    var timeSelect = document.getElementById('time');
    var dateInput = document.getElementById('date');

    dateInput.addEventListener('change', function() {
        // Réinitialiser les options du menu déroulant des horaires
        timeSelect.innerHTML = '';

        var selectedDate = new Date(dateInput.value);
        var startHour = 15; // Heure de début (15h)
        var endHour = 19; // Heure de fin (19h)

        // Générez les créneaux horaires pour la date sélectionnée
        while (startHour < endHour) {
            for (var minutes = 0; minutes < 60; minutes += 30) {
                var option = document.createElement('option');
                var timeString = ('0' + startHour).slice(-2) + ':' + ('0' + minutes).slice(-2);
                option.value = timeString;
                option.text = timeString;
                timeSelect.add(option);
            }
            startHour++;
        }
    });
});
