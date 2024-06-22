# Ravenous Project

## Purpose

The Ravenous project is a restaurant recommendation web application that allows users to search for local businesses (restaurants) based on their location and search terms. It replicates core functionalities similar to Yelp, where users can discover nearby restaurants, view their details, and sort results based on different criteria.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3 (with CSS Modules for styling)
- Yelp Fusion API

## Features

- **SearchBar Component:** Allows users to enter search terms (e.g., food type) and location to search for businesses.
- **BusinessList Component:** Displays a list of businesses fetched from the Yelp API based on user search criteria.
- **Business Component:** Represents individual businesses, displaying details such as name, address, category, rating, and review count.
- **Sorting Options:** Users can sort search results by Best Match, Highest Rated, and Most Reviewed (simulated for now).
- **Responsive Design:** Ensures the application works well across different devices and screen sizes.

## Future Work

- **User Authentication:** Implement user accounts to save favorite businesses and write reviews.
- **Enhanced Search Functionality:** Integrate more filtering options (e.g., price range, open now) and improve search accuracy.
- **Map Integration:** Display business locations on a map and provide directions.
- **Real-time Updates:** Implement real-time updates for search results using WebSockets or similar technologies.
- **Performance Optimization:** Optimize the application for faster load times and better user experience.

## Getting Started

1. Clone the repository: `git clone https://github.com/makrischaralampos/ravenous.git`
2. Install dependencies: `npm install`
3. Set up your Yelp API credentials as environment variables.
4. Start the development server: `npm start`
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Credits

This project is inspired by Codecademy's Ravenous project in their Full-Stack Engineer Career Path.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
