// gets the first <hr> element.
// you can do .hr for an element that has "hr" class
// or #hr for an element that has "hr" id
const nav_underline = document.querySelector('hr');

if (window.location.pathname == "/index.html" || window.location.pathname == "/")
{
    nav_underline.style.marginLeft = "1.2%";
    nav_underline.style.width = "18%";
}
else if (window.location.pathname == "/projects.html")
{
    nav_underline.style.marginLeft = "31%";
    nav_underline.style.width = "24.5%";
}
else if (window.location.pathname == "/contact.html")
{
    nav_underline.style.marginLeft = "67.2%";
    nav_underline.style.width = "23.8%";
}
