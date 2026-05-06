var headerHTML = `
<header class="header">
  <a class="navlink brand" href="index.html"><img src="images/TOSHIRO_BOOKS-04.png"></a>
   <div class="dropdown">
        <button class="dropbtn">Books</button>
        <div class="dropdown-content">
            <a class="navlink" href="portal.html">Portal</a>
            <a class="navlink" href="the-search.html">Portal #2: The Search</a>
            <a class="navlink" href="lost-and-alone.html">Portal #3: Lost And Alone</a>
        </div>
    </div>
  <a class="navlink" href="about.html">About</a>
  <a class="navlink" href="news.html">News</a>
  <a class="navlink" href="contact.html">Contact</a>
  <a class="navlink" href="extras.html">Extras</a>
</header>s
`
document.body.insertAdjacentHTML("beforebegin", headerHTML);