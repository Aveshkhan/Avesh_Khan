import React from 'react'

export const DarkMode = () => {

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }


    return (
        <>
            <label className="label">
                <div className="toggle">
                    <input className={theme === "dark" ? clickedClass : ""} id="darkMode"
                     onChange={(e) => switchTheme(e)}
                      type="checkbox" />
                    <div className="indicator"><box-icon name='sun' color='var(--font-color)' ></box-icon><box-icon name='moon' color='var(--font-color)' ></box-icon></div>
                </div>
            </label>
        </>
    )
}
