import logo from "./savory_heaven.png";

const homeDiv = document.createElement("div");
homeDiv.classList.add("home-div");

const nameImageAndSlogan = document.createElement("div");
nameImageAndSlogan.classList.add("name-image-and-slogan");
homeDiv.appendChild(nameImageAndSlogan);

const nameAndSlogan = document.createElement("div");
nameAndSlogan.classList.add("name-and-slogan");
nameImageAndSlogan.appendChild(nameAndSlogan);

const name = document.createElement("div");
name.classList.add("name");
nameAndSlogan.appendChild(name);

const mainNameFirst = document.createElement("h1");
mainNameFirst.classList.add("main-name-top");
mainNameFirst.textContent = "Savory";
name.appendChild(mainNameFirst);

const mainNameSecond = document.createElement("h1");
mainNameSecond.classList.add("main-name-bottom");
mainNameSecond.textContent = "Heaven";
name.appendChild(mainNameSecond);

const slogan = document.createElement("p");
slogan.classList.add("slogan");
slogan.textContent = "One spoon closer to salvation";
nameAndSlogan.appendChild(slogan);

const image = document.createElement("img");
image.classList.add("logo-image");
image.src = logo;
nameImageAndSlogan.appendChild(image);

const mainInfo = document.createElement("div");
mainInfo.classList.add("main-info");
homeDiv.appendChild(mainInfo);

const hoursContainer = document.createElement("div");
hoursContainer.classList.add("hours-container");
mainInfo.appendChild(hoursContainer);

const hoursHeader = document.createElement("h3");
hoursHeader.classList.add("hours-header");
hoursHeader.textContent = "Hours:";
hoursContainer.appendChild(hoursHeader);

const hoursSunday = document.createElement("p");
hoursSunday.classList.add("hours");
hoursSunday.textContent = "Sunday: 8am - 8pm";
hoursContainer.appendChild(hoursSunday);

const hoursMonday = document.createElement("p");
hoursMonday.classList.add("hours");
hoursMonday.textContent = "Monday: 6am - 6pm";
hoursContainer.appendChild(hoursMonday);

const hoursTuesday = document.createElement("p");
hoursTuesday.classList.add("hours");
hoursTuesday.textContent = "Tuesday: 6am - 6pm";
hoursContainer.appendChild(hoursTuesday);

const hoursWednesday = document.createElement("p");
hoursWednesday.classList.add("hours");
hoursWednesday.textContent = "Wednesday: 6am - 6pm";
hoursContainer.appendChild(hoursWednesday);

const hoursThursday = document.createElement("p");
hoursThursday.classList.add("hours");
hoursThursday.textContent = "Thursday: 6am - 10pm";
hoursContainer.appendChild(hoursThursday);

const hoursFriday = document.createElement("p");
hoursFriday.classList.add("hours");
hoursFriday.textContent = "Friday: 6am - 10pm";
hoursContainer.appendChild(hoursFriday);

const hoursSaturday = document.createElement("p");
hoursSaturday.classList.add("hours");
hoursSaturday.textContent = "Saturday: 8am - 10pm";
hoursContainer.appendChild(hoursSaturday);

const locationContainer = document.createElement("div");
locationContainer.classList.add("location-container");
mainInfo.appendChild(locationContainer);

const locationHeader = document.createElement("h3");
locationHeader.classList.add("location-header");
locationHeader.textContent = "Location:";
locationContainer.appendChild(locationHeader);

const locationStreet = document.createElement("p");
locationStreet.classList.add("location");
locationStreet.textContent = "123 Maplewood Avenue";
locationContainer.appendChild(locationStreet);

const locationState = document.createElement("p");
locationState.classList.add("location");
locationState.textContent = "Pleasantville, CA 90210";
locationContainer.appendChild(locationState);

const locationCountry = document.createElement("p");
locationCountry.classList.add("location");
locationCountry.textContent = "United states";
locationContainer.appendChild(locationCountry);
export default homeDiv;
