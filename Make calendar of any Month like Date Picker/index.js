document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('datepickerInput');
    const calendar = document.getElementById('calendar');

    // Function to generate the calendar for a specific month and year
    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        let calendarHTML = '<table>';
        calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

        let dayCounter = 1;

        for (let i = 0; i < 6; i++) {
            calendarHTML += '<tr>';
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDay.getDay()) || dayCounter > daysInMonth) {
                    calendarHTML += '<td></td>';
                } else {
                    calendarHTML += `<td>${dayCounter}</td>`;
                    dayCounter++;
                }
            }
            calendarHTML += '</tr>';
        }

        calendarHTML += '</table>';
        calendar.innerHTML = calendarHTML;
    }

    // Event listener to show the calendar when the input is clicked
    input.addEventListener('click', function () {
        const currentDate = new Date();
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
        calendar.style.display = 'block';
    });

    // Event listener to hide the calendar when clicking outside the input and calendar
    document.addEventListener('click', function (event) {
        if (!input.contains(event.target) && !calendar.contains(event.target)) {
            calendar.style.display = 'none';
        }
    });
});
