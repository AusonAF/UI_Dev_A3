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
//                 /	 /    |	   |    \     \
//                /	    /     |	   |     \     \
//               /	   /      |____|      \     \
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
