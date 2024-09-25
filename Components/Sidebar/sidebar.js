function openSidebar(){
    document.getElementById("sidebar").style.width = "24em";
}

function closeSidebar(){
    document.getElementById("sidebar").style.width = "0em";
}

function toggleSidebar(){
    if ( document.getElementById("sidebar").style.width === '0em'){
        openSidebar();
    }else{
        closeSidebar();
    }
}

