function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

//on clikng yuktha logo the hpme will navigate 
document.getElementById("yukthacont-logo").onclick = function() {
    window.location.href = "../html/yukthahome.html"; 
};

// on clcikng yutha name in footer the homr pahwe will navigate
document.getElementById("yukthaConstructionsfooter").onclick = function() {
    window.location.href = "../html/yukthahome.html"; 
};