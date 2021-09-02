# PropView-Backend

## How to Start/Restart/Stop Server

### In Localhost
> npm run dev

### In Production Server
> npm run prod-start

> npm run prod-restart

> npm run prod-stop

### Project Structure
```
.
├── README.md
├── config
│   ├── config.js
│   ├── database.js
│   ├── dev.js
│   ├── firebase.js
│   ├── key.js
│   ├── prod.js
│   └── propview-1fe6c-firebase-adminsdk-349cg-004f11e037.json
├── controllers
│   ├── attendance.js
│   ├── auth.js
│   ├── inspection.js
│   ├── inspection_type.js
│   ├── issue.js
│   ├── notification.js
│   ├── property.js
│   ├── property_owner.js
│   ├── property_room.js
│   ├── task.js
│   ├── task_category.js
│   ├── upload-image.js
│   ├── user.js
│   └── user_property.js
├── cron
│   └── attendance.js
├── models
│   ├── attendance.js
│   ├── inspection.js
│   ├── inspection_type.js
│   ├── issue.js
│   ├── issue_table.js
│   ├── property.js
│   ├── property_owner.js
│   ├── property_room.js
│   ├── task.js
│   ├── task_category.js
│   ├── user.js
│   └── user_property.js
├── package-lock.json
├── package.json
├── routes
│   ├── attendance.js
│   ├── auth.js
│   ├── inspection.js
│   ├── inspection_type.js
│   ├── issue.js
│   ├── notification.js
│   ├── property.js
│   ├── property_owner.js
│   ├── property_room.js
│   ├── task.js
│   ├── task_category.js
│   ├── upload-image.js
│   ├── user.js
│   └── user_property.js
├── scripts
│   ├── constructor_script.js
│   └── query_script.js
└── server.js

6 directories, 54 files
```
