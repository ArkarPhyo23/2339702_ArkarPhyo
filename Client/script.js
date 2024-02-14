//Name: Arkar Phyo
//Student ID: 2339702
//Class: DIT/FT/1B/07

let allCarParkData; // Changed variable name for consistency

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error); // Updated error message for clarity
    return null;
  }
};

// ####################################################
// Function to retrieve all car park data asynchronously
// ####################################################

const getAllCarParkData = async () => {
  try {
    // Fetch car park data from the specified endpoint
    const data = await fetchData("http://localhost:8081/readAllCarPark");

    // Return the retrieved data, or null if no data is available
    return data || null;
  } catch (error) {
    // Log an error message if an error occurs during the data retrieval
    console.error(
      `An error occurred while getting car park data: ${error.message}`
    );

    // Return null in case of an error
    return null;
  }
};

// ####################################################
// Function to filter car park data based on prefix
// ####################################################

const filterCarParkByPrefix = async () => {
  try {
    // Retrieve all car park data using the getAllCarParkData function
    allCarParkData = await getAllCarParkData();

    // Check if the car parks exist
    if (allCarParkData === null) {
      console.log("Error: Unable to fetch car park data.");
      return;
    }

    // Check if there is no car park data available
    if (allCarParkData.length === 0) {
      console.log("No car park data available.");
      return;
    }

    // Get HTML elements for form and search results container
    const carParkNoForm = document.getElementById("carParkNoForm");
    const container = document.getElementById("searchResultsContainer");

    // Add event listener for form submission
    carParkNoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Get the prefix entered by the user and convert it to uppercase
      const prefix = document.getElementById("carparkNo").value.toUpperCase();

      // Filter car parks based on the entered prefix
      const filteredCarParks = allCarParkData.filter((carPark) =>
        carPark.car_park_no.startsWith(prefix)
      );

      // Handle case when no matching car parks are found
      if (filteredCarParks.length === 0) {
        console.log(`No car parks found with prefix: '${prefix}'`);
        document.getElementById(
          "carkParkQty"
        ).innerHTML = `${filteredCarParks.length} car parks found with name starting with "${prefix}"`;

        // Clear the search results container
        container.innerHTML = "";
      } else {
        // Display matching car parks in the console and update the UI
        console.log(`Car Parks with names starting with '${prefix}':`);
        document.getElementById(
          "carkParkQty"
        ).innerHTML = `${filteredCarParks.length} car parks found with name starting with "${prefix}"`;
        container.innerHTML = "";

        // Create and append car park cards for each matching car park
        filteredCarParks.map((carPark) => {
          const card = document.createElement("car-park-card");

          // Set attributes for the custom car-park-card element
          card.setAttribute("carkparkno", carPark.car_park_no);
          card.setAttribute("address", carPark.address);

          // Create a container div with Bootstrap class col-4
          const colContainer = document.createElement("div");
          colContainer.className = "col-12 col-md-4 mb-3";

          // Append the car-park-card to the container
          colContainer.appendChild(card);

          // Append the container to the main container (assuming container is your main container)
          container.appendChild(colContainer);
        });
      }
    });
  } catch (error) {
    // Log an error message if an error occurs during the filtering process
    console.error(`An error occurred: ${error.message}`);
  }
};

// ####################################################
// Function to filter car parks by gantry height
// ####################################################

const getCarParkByGantryHeight = async () => {
  try {
    // Get the HTML elements for search results container and gantry height form
    const container = document.getElementById("searchResultsContainer");
    const gantryHeightForm = document.getElementById("gantryHeightForm");

    // Add event listener for form submission
    gantryHeightForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Get the gantry height entered by the user
      const height = document.getElementById("gantryHeight").value;

      // Construct the URL for fetching car parks based on gantry height
      let url = `http://localhost:8081/byGantryHeight/${height}`;

      // Fetch car parks based on the gantry height
      const filteredCarParks = await fetchData(url);

      // Handle case when no matching car parks are found
      if (filteredCarParks.length === 0) {
        console.log(
          `No car parks found with gantry height equal to or higher than: ${height} m`
        );
        document.getElementById(
          "carkParkQty"
        ).innerHTML = `${filteredCarParks.length} car parks found with gantry height equal to or higher than ${height} m`;

        // Clear the search results container
        container.innerHTML = "";
      } else {
        // Display matching car parks in the console and update the UI
        console.log(
          `Car Parks with gantry height equal to or higher than '${height} m':`
        );

        document.getElementById(
          "carkParkQty"
        ).innerHTML = `${filteredCarParks.length} car parks found with gantry height equal to or higher than ${height} m`;
        container.innerHTML = "";

        // Create and append car park cards for each matching car park
        filteredCarParks.map((carPark) => {
          const card = document.createElement("car-park-card");

          // Set attributes for the custom car-park-card element
          card.setAttribute("carkparkno", carPark.car_park_no);
          card.setAttribute("address", carPark.address);
          card.setAttribute("gantryheight", carPark.gantry_height);

          // Create a container div with Bootstrap class col-4
          const colContainer = document.createElement("div");
          colContainer.className = "col-12 col-md-4 mb-3";

          // Append the car-park-card to the container
          colContainer.appendChild(card);

          // Append the container to the main container (assuming container is your main container)
          container.appendChild(colContainer);
        });
      }
    });
  } catch (error) {
    // Log an error message if an error occurs during the filtering process
    console.error(`An error occurred: ${error.message}`);
  }
};


// Execute the provided functions after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Call the function to filter car park data by prefix
  filterCarParkByPrefix();

  // Call the function to filter car parks by gantry height
  getCarParkByGantryHeight();
});

