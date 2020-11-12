$.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    uid: 44154
}).then(data => {
    console.log(data);
})

// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//     pimg: "https://img2.epetbar.com/nowater/2020-11/02/12/6a3701eeab1061d0c2695f87908a03e2.jpg@!200w-c",
//     pname: "海洋之星 熟巧克力冻干全犬粮 5.2kg",
//     pprice: "589",
//     pdesc: "月销848538袋",
//     uid: 44154
// }, data => {
//     console.log(data);

// })


// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//     pimg: "https://img2.epetbar.com/nowater/2020-11/02/12/286882d5c393df50d454965c82b9d9cd.jpg@!200w-c",
//     pimg1: "https://img2.epetbar.com/nowater/2016-08/12/16/767d7a6fa90ae39212dc0e9c087cb524.jpg",
//     pname: "耐吉斯SOLUTION  加拿大版 火鸡+苹果配方 玩赏犬犬粮 1.5kg",
//     pprice: "108",
//     pdesc: "月销136袋",
//     uid: 44154
// }, data => {
//     console.log(data);

// })

//删除
// $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
//     pid: 344928,
//     uid: 44154,
//     token: "6aee2f338430f6532783436c5bd04266"
// }, data => {
//     console.log(data);
// })



$(function() {
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
        type: "get",
        data: {
            uid: 44154
        },
        success: function(res) {
            console.log(res.data);
            let products = res.data;
            let str = "";
            products.forEach(imte => {
                str += `
                <a href="xiangqing.html?pid=${imte.pid}">
                        <li>
                        <img src="${imte.pimg}" alt="">
                        <div class="bs">保税</div>
                        <div class="hd">活动</div>
                        <span class="a4">${imte.pid}</span>
                        <span class="a1">${imte.pname}</span>
                        <span class="a2">￥${imte.pprice}</span>
                        <span class="a3">${imte.pdesc}</span>
                        </li>

                </a>`
            });
            $("#list").html(str);
        }
    })
})