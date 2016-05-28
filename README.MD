# `jQuery` 弹幕插件

`jquery.kof.danmu.js`

---

示例：

首先创建一个 `div` 作为弹幕块，并设置 id：

```
	<div id="yourId">

	</div>
```

然后引入 `jQuery` 和 `jquery.kof.danmu.js`：

```
	<script src="javascript/jquery.min.js"></script>
	<script src="javascript/jquery.kof.danmu.js"></script>
```

接下来初始化弹幕：

```
	<script>
		(function($) {
			$("#yourId").danmu({
				width: '500', 
				height: '300',
			});	
		});  
	</script>
```

OK，结束了，运行下看看效果吧

---