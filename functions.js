//
//                            ______
//                           /      \
//                          /        \
//                         /          \
//                        /     /\     \
//                       /_____/  \_____\
//                ______________________________
//               |                              |
//               |____________      ____________|
//                   ______   |    |   ______
//                  /     /   |	   |   \     \
//                 /     /    |    |    \     \
//                /	    /     |    |     \     \
//               /     /      |____|      \     \
//              /     /__________________  \     \
//             /                         \  \     \
//            /___________________________\  \_____\
//                             ____
//                            |____|
//
//                         AUSON TSENG
//                       TSENG SHAO HUAN
//                            -2025-

/*

JavaScript code for the assignment 3 website implementation.

Many thanks to the subject teaching staff including my tutor
who have supported me throughout this semester.

*/

//opens the mobile side navigation bar
function openMobileSideBar()
{
	let sideBar = document.getElementById("sideBarMobile");
	
	sideBar.style.left = "0px";
}

//closes the mobile side navigation bar
function closeMobileSideBar()
{
	let sideBar = document.getElementById("sideBarMobile");
	
	sideBar.style.left = "-400px";
}

//opens the cart panel
function openCartBar()
{
	let cartBar = document.getElementById("cartBar");
	
	cartBar.style.right = "0px";
}

//closes the cart panel
function closeCartBar()
{
	let cartBar = document.getElementById("cartBar");
	
	cartBar.style.right = "-400px";
}

//a button to scroll the horizontal panels. Good for those unfamiliar with touch gestures
function scrollContent(scrollAmount)
{
	document.getElementById("featuredContentDiv").scrollLeft += parseInt(scrollAmount);
}

//hardcoded function to show/hide product entries in the cart panel based on whether item is in cart
function updateCartItems()
{;
	let prices = [124.99, 72.99, 49.99, 89.99];
	let cartTotalPrice = 0;
	let totalItemsInCart = 0;
	for (let i = 1; i < 5; i++)
	{
		if (localStorage.getItem("product" + i) != "true")
		{
			document.getElementById("product" + i.toString()).style.display = "none";
		}
		else
		{
			document.getElementById("product" + i.toString()).style.display = "inline";
			cartTotalPrice += parseFloat(prices[i - 1]);
			totalItemsInCart++;
		}
	}
	cartTotalPrice = Math.round(cartTotalPrice * 100);
	cartTotalPrice /= 100;
	document.getElementById("totalPrice").textContent = "Total price: $" + cartTotalPrice.toString();
	document.getElementById("itemTotal").textContent = totalItemsInCart.toString() + " item(s)";
	document.getElementById("numberOfItemsInCart").textContent = totalItemsInCart.toString();
}

//add a product to the cart
function addToCart(productID)
{
	localStorage.setItem("product" + productID.toString(), "true");
	document.getElementById("productCartButton" + productID.toString()).src = "Images/tickGreen.svg";
	updateCartItems();
}

//add product to cart but with extra functionality for styling
function addToCartFromProductPage(productID)
{
	localStorage.setItem("product" + productID.toString(), "true");
	document.getElementById("addToCartButton").style.backgroundColor = "green";
	document.getElementById("addToCartButton").style.backgroundImage = "url(Images/tick.svg)";
	document.getElementById("addToCartButton").style.boxShadow = "0px 2px 5px #006600";
	document.getElementById("addToCartButton").textContent = "Added to cart!";
	updateCartItems();
}

//deletes localStorage item
function removeFromCart(productID)
{
	localStorage.removeItem("product" + productID.toString());
	updateCartItems();
}

//when user clicks search
function search()
{
	let searchString = document.getElementById("searchBox").value;

	//go to search page with search query included in link
	window.open("searchPage.html" + "?" + searchString, "_self");
}

