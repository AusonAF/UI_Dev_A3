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
//                  /	  /   |	   |   \     \
//                 /	 /    |    |    \     \
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

function openMobileSideBar()
{
	let sideBar = document.getElementById("sideBarMobile");
	
	sideBar.style.left = "0px";
}

function closeMobileSideBar()
{
	let sideBar = document.getElementById("sideBarMobile");
	
	sideBar.style.left = "-400px";
}
function openCartBar()
{
	let cartBar = document.getElementById("cartBar");
	
	cartBar.style.right = "0px";
}

function closeCartBar()
{
	let cartBar = document.getElementById("cartBar");
	
	cartBar.style.right = "-400px";
}
function scrollContent(scrollAmount)
{
	document.getElementById("featuredContentDiv").scrollLeft += parseInt(scrollAmount);
}
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
function addToCart(productID)
{
	localStorage.setItem("product" + productID.toString(), "true");
	document.getElementById("productCartButton" + productID.toString()).src = "Images/tickGreen.svg";
	updateCartItems();
}
function addToCartFromProductPage(productID)
{
	localStorage.setItem("product" + productID.toString(), "true");
	document.getElementById("addToCartButton").style.backgroundColor = "green";
	document.getElementById("addToCartButton").style.backgroundImage = "url(Images/tick.svg)";
	document.getElementById("addToCartButton").style.boxShadow = "0px 2px 5px #006600";
	document.getElementById("addToCartButton").textContent = "Added to cart!";
	updateCartItems();
}
function removeFromCart(productID)
{
	localStorage.removeItem("product" + productID.toString());
	updateCartItems();
}
function search()
{
	let searchString = document.getElementById("searchBox").value;
	window.open("searchPage.html" + "?" + searchString, "_self");
}
function setupSearchPage()
{
	let searchQuery = location.search.substring(1);
	let numOfResults = 0;
	let productNames = ["mario Party 2 n64 cartridge", "mario golf n64 cartridge", 
	"yoshi's story n64 cartridge", "banjo-tooie n64 cartridge"];

	document.getElementById("searchQueryLabel").textContent = "Showing results for: '" + location.search.substring(1) + "'";

	for (let i = 1; i < 5; i++)
	{
		if (!productNames[i - 1].toUpperCase().includes(searchQuery.toUpperCase()))
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

	updateCartItems();
}
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
	cartTotalPrice = Math.round(cartTotalPrice * 100);
	cartTotalPrice /= 100;
	document.getElementById("checkoutTotalPrice").textContent = "Total price: $" + cartTotalPrice.toString();
	document.getElementById("checkoutNumberOfItems").textContent = totalItemsInCart.toString() + " item(s)";

	updateCartItems();
}
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
function processCheckoutPage()
{
	alert("End of A3 website scope.");
	localStorage.setItem("fname", document.getElementById("fname").value);
	localStorage.setItem("lname", document.getElementById("lname").value);
	localStorage.setItem("email", document.getElementById("email").value);
	localStorage.setItem("phone", document.getElementById("phone").value);
	localStorage.setItem("streetAddress", document.getElementById("streetAddress").value);
	localStorage.setItem("suburb", document.getElementById("suburb").value);
	localStorage.setItem("state", document.getElementById("state").value);
	localStorage.setItem("postcode", document.getElementById("postcode").value);

	window.open("homePage.html", "_self", "");
}
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
function confirmDetailsSubmit()
{
	alert("End of A3 website scope.");
}
