pf = {
    TodoData:[],
    DafuaultData: [],
    CheckData:function(){},
    CreateDeFaultData:function(){},
    LoadTodoItemData:function(){},
    AddTodoItem:function(){},
    DelTodoItem:function(){},
    
}
$(document).ready(function () {
    console.log("CheckData   ")
    
    pf.CreateDeFaultData()
   
   
    $('.todo_list .Category').on('click', 'li', function () {
        $('.todo_list .Category li.active').removeClass('active');
        $(this).addClass('active');
    });


    $(".new_todo_text input").keyup(function(e){

        var code = e.key; // recommended to use e.key, it's normalized across devices and languages
        console.log(code)
        if (code === "Enter") e.preventDefault();
        if (code === " " || code === "Enter" || code === "," || code === ";") {
            var Text = $(".new_todo_text input").val()
            console.log(Text)
            var HtmlStr = "<li>"
            HtmlStr +="<input type='checkbox' >"
            HtmlStr += "<label for=''> " + Text + "</label>"
            HtmlStr +="</li>"
            $(".data_list").append(HtmlStr)
            $(".new_todo_text input").val("")
        }  


    })

    pf.LoadTodoItemData()
    pf.CheckData()

});


pf.LoadTodoItemData = function(){


    for (var key in pf.TodoData){

        var HtmlStr = "<li "
        if(pf.TodoData[key].enable){
            HtmlStr +=" style='text-decoration: line-through; ' ";
        }
        HtmlStr +="  >"
        HtmlStr += "<input type='checkbox'    "
        if (pf.TodoData[key].enable) { HtmlStr += " checked ";}else{ }
        HtmlStr +=" > "
        HtmlStr += "<label for=''> " + pf.TodoData[key].todoText + "</label>"
        HtmlStr += "</li>"
        $(".data_list").append(HtmlStr)

    }



}


pf.CheckData = function(){ 
    $(".data_list").each(function(){
    
        var Count = 0
        $(this).find('li').each(function () {
            console.log(this)
            Count++
        });

        if (Count>0)
        {
            $(".Show_Text").hide();
            $(".empty_list_img").hide();
            
        }else{
            $(".Show_Text").show();
            $(".empty_list_img").show();

        }
    })

}


pf.CreateDeFaultData = function(){
    
    var dataObj = {
        todoText:'把冰箱發霉的檸檬拿去丟',
        enable:false,
    }
    pf.TodoData.push(dataObj)

    var dataObj = {
        todoText: '打電話叫媽媽匯款給我',
        enable: true,
    }
    pf.TodoData.push(dataObj)

    var dataObj = {
        todoText: '整理電腦資料夾',
        enable: false,
    }
    pf.TodoData.push(dataObj)


    var dataObj = {
        todoText: '繳電費水費瓦斯費',
        enable: true,
    }
    pf.TodoData.push(dataObj)


    var dataObj = {
        todoText: '約vicky禮拜三泡溫泉',
        enable: false,
    }
    pf.TodoData.push(dataObj)

    var dataObj = {
        todoText: '約ada禮拜四吃晚餐',
        enable: false,
    }
    pf.TodoData.push(dataObj)


}