//setup the HTML elements on the search page
function setupSearchPage()
{
	let searchQuery = location.search.substring(1);
	let numOfResults = 0;
	let productNames = ["mario Party 2 n64 cartridge", "mario golf n64 cartridge", 
	"yoshi's story n64 cartridge", "banjo-tooie n64 cartridge"];

	//get the substring of the location search, excluding the ? at the beginning.
	document.getElementById("searchQueryLabel").textContent = "Showing results for: '" + location.search.substring(1) + "'";

	for (let i = 1; i < 5; i++)
	{
		if (!productNames[i - 1].toUpperCase().includes(searchQuery.toUpperCase())) //case-insensitive search
		{
			document.getElementById("productResult" + i.toString()).style.display = "none";
		}
		else
		{
			document.getElementById("productResult" + i.toString()).style.display = "block";
			numOfResults++;
		}
	}
	document.getElementById("searchNumberResults").textContent = numOfResults.toString() + " item(s)";

	//also update HTML elements in cart panel
	updateCartItems();
}

//setup page to display total price, cart items and number of items
function setupCheckoutPage()
{
	let prices = [124.99, 72.99, 49.99, 89.99];
	let cartTotalPrice = 0;
	let totalItemsInCart = 0;
	for (let i = 1; i < 5; i++)
	{
		if (localStorage.getItem("product" + i) != "true")
		{
			document.getElementById("product" + i.toString()).style.display = "none";
		}
		else
		{
			document.getElementById("product" + i.toString()).style.display = "inline";
			cartTotalPrice += parseFloat(prices[i - 1]);
			totalItemsInCart++;
		}
	}

	//round to 2 decimal places
	cartTotalPrice = Math.round(cartTotalPrice * 100);
	cartTotalPrice /= 100;

	document.getElementById("checkoutTotalPrice").textContent = "Total price: $" + cartTotalPrice.toString();
	document.getElementById("checkoutNumberOfItems").textContent = totalItemsInCart.toString() + " item(s)";

	//for some reason, HTML form submit reloads page and prevents window.open() from occuring.
	//This code disables default form functionality to fix that.
	document.getElementById("detailsForm").addEventListener("submit", function(event)
	{
		event.preventDefault()
	});

	//also update HTML elements in cart panel
	updateCartItems();
}

//enable/disable proceed button based on whether checkbox is ticked
function toggleNextButton()
{
	let nextButton = document.getElementById("nextButton");

	if (document.getElementById("tcToggle").checked)
	{
		nextButton.disabled = false;
	}
	else
	{
		nextButton.disabled = true;
	}
}

//when user clicks proceed button
function processCheckoutPage()
{	
	//field ids of form
	let formFields = ["fname", "lname", "email", "phone", "streetAddress", "suburb", "state", "postcode"];

	//basic custom validation since default HTML form validation prevents window.open() after submit
	//only makes sure fields are not empty and email field has an x@x format
	for (let i = 0; i < formFields.length; i++)
	{
		if (!document.getElementById(formFields[i]).validity.valid)
		{
			//fail
			alert("Please complete all required fields");
			return;
		}
	}
	
	//save the values into localStorage to use in next page

	for (let i = 0; i < formFields.length; i++)
	{
		localStorage.setItem(formFields[i], document.getElementById(formFields[i]).value);
	}
	
	//go to
	window.open("purchaseConfirmPage.html", "_self");
	

}

//loads variables for displaying confirmation page details
function setupConfirmationPage()
{
	updateCartItems();

	document.getElementById("fname").textContent = localStorage.getItem("fname");
	document.getElementById("lname").textContent = localStorage.getItem("lname");
	document.getElementById("email").textContent = localStorage.getItem("email");
	document.getElementById("phone").textContent = localStorage.getItem("phone");
	document.getElementById("streetAddress").textContent = localStorage.getItem("streetAddress");
	document.getElementById("suburb").textContent = localStorage.getItem("suburb");
	document.getElementById("state").textContent = localStorage.getItem("state");
	document.getElementById("postcode").textContent = localStorage.getItem("postcode");
}

//when user clicks on proceed button in confirm details page
function confirmDetailsSubmit()
{	
	//end of the scope of assignment 3
	alert("End of A3 website scope.");
}
