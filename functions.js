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
	for (let i = 1; i < 5; i++)
	{
		if (localStorage.getItem("product" + i) != "true")
		{
			document.getElementById("product" + i.toString()).style.visibility = "collapse";
		}
		else
		{
			console.log("test");
		}
	}
}
function addToCart(productID)
{
	localStorage.setItem("product" + productID.toString(), "true");
}
function removeFromCart(productID)
{
	localStorage.removeItem("product" + productID.toString());
	updateCartItems();
}
