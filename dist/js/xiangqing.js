$.ajax({
    url: "http://jx.xuzhixiang.top/ap/api/detail.php",
    data: {
        id: location.search.split('=')[1]
    },
    success: (res) => {
        console.log(res.data);
        let products = res.data;

        $(".img").attr('src', `${products.pimg}`)
        $(".span").html(`${products.pname}`)
        $(".span-1").html(`${products.pdesc}`)
        $(".span-4").html(`<span class="bianhao">编号：</span><span class="hao">${products.pid}</span>`)
        $(".span-2").html(`<span class="hdj">活动价：</span>￥${products.pprice}<span class="jia">￥999</span>`)
        $(".span-3").html(`<span class="wy">我要买：</span><button class="reduce">-</button>
      <input type="text" value="1" class="ipt">
      <button class="add">+</button><span class="dai">袋</span>
      <input type="button" value="加入购物车" class="addCarts">`)
    }
}).then(() => {
    $(".reduce").click(function() {
        let nowNum = $(".ipt").val();
        $(".ipt").val(nowNum - 1);
        if ($(".ipt").val() <= 0) {
            $(".ipt").val(1);
        }
    })
    $(".add").click(function() {
        let nowNum = $(".ipt").val();
        $(".ipt").val(+nowNum + 1);
    })
    $(".ipt").change(function() {
        if ($(".ipt").val() <= 0) {
            $(".ipt").val(1);
        }
    })
    $(".addCarts").click(function() {
        console.log($(".ipt").val())
        console.log(localStorage.getItem('u-id'))
        console.log(location.search.split('=')[1])
        $.ajax({
            url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
            type: "get",
            data: {
                uid: localStorage.getItem('u-id'),
                pid: location.search.split('=')[1],
                pnum: $(".ipt").val()
            },
            success: (res) => {
                location.href = "Cart.html";
                console.log(res)
            }
        })
    })
})