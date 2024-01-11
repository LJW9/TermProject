// Function to fetch JSON data asynchronously
async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to filter and display restaurants based on user selection
async function filterRestaurants(filterValue) {
    // Fetch JSON data
    const restaurantData = await fetchData();

    // Implement filtering logic based on selected option
    // Update the content of the "restaurantList" table with filtered data

    const restaurantTable = document.getElementById('restaurantTable');
    const restaurantListBody = document.getElementById('restaurantList');

    // Example: Display all restaurants if 'All Restaurants' is selected
    if (filterValue === 'all') {
        displayRestaurants(restaurantData);
        restaurantTable.style.display = 'table'; // Show the table
    } else {
        const filteredData = restaurantData.filter(restaurant => restaurant.area === filterValue || restaurant.cuisine === filterValue);
        displayRestaurants(filteredData);
        restaurantTable.style.display = 'table'; // Show the table
    }
}

// Function to display restaurants in the "restaurantList" table
function displayRestaurants(data) {
    const restaurantListBody = document.getElementById('restaurantList');
    restaurantListBody.innerHTML = '';

    if (Array.isArray(data) && data.length > 0) {
        data.forEach(restaurant => {
            const row = restaurantListBody.insertRow();

            if (restaurant.widget && restaurant.widget.venueId) {
                // Generate unique IDs for the widget
                const triggerId = `widget-button-${restaurant.restaurant.replace(/\s+/g, '-').toLowerCase()}`;
                const venueId = restaurant.widget.venueId;

                // Include the SevenRooms widget script for each restaurant
                const widgetScript = document.createElement('script');
                widgetScript.src = 'https://www.sevenrooms.com/widget/embed.js';
                widgetScript.async = true;
                widgetScript.onload = function () {
                    SevenroomsWidget.init({
                        venueId: venueId,
                        triggerId: triggerId,
                        type: restaurant.widget.type,
                        styleButton: restaurant.widget.styleButton,
                        clientToken: restaurant.widget.clientToken
                    });
                };
                document.head.appendChild(widgetScript);

                row.innerHTML = `
                    <td>${restaurant.restaurant}</td>
                    <td>${restaurant.cuisine}</td>
                    <td>${restaurant.area}</td>
                    <td>${restaurant.city}</td>
                    <td><div><button id="${triggerId}" type="button"><p>Reservation</p></button></div></td>
                `;
            } else if (restaurant['reservation link']) {
                // For entries with reservation link
                row.innerHTML = `
                    <td>${restaurant.restaurant}</td>
                    <td>${restaurant.cuisine}</td>
                    <td>${restaurant.area}</td>
                    <td>${restaurant.city}</td>
                    <td><a href="${restaurant['reservation link']}" target="_blank" class="reservation-button">Reservation</a></td>
                `;
            }
        });
    } else {
        restaurantListBody.innerHTML = '<tr><td colspan="5">No restaurants found.</td></tr>';
    }
}

// Initial function call to hide the table initially
window.onload = function () {
    const restaurantTable = document.getElementById('restaurantTable');
    restaurantTable.style.display = 'none'; // Hide the table initially
};
