<template>
        <nav class="navbar fixed-top navbar-expand-md justify-content-between">
            <div class="container">
                <router-link to="/" class="navbar-brand">HOME</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Collections</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Stuff</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Latest News</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-md-0">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search Q">
                    </form>
                </div>
            </div>
        </nav>
    <!-- <nav class="nav-container">
        <div class="nav-mainlinks">
            <router-link to="/">Home</router-link>
            <router-link to="/about">Collections</router-link>
            <router-link to="/about">Stuff</router-link>
            <router-link to="/about">About Us</router-link>
        </div>
        <div class="nav-toolslinks">
            <router-link to="/">Research</router-link>
            <router-link to="/about">Your Account</router-link>
            <router-link to="/about">WishList</router-link>
            <router-link to="/about">Basket</router-link>
        </div>
    </nav> -->
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style>
nav{
    background-color: #d9d9d9;
}
navbar-nav li:hover > ul.dropdown-menu {
    display: block;
}
/* rotate caret on hover */
.dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
}
</style>
