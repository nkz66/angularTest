
	
## Typescript
  ○ 教程
			- https://ts.xcatliu.com/introduction/get-typescript.html
	○ 语法
			- Value:int
				* 变量类型（int,string,double）
 ## Setup
 1. Npm install -g @angular/cli
 2. Ng new (proiect name) 
 ## cli命令行
  ○ Run project (开始运行)
			- Ng serve --open
	○ Create Component（创建Component）
			- Ng generate component (file name)
 ## Component
   ○ Selector
			- 组件的选择器（CSS 元素选择器）
   ○ templateUrl
			- 组件模板文件的位置
   ○ styleUrls
			- 组件私有 CSS 样式表文件的位置
   ○ Import 的class在app
			- 记得放进@NgMudules里面的import
			- 组件必须声明在NgModules中
			- @component里面的file 不会影响其他component的变动
			
## 概念
   ○ component
			- html+css+class(ts+HTML+CSS)
   ○ Module
			- One or more Component
   ○ Angular app
			- One or more Module
## 语法
   ○ 在ts file
			1) {{变量}}
				- 在ts中的变量（value）绑定去HTML
   ○ 在html file
			1) <app-heroes></app-heroes>
				- 拿其他的component放进自己的component
			2) [(ngModel)]
				- 双向数据绑定
			3) [class.(css class)]="value===value"
				- 有条件变 css class
			4) *ngFor="let (value) of (value)"
				- Loop
			5) *ngIf
				- If
			6) 事件绑定
				- (click)="function(参数)"
					* 点击后执行function
