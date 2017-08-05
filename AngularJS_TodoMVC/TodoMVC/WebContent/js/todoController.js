angular.module('todomvc').controller('TodoCrtl', function($scope, $filter) {
//動態檢查是否有新增資料並取消全選
	
//新增資料
	$scope.addTodo=function(){
		//對輸入框的值做設定
		var newTodo={
				//接收輸入框輸入的參數，把空白去掉
				title:$scope.newTodo.trim(),
				completed:false
		};
		if(!newTodo.title){
			return;
		}
	}
	//將值傳到下面的list中
//修改資料
	//點擊兩下可以對已存在的資料進行修改
//刪除資料

//輸入的資料分成全部、未完成、已完成
})