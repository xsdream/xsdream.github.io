/*xs的js库*/

//快速清空表单
	//普通清空
$(':input','#myform').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
	//模态框下迭代清空
$(':input','#myform').each(function() {
    var type = this.type;
    var tag = this.tagName.toLowerCase(); // normalize case
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = "";
    // 跌代多选checkboxes
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    // select 迭代下拉框
    else if (tag == 'select')
      this.selectedIndex = -1;
  });


/*datepicker和bootstrap模态框冲突*/
datepicker被模态框遮住：尝试display：position   z-index
datepicker打开会调用模态框的hide.bs.modal监听，比较诡异！

validata是根据name来获取的
validate如果要验证隐藏的input，需要将min.js文件中的ignore:":hidden"改为ignore:""