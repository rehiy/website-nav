<script lang="ts" setup>
defineOptions({
    name: 'LayoutHeader',
});
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/assets/logo.png">
            </a>
            <div id="navbarSupported" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">开发者导航</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://tool.tdp.fan" target="_blank">站长工具箱</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://tdp.fan" target="_blank">腾讯云TDP</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="暂未开发">
                    <button class="btn btn-outline-light text-nowrap" type="submit">
                        搜索
                    </button>
                </form>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupported">
                <span class="navbar-toggler-icon" />
            </button>
        </div>
    </nav>
</template>

<style scoped lang="less">
.navbar-brand img {
    max-width: 235px
}

input[type="search"] {
    min-width: 200px;
}

button[aria-expanded="true"] {
    margin-top: 12px;
    margin-bottom: 6px;
}
</style>
