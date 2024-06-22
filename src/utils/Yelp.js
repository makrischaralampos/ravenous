import "whatwg-fetch";

const apiKey = process.env.REACT_APP_YELP_API_KEY;
const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

const Yelp = {
  searchBusinesses(term, location, sortBy) {
    const url = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.businesses) {
          return data.businesses.map((business) => ({
            id: business.id,
            name: business.name,
            imageSrc: business.image_url,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        } else {
          throw new Error("Unable to fetch business listings");
        }
      });
  },
};

export default Yelp;
