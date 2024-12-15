function openSidebar(){
    document.getElementById("sidebar").style.width = "24em";
}

function closeSidebar(){
    document.getElementById("sidebar").style.width = "0em";
}

function toggleSidebar(){

    // for some reason the frst time the webpage opens the width is not undefined but set to '' 
    // this caused the user to have to pres the open button twice when first clicking before i addedded this fix
    if(document.getElementById("sidebar").style.width == ''){
        openSidebar();
    }else if ( document.getElementById("sidebar").style.width === "0em"){
        openSidebar();
    }else{
        closeSidebar();
    }
}

