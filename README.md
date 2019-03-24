
1)Typescript

		○ 教程
			§ https://ts.xcatliu.com/introduction/get-typescript.html
		○ 语法
			§ Value:int
				□ 变量类型（int,string,double）
2)Setup

		1. Npm install -g @angular/cli
		2. Ng new (proiect name) 
    
3)cli命令行

		○ Run project (开始运行)
			§ Ng serve --open
		○ Create Component（创建Component）
			§ Ng generate component (file name)
      
 4)Component
 
		○ Selector
			§ 组件的选择器（CSS 元素选择器）
		○ templateUrl
			§ 组件模板文件的位置
		○ styleUrls
			§ 组件私有 CSS 样式表文件的位置
		○ Import 的class在app
			§ 记得放进@NgMudules里面的import
			§ 组件必须声明在NgModules中
			§ @component里面的file 不会影响其他component的变动
      
5)概念

		○ component
			§ html+css+class(ts+HTML+CSS)
		○ Module
			§ One or more Component
		○ Angular app
			§ One or more Module
      
6)语法

		○ 在ts file
			§ {{变量}}
				□ 在ts中的变量（value）绑定去HTML
		○ 在html file
			§ <app-heroes></app-heroes>
				□ 拿其他的component放进自己的component
			§ [(ngModel)]
				□ 双向数据绑定
			§ [class.(css class)]="value===value"
				□ 有条件变 css class
			§ *ngFor="let (value) of (value)"
				□ Loop
			§ *ngIf
				□ If
			§ 事件绑定
				□ (click)="function(参数)"
					® 点击后执行function
