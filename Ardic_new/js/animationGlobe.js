
if(window.localStorage.getItem('isLight') == 'true') {
    VANTA.GLOBE({
        el: "#hero",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0a4ee,
        color2: 0x000000,
        backgroundColor: 0xffffff
    })
} else {
    VANTA.GLOBE({
        el: "#hero",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff3f81,
        color2: 0xffffff,
        backgroundColor: 0x23153c
    })
}


function changeThemeGlobe() {
    if (window.localStorage.getItem('isLight') == 'true') {
        VANTA.GLOBE({
            el: "#hero",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0a4ee,
            color2: 0x000000,
            backgroundColor: 0xffffff
        })
    } else {
        VANTA.GLOBE({
            el: "#hero",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff3f81,
            color2: 0xffffff,
            backgroundColor: 0x23153c
        })
    }
}



