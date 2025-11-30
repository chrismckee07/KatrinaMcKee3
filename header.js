var headerHTML = `
<header class="header">
  <a class="navlink brand" href="index.html">Katrina<br>&nbsp &nbsp &nbsp McKee</a>
  <a class="navlink short-brand" href="index.html">KM</a>
   <div class="dropdown">
        <button class="dropbtn">Books</button>
        <div class="dropdown-content">
            <a class="navlink" href="portal.html">Portal</a>
            <a class="navlink" href="the_search.html">The Search</a>
        </div>
    </div>
  <a class="navlink" href="about.html">About</a>
  <a class="navlink" href="news.html">News</a>
  <a class="navlink" href="extras.html">Extras</a>
</header>
`
document.body.insertAdjacentHTML("beforebegin", headerHTML);