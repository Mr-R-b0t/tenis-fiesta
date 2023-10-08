<template>
    <nav class="navbar fixed-top navbar-expand-lg ">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">HOME</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex w-50">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Collections</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Equipment</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">Latest news</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">About us</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex w-25" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul class="navbar-nav w-25">
                    <li class="nav-item"><a href="#" class="nav-link">Your Account</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Basket</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
nav{
    height: 100px;
    background-color: #d9d9d9;
    padding: 0% 2%;
    border-bottom: solid 1px #353535;
}

.navbar .nav-item .dropdown-menu { display: none; }
.navbar-nav .nav-item:hover  .dropdown-menu { display: flex; flex-direction: column; }
.navbar-nav .nav-item {padding: 8% 2%;}
.navbar .nav-item .dropdown-menu {
    margin-top: 30px;
    min-height: 100px;
    background-color: #d9d9d9;
    border-bottom: solid 1px #353535;
}
</style>
