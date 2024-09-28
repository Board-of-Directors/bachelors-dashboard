#### Методы групп

1. GET /api/v1/group/all
   Получает список групп для экрана Главная/Таблицы.
   Отдает группы отсортированные по возрастанию идентификатора.
```
{  
  "groups": [  
    {  
      "id": Number!, 
      "name": String!,
      "favourite": Boolean!
    }  
  ],  
  "count": Number!
}
```

2. POST /api/v1/group
   Позволяет добавить группу.
   Запрос вида:
```
{
	"name": String!
}
```

3. PUT /api/v1/group?id=?
   Позволяет изменять группу.
   Используется для редактирования названия таблиц, добавления в избранное.
   Запрос вида:
```
{
	"id": Number!
	"name": String?,
	"favourite": Boolean?,
}
```
4. PUT /api/v1/group/access
   Позволяет добавлять права доступа до группы таблиц.
   Запрос вида
```
{
	"id": Number!,
	"email": [String!, String!, String!]
}
```
5. DELETE /api/v1/group/access
   Позволяет забирать права доступа до группы таблиц.
   Запрос вида
```
{
	"id": Number!,
	"email": String!
}
