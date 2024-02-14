//Name: Arkar Phyo
//Student ID: 2339702
//Class: DIT/FT/1B/07


document.addEventListener("DOMContentLoaded", () => {
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer"
  );
  const carkParkQty = document.getElementById("carkParkQty");
  const prefixBtn = document.getElementById("prefixBtn");
  const heightBtn = document.getElementById("heightBtn");

  const carParkNoForm = document.getElementById("carParkNoForm");
  const gantryHeightForm = document.getElementById("gantryHeightForm");

  prefixBtn.addEventListener("click", () => {
    searchResultsContainer.innerHTML = "";
    carkParkQty.innerHTML = "";
    // Toggle button styling
    prefixBtn.classList.add("bg-light");
    prefixBtn.classList.remove("bg-transparent");
    heightBtn.classList.add("bg-transparent");
    heightBtn.classList.remove("bg-light");

    // Toggle form visibility
    carParkNoForm.classList.remove("d-none");
    gantryHeightForm.classList.add("d-none");
  });

  heightBtn.addEventListener("click", () => {
    searchResultsContainer.innerHTML = "";
    carkParkQty.innerHTML = "";
    // Toggle button styling
    heightBtn.classList.add("bg-light");
    heightBtn.classList.remove("bg-transparent");
    prefixBtn.classList.add("bg-transparent");
    prefixBtn.classList.remove("bg-light");

    // Toggle form visibility
    gantryHeightForm.classList.remove("d-none");
    carParkNoForm.classList.add("d-none");
  });
});
