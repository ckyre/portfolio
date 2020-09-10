<footer>
    <ul id="parent-cercles">
    </ul>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        width: 100vw;
        background-color: white;
    }
    footer ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40vw;
        margin: 0 auto 2.6vw auto;
    }
    footer ul li {
        margin-top: 5px;
        z-index: 1;
        /*cursor: pointer;*/
        background-color: white;
    }
    footer ul li svg circle {
        transition: fill 0.5s;
    }
    footer ul li svg .active {
        fill: #186BF0;
    }
    footer ul li:hover svg circle:not(.active) {
        fill: #646464;
    }
    footer ul li:hover svg .active {
        fill: rgb(64, 131, 240);
    }
    footer .line {
        position: absolute;
        width: 40vw;
        height: 1px;
        border-top: dashed 2px grey;
    }
    footer .line-blue {
        position: absolute;
        width: 0vw;
        height: 1px;
        border-top: dashed 2px #186BF0;
        background-color: white;
    }
</style>