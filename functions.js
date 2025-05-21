//
//							  ______
//			   				 /      \
//							/	     \
//						   /	      \
//						  /     /\     \
//						 /_____/  \_____\
//				  ______________________________
//				 |					            |
//               |____________      ____________|
//                   ______   |    |   ______
//                  /	  /   |	   |   \     \
//				   /	 /	  |	   |	\     \
//				  /	    /	  |	   |     \     \
//				 /	   /	  |____|      \     \
//				/     /__________________  \     \
//			   /					     \  \     \
//			  /___________________________\  \_____\
//			       			   ____
//							  |____|
//
//						   AUSON TSENG
//						 TSENG SHAO HUAN
//							  -2025-

/*

JavaScript code for the assignment 3 website implementation.

Many thanks to the subject teaching staff including my tutor
who have supported me throughout this semester.

*/

function openMobileSideBar()
{
	var sideBar = document.getElementById("sideBarMobile");
	
	sideBarMobile.style.left = "0px";
}

function closeMobileSideBar()
{
	var sideBar = document.getElementById("sideBarMobile");
	
	sideBarMobile.style.left = "-400px";
}
function scrollContent(scrollAmount)
{
	document.getElementById("featuredContentDiv").scrollLeft += parseInt(scrollAmount);
}
